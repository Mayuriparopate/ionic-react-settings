import { useState, useEffect, useRef } from "react";

const useAudioSettings = () => {
  const [segment, setSegment] = useState<string>("Audio");
  const [inputDevices, setInputDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedInput, setSelectedInput] = useState<string>("");
  const [inputVolume, setInputVolume] = useState<number>(50);
  const [inputLevel, setInputLevel] = useState<number>(0);
  const [outputLevel, setOutputLevel] = useState<number>(0);
  const [isTestingMic, setIsTestingMic] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);
  const [outputDevices, setOutputDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedOutput, setSelectedOutput] = useState<string | null>("");
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const fetchMicrophoneDevices = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      const devices = await navigator.mediaDevices.enumerateDevices();
      const inputs = devices.filter((device) => device.kind === "audioinput");
      const outputs = devices.filter((device) => device.kind === "audioinput");
      const storedDeviceId = localStorage.getItem("selectedAudioDevice");
      const getOutputDeviceId = localStorage.getItem("selectedOutputDevice");

      const validInputDevice = inputs.find(
        (d) => d.deviceId === storedDeviceId
      );
      if (validInputDevice) {
        setSelectedInput(storedDeviceId!);
      } else {
        localStorage.removeItem("selectedAudioDevice");
        setSelectedInput(inputs[0]?.deviceId || "");
      }

      const validOutputDevice = outputs.find(
        (d) => d.deviceId === getOutputDeviceId
      );
      if (validOutputDevice) {
        setSelectedOutput(storedDeviceId);
      } else {
        localStorage.removeItem("selectedOutputDevice");
        setSelectedOutput(inputs[0]?.deviceId || "");
      }

      if (inputs.length === 0 || outputs.length === 0) {
        alert("No Input / Output devices found.");
      } else {
        setInputDevices(inputs);
        setOutputDevices(outputs);
        setSelectedInput(inputs[0].deviceId);
        setSelectedOutput(outputs[0].deviceId);
      }
    } catch (err:any) {
      if (err?.name === "NotAllowedError") {
        alert(
          "Microphone access is denied. Please enable it in your device settings."
        );
      } else if (err?.name === "NotFoundError") {
        alert("No microphone device found.");
      } else {
        alert("Error accessing microphone: " + err.message);
      }
    }
  };

  const requestMicrophoneAccess = async (deviceId:string) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: deviceId ? { deviceId } : true,
      });
      return stream;
    } catch (err:any) {
      if (err.name === "NotAllowedError") {
        alert(
          "Microphone access is denied. Please enable it in your device settings."
        );
      } else if (err.name === "NotFoundError") {
        alert("No microphone device found.");
      } else {
        alert("Error accessing microphone: " + err.message);
      }
      throw err;
    }
  };

  const handleTestMic = async () => {
    if (isTestingMic) {
      stopMicTest();
      return;
    }

    setIsTestingMic(true);
    try {
      const stream = await requestMicrophoneAccess(selectedInput);
      mediaStreamRef.current = stream;

      const audioContext = new AudioContext();
      audioContextRef.current = audioContext;

      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      analyserRef.current = analyser;

      const gainNode = audioContext.createGain();
      gainNode.gain.value = inputVolume / 100;
      gainNodeRef.current = gainNode;

      const destination = audioContext.destination;

      source.connect(analyser);
      analyser.connect(gainNode);
      gainNode.connect(destination);

      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      const visualize = () => {
        analyser.getByteFrequencyData(dataArray);
        const average =
          dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;
        setInputLevel(average);
        requestAnimationFrame(visualize);
      };

      visualize();
    } catch (err:any) {
      alert("Error accessing microphone: " + err?.message);
      stopMicTest();
    }
  };

  const stopMicTest = () => {
    setIsTestingMic(false);
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track:any) => track.stop());
      mediaStreamRef.current = null;
    }
    setInputLevel(0);
  };

  const handleVolumeChange = (volume:number, type:string) => {
    if (type === "input" && gainNodeRef.current) {
      gainNodeRef.current.gain.value = volume / 100;
      setInputVolume(volume);
    }
  };

  const handleDeviceSelection = (type:string, deviceId:string, deviceLabel:string) => {
    if (type === "input") {
      setSelectedInput(deviceId);
      localStorage.setItem("selectedAudioInput", deviceId);
    } else {
      setSelectedOutput(deviceId);
      localStorage.setItem("selectedAudioOutput", deviceId);
    }
    setToastMessage(`Selected ${type} device: ${deviceLabel || "Default"}`);
    setShowToast(true);
  };

  const playTestAudio = async () => {
    try {
      let testAudioElement = audioElement;

      if (!testAudioElement) {
        testAudioElement = new Audio(
          "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        );
        setAudioElement(testAudioElement);
      }

      if (testAudioElement) {
        await testAudioElement.play();
        setIsAudioPlaying(true);
      }

      const audioContext = new AudioContext();
      audioContextRef.current = audioContext;

      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      analyserRef.current = analyser;

      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      const visualize = async () => {
        await resumeAudioContext();
        analyser.getByteFrequencyData(dataArray);
        const average =
          dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;

        setOutputLevel(average);
        requestAnimationFrame(visualize);
      };

      visualize();
    } catch (err:any) {
      console.error("Error playing test audio:", err);
      alert("Error playing test audio: " + err.message);
    }
  };

  const resumeAudioContext = async () => {
    if (
      audioContextRef.current &&
      audioContextRef.current.state === "suspended"
    ) {
      await audioContextRef.current.resume();
    }
  };

  const stopTestAudio = () => {
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
      setIsAudioPlaying(false);
    }
  };

  useEffect(() => {
    const initDevices = async () => {
      if (!navigator?.mediaDevices) {
        alert("Media Devices API not supported in this environment.");
        return;
      }

      await fetchMicrophoneDevices();

      const handleDeviceChange = () => {
        fetchMicrophoneDevices();
      };

      if (navigator.mediaDevices.addEventListener) {
        navigator.mediaDevices.addEventListener(
          "devicechange",
          handleDeviceChange
        );
      }

      return () => {
        if (navigator.mediaDevices.removeEventListener) {
          navigator.mediaDevices.removeEventListener(
            "devicechange",
            handleDeviceChange
          );
        }
      };
    };

    initDevices();
  }, []);

  return {
    segment,
    setSegment,
    inputDevices,
    selectedInput,
    setSelectedInput,
    inputVolume,
    setInputVolume,
    inputLevel,
    outputLevel,
    isTestingMic,
    handleTestMic,
    stopMicTest,
    handleVolumeChange,
    handleDeviceSelection,
    playTestAudio,
    stopTestAudio,
    outputDevices,
    selectedOutput,
    setSelectedOutput,
    isAudioPlaying,
    showToast,
    toastMessage,
    setShowToast,
  };
};

export default useAudioSettings;

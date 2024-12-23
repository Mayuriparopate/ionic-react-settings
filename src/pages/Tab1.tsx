import React, { useState, useEffect, useRef } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonToast,
} from "@ionic/react";
import "./Tab1.css";
import AudioSettingsSection from "../components/AudioSettingsSection";
export const SESSION_TAB_LABEL = "Session";
export const AUDIO_TAB_LABEL = "Audio";
export const CAMERA_TAB_LABEL = "Camera";
const AudioSettings: React.FC = () => {
  const [segment, setSegment] = useState<string>(AUDIO_TAB_LABEL);
  const [inputDevices, setInputDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedInput, setSelectedInput] = useState<string>("");
  const [inputVolume, setInputVolume] = useState<number>(50);
  const [inputLevel, setInputLevel] = useState<number>(0);
  const [outputLevel, setOutputLevel] = useState<number>(0);

  const [isTestingMic, setIsTestingMic] = useState(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [showToast, setShowToast] = useState(false);
  const [outputDevices, setOutputDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedOutput, setSelectedOutput] = useState<string>("");
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
    null
  );

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
        setSelectedInput(storedDeviceId as string);
      } else {
        localStorage.removeItem("selectedAudioDevice");
        setSelectedInput(inputs[0]?.deviceId || "");
      }

      const validOutputDevice = outputs.find(
        (d) => d.deviceId === getOutputDeviceId
      );
      if (validOutputDevice) {
        setSelectedOutput(storedDeviceId as string);
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
    } catch (err: any) {
      if (err.name === "NotAllowedError") {
        alert(
          "Microphone access is denied. Please enable it in your device settings."
        );
      } else if (err.name === "NotFoundError") {
        alert("No microphone device found.");
      } else {
        alert("Error accessing microphone: " + err.message);
      }
    }
  };

  const requestMicrophoneAccess = async (
    deviceId?: string
  ): Promise<MediaStream> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: deviceId ? { deviceId } : true,
      });
      return stream;
    } catch (err: any) {
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

  //////The handleTestMic functions is responsible for managing a microphone test.//////

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
    } catch (err: any) {
      alert("Error accessing microphone: " + err.message);
      stopMicTest();
    }
  };

  //////The StopMicTest functions are responsible for managing a microphone test.////////////

  const stopMicTest = () => {
    setIsTestingMic(false);
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
    setInputLevel(0);
  };

  //////The handleVolumeChange function is responsible for adjusting the audio volume dynamically for both Input and Output//////

  const handleVolumeChange = (volume: number, type: "input") => {
    if (type === "input" && gainNodeRef.current) {
      gainNodeRef.current.gain.value = volume / 100;
      setInputVolume(volume);
    }
  };

  //////The renderLevelIndicator function is a React component function that generates a visual indicator representing an audio level. It dynamically updates the appearance of the indicator based on the provided level value.//////

  const renderLevelIndicator = (level: number) => {
    return (
      <div
        className="level-indicator"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="level-bar"
            style={{
              backgroundColor: level > i * 5 ? "#007bff" : "#ccc",
            }}
          />
        ))}
      </div>
    );
  };

  const handleDeviceSelection = (
    type: "input" | "output",
    deviceId: string,
    deviceLabel: string
  ) => {
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
        //  testAudioElement.loop = true;
        setAudioElement(testAudioElement);
      }

      if (testAudioElement) {
        // if (
        //   selectedOutput &&
        //   typeof testAudioElement.setSinkId === "function"
        // ) {
        //   await testAudioElement.setSinkId(selectedOutput);
        // } else if (typeof testAudioElement.setSinkId !== "function") {
        //   // alert("Your browser does not support output device selection.");
        // }

        await testAudioElement.play();
        setIsAudioPlaying(true);
      }

      const deviceExists = outputDevices.some(
        (device) => device.deviceId === selectedOutput
      );
      if (!deviceExists) {
        throw new Error("Selected output device is unavailable.");
      }
      let stream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          audio: { deviceId: { exact: selectedOutput } },
        });
      } catch (error: any) {
        if (error.name === "OverconstrainedError") {
          console.warn(
            "Selected device constraints not satisfied, falling back to default."
          );
          stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        } else {
          throw error;
        }
      }
      console.log("Selected Output Device:", selectedOutput);
      console.log("Stream Tracks:", stream?.getTracks());

      mediaStreamRef.current = stream;

      const audioContext = new AudioContext();
      audioContextRef.current = audioContext;

      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      analyserRef.current = analyser;

      source.connect(analyser);

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
    } catch (err: any) {
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

  const renderOutputLevelIndicator = (level: number) => (
    <div
      className="level-indicator"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="level-bar"
          style={{ backgroundColor: level > i * 5 ? "#007bff" : "#ccc" }}
        />
      ))}
    </div>
  );

  useEffect(() => {
    audioContextRef.current = new AudioContext();
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
      } else {
        console.warn("addEventListener not supported for mediaDevices.");
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

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ">
        <div className="tab-selector-container">
          <IonSegment
            value={segment}
            onIonChange={(e) => setSegment(e.detail.value! as string)}
            className="custom-segment"
          >
            <IonSegmentButton
              value="call"
              className="custom-segment-button with-divider"
            >
              <IonLabel>Call</IonLabel>
              <div className="divider"></div>
            </IonSegmentButton>
            <IonSegmentButton
              value="audio"
              className="custom-segment-button with-divider"
            >
              <IonLabel>Audio</IonLabel>
              <div className="divider"></div>
            </IonSegmentButton>

            <IonSegmentButton value="camera" className="custom-segment-button">
              <IonLabel>Camera</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>
        {segment === "audio" && (
          <>
            <IonRow className={"row-layout"}>
              <AudioSettingsSection
                title="Audio Input"
                devices={inputDevices}
                selectedDevice={selectedInput}
                setSelectedDevice={setSelectedInput}
                level={inputLevel}
                renderLevelIndicator={renderLevelIndicator}
                volume={inputVolume}
                handleVolumeChange={handleVolumeChange}
                handleTest={handleTestMic}
                isTesting={isTestingMic}
                testLabel="Mic"
                IndicatorLabel="Input Levels"
                sliderLabel="Input Volumes"
                type="input"
                handleDeviceChange={(deviceId: string) =>
                  handleDeviceSelection(
                    "input",
                    deviceId,
                    inputDevices.find((device) => device.deviceId === deviceId)
                      ?.label || "Default"
                  )
                }
              />
              <AudioSettingsSection
                title="Audio Output"
                devices={outputDevices}
                selectedDevice={selectedOutput}
                setSelectedDevice={setSelectedOutput}
                handleDeviceChange={(deviceId: string) =>
                  handleDeviceSelection(
                    "output",
                    deviceId,
                    outputDevices.find((device) => device.deviceId === deviceId)
                      ?.label || "Default"
                  )
                }
                level={outputLevel}
                renderLevelIndicator={renderLevelIndicator} // No level indicator for output
                volume={50}
                handleVolumeChange={() => {}} // No volume control for output
                handleTest={isAudioPlaying ? stopTestAudio : playTestAudio}
                isTesting={isAudioPlaying}
                testLabel="Output"
                IndicatorLabel="Output Levels"
                sliderLabel="Output Volumes"
                type="output"
              />
            </IonRow>
            <IonToast
              isOpen={showToast}
              message={toastMessage}
              duration={2000}
              onDidDismiss={() => setShowToast(false)}
            />
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default AudioSettings;

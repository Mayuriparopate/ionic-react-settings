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
} from "@ionic/react";
import "./Tab1.css";
import AudioSettingsSection from "../components/AudioSettingsSection";

const AudioSettings: React.FC = () => {
  const [inputDevices, setInputDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedInput, setSelectedInput] = useState<string>("");
  const [inputVolume, setInputVolume] = useState<number>(50);
  const [inputLevel, setInputLevel] = useState<number>(0);
  const [isTestingMic, setIsTestingMic] = useState(false);
  const [segment, setSegment] = useState<string>("audio");

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null); // Gain node for volume control

  const fetchMicrophoneDevices = async () => {
    try {
      // Request microphone access
      await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log();
      // Fetch the list of devices
      const devices = await navigator.mediaDevices.enumerateDevices();
      const inputs = devices.filter((device) => device.kind === "audioinput");
      console.log(devices + "devices");
      if (inputs.length === 0) {
        alert("No microphone devices found.");
      } else {
        setInputDevices(inputs); // Update state with input devices
        setSelectedInput(inputs[0].deviceId); // Select the first device by default
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
  useEffect(() => {
    fetchMicrophoneDevices();
    // navigator.mediaDevices.enumerateDevices().then((devices) => {
    //   const inputs = devices.filter((device) => device.kind === "audioinput");
    //   alert(inputs + "inputs");
    //   setInputDevices(inputs);
    //   if (inputs.length > 0) setSelectedInput(inputs[0].deviceId);
    // });

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const requestMicrophoneAccess = async (
    deviceId?: string
  ): Promise<MediaStream> => {
    try {
      // Request microphone access with optional deviceId
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: deviceId ? { deviceId } : true,
      });
      return stream;
    } catch (err: any) {
      // Handle specific error scenarios
      if (err.name === "NotAllowedError") {
        alert(
          "Microphone access is denied. Please enable it in your device settings."
        );
      } else if (err.name === "NotFoundError") {
        alert("No microphone device found.");
      } else {
        alert("Error accessing microphone: " + err.message);
      }
      throw err; // Rethrow the error to handle it in the calling function
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
      gainNode.gain.value = inputVolume / 100; // Use updated input volume
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
        setInputLevel(average); // Update input level
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

  ///////////The handleDeviceChange function is responsible for switching the audio input device, stopping any currently active streams, and reinitializing the microphone test if it is currently active./////////

  const handleDeviceChange = async (deviceId: string) => {
    try {
      setSelectedInput(deviceId);

      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
        mediaStreamRef.current = null;
      }

      if (isTestingMic) {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: { deviceId },
        });
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

        source.connect(analyser);
        analyser.connect(gainNode);
        gainNode.connect(audioContext.destination);

        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        const visualize = () => {
          if (!isTestingMic) return;
          analyser.getByteFrequencyData(dataArray);
          const average =
            dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;
          setInputLevel(average);
          requestAnimationFrame(visualize);
        };
        visualize();
      }
    } catch (err: any) {
      alert(`Error switching to device: ${err.message}`);
    }
  };

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
                handleDeviceChange={handleDeviceChange}
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
              />
              <AudioSettingsSection
                title="Audio Input"
                devices={inputDevices}
                selectedDevice={selectedInput}
                setSelectedDevice={setSelectedInput}
                handleDeviceChange={handleDeviceChange}
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
              />
            </IonRow>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default AudioSettings;

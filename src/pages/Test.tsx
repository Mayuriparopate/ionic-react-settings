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
  IonCol,
  IonItem,
  IonSelect,
  IonIcon,
  IonButton,
  IonSelectOption,
  IonRange,
} from "@ionic/react";
import "./Tab1.css";
import AudioSettingsSection from "../components/AudioSettingsSection";
import { chevronDownOutline, volumeHigh, volumeLow } from "ionicons/icons";
export const SESSION_TAB_LABEL = "call";
export const AUDIO_TAB_LABEL = "audio";
export const CAMERA_TAB_LABEL = "camera";
const AudioSettingsTest: React.FC = () => {
  const [segment, setSegment] = useState<string>(AUDIO_TAB_LABEL);
  const [inputDevices, setInputDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedInput, setSelectedInput] = useState<string>("");
  const [inputVolume, setInputVolume] = useState<number>(50);
  const [inputLevel, setInputLevel] = useState<number>(0);
  const [isTestingMic, setIsTestingMic] = useState(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [showToast, setShowToast] = useState(false);


  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const fetchMicrophoneDevices = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      const devices = await navigator.mediaDevices.enumerateDevices();
      const inputs = devices.filter((device) => device.kind === "audioinput");
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

      if (inputs.length === 0) {
        alert("No Input / Output devices found.");
      } else {
        setInputDevices(inputs);
        setSelectedInput(inputs[0].deviceId);
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
    } 
    setToastMessage(`Selected ${type} device: ${deviceLabel || "Default"}`);
    setShowToast(true);
  };


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

  const handleDeviceChange = (deviceId: string)=> {
    handleDeviceSelection("input", deviceId, inputDevices.find((device:any) => device?.deviceId === deviceId)
    ?.label || "Default");
  }


  const handleSelectChange = (deviceId: string) => {
    localStorage.setItem("selectedAudioDevice", deviceId);
    setSelectedInput(deviceId);
    handleDeviceChange(deviceId);
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

            //starts common component
          <>
            <IonRow className={"row-layout"}>
            <div className={"col-layout"}>
      <IonRow>
        <IonCol size="12">
          <IonLabel>
            <strong>Audio Input</strong>
          </IonLabel>
          <IonItem className="ion-audio-select">
            <IonSelect
              value={selectedInput}
              onIonChange={(e) => handleSelectChange(e.detail.value)}
              className="audio-ion-select"
              role="combobox"
            >
              {inputDevices.map((device: any) => (
                <IonSelectOption key={device.deviceId} value={device.deviceId}>
                  {device.label || "Default"}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow className="slider-row">
        <IonCol size="12" size-lg="6">
          <IonLabel className="slider-label">
            <strong>Input Levels</strong>
          </IonLabel>
        </IonCol>
        <IonCol size="12" size-lg="6">
          <div className="level-indicator-container">
            {renderLevelIndicator(inputLevel)}
          </div>
        </IonCol>
      </IonRow>
      <IonRow className="slider-row">
        <IonCol size="12" size-lg="6">
          <IonLabel>
            <strong>Input Volumes</strong>
          </IonLabel>
        </IonCol>
        <IonCol size="12" size-lg="6">
          <IonRange
            min={0}
            max={100}
            value={inputVolume}
            onIonChange={(e) =>
              handleVolumeChange(e.detail.value as number, 'input')
            }
            data-testid="input-volume-slider"
          >
            <IonIcon slot="start" color="primary" icon={volumeLow} />
            <IonIcon slot="end" color="primary" icon={volumeHigh} />
          </IonRange>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="12" size-lg="4" size-md="4">
          <IonButton
            fill="outline"
            onClick={handleTestMic}
          >
            {isTestingMic ? 'Stop Mic' : 'Test Mic'}
          </IonButton>
        </IonCol>
      </IonRow>
    </div>
            </IonRow>
            <IonToast
              isOpen={showToast}
              message={toastMessage}
              duration={2000}
              onDidDismiss={() => setShowToast(false)}
            />
          </>
            //ends common component
        )}
      </IonContent>
    </IonPage>
  );
};

export default AudioSettingsTest;
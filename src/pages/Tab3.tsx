import React, { useState, useEffect, useRef } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonRange,
  IonButton,
  IonCheckbox,
  IonRow,
  IonCol,
  IonToggle,
  IonIcon,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import { volumeLow, volumeHigh } from "ionicons/icons"; // Import volume icons
import "./Tab3.css";
import CommonSelect from "../components/CommonSelect";

const Tabs3: React.FC = () => {
  const [inputDevices, setInputDevices] = useState<MediaDeviceInfo[]>([]);
  const [outputDevices, setOutputDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedInput, setSelectedInput] = useState<string>("");
  const [selectedOutput, setSelectedOutput] = useState<string>("");
  const [inputVolume, setInputVolume] = useState<number>(50);
  const [outputVolume, setOutputVolume] = useState<number>(50);
  const [inputLevel, setInputLevel] = useState<number>(0);
  const [outputLevel, setOutputLevel] = useState<number>(0);
  const [backgroundNoiseRemoval, setBackgroundNoiseRemoval] = useState(false);
  const [autoAdjustMic, setAutoAdjustMic] = useState(false);
  const [tempUnmute, setTempUnmute] = useState(true);
  const [isTestingMic, setIsTestingMic] = useState(false);
  const [segment, setSegment] = useState<string>("audio");

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  const selectOption = (data: any) => {
    setSelectedInput(data);
    console.log(data, "data");
    localStorage.setItem("selectValue", data);
  };

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const inputs = devices.filter((device) => device.kind === "audioinput");
      const outputs = devices.filter((device) => device.kind === "audiooutput");
      setInputDevices(inputs);
      setOutputDevices(outputs);
      if (inputs.length > 0) setSelectedInput(inputs[0].deviceId);
      if (outputs.length > 0) setSelectedOutput(outputs[0].deviceId);
    });

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const handleTestMic = async () => {
    if (isTestingMic) {
      stopMicTest();
      return;
    }

    setIsTestingMic(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { deviceId: selectedInput },
      });
      mediaStreamRef.current = stream;

      const audioContext = new AudioContext();
      audioContextRef.current = audioContext;
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      analyserRef.current = analyser;

      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      source.connect(analyser);

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
      setIsTestingMic(false);
    }
  };

  const stopMicTest = () => {
    setIsTestingMic(false);
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
    }
    setInputLevel(0); // Reset input level
  };

  const handleTestSpeaker = () => {
    const audio = new Audio("/assets/sounds/beep-07.mp3"); // Use local sound file
    audio.volume = outputVolume / 100;
    audio
      .play()
      .then(() => setOutputLevel(100)) // Simulate output level
      .catch((err) => alert("Error playing sound: " + err.message));
    setTimeout(() => setOutputLevel(0), 1000); // Reset after 1 second
  };

  const renderLevelIndicator = (level: number) => {
    return (
      <div
        className="level-indicator"
        style={{
          display: "flex",
          gap: "20px",
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

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonSegment
          value={segment}
          onIonChange={(e) => setSegment(e.detail.value! as string)}
          className="responsive-segment"
        >
          <IonSegmentButton value="audio">
            <IonLabel>Audio</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="camera">
            <IonLabel>Camera</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="general">
            <IonLabel>General</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {segment === "audio" && (
          <>
            <IonRow>
              {/* Audio Input Section */}
              <IonCol size="12" size-lg="6">
                <IonItem>
                  <IonLabel>
                    <strong>Audio Input</strong>
                  </IonLabel>
                </IonItem>
                <CommonSelect
                  label="Input Device"
                  value={selectedInput}
                  options={inputDevices}
                  onChange={setSelectedInput}
                />
                <IonItem>
                  <IonLabel>Input Level:</IonLabel>
                  <div className="level-indicator-container">
                    {renderLevelIndicator(inputLevel)}
                  </div>
                </IonItem>
                <IonItem>
                  <IonLabel>Input Volume:</IonLabel>
                  <IonRange
                    min={0}
                    max={100}
                    value={inputVolume}
                    onIonChange={(e) =>
                      setInputVolume(e.detail.value as number)
                    }
                  >
                    <IonIcon slot="start" icon={volumeLow} />
                    <IonIcon slot="end" icon={volumeHigh} />
                  </IonRange>
                </IonItem>
                <IonButton expand="block" onClick={handleTestMic}>
                  {isTestingMic ? "Stop Mic Test" : "Test Mic"}
                </IonButton>
              </IonCol>

              {/* Audio Output Section */}
              <IonCol size="12" size-lg="6">
                <IonItem>
                  <IonLabel>
                    <strong>Audio Output</strong>
                  </IonLabel>
                </IonItem>
                <CommonSelect
                  label="Output Device"
                  value={selectedOutput}
                  options={outputDevices}
                  onChange={selectOption}
                />
                <IonItem className="level-item">
                  <IonLabel>Output Level:</IonLabel>
                  <div className="level-indicator-container">
                    {renderLevelIndicator(outputLevel)}
                  </div>
                </IonItem>
                <IonItem>
                  <IonLabel>Output Volume:</IonLabel>
                  <IonRange
                    min={0}
                    max={100}
                    value={outputVolume}
                    onIonChange={(e) =>
                      setOutputVolume(e.detail.value as number)
                    }
                  >
                    <IonIcon slot="start" icon={volumeLow} />
                    <IonIcon slot="end" icon={volumeHigh} />
                  </IonRange>
                </IonItem>
                <IonButton expand="block" onClick={handleTestSpeaker}>
                  Test Speaker
                </IonButton>
              </IonCol>
            </IonRow>
            <IonItem>
              <IonLabel>Background Noise Removal</IonLabel>
              <IonToggle
                checked={backgroundNoiseRemoval}
                onIonChange={(e) => setBackgroundNoiseRemoval(e.detail.checked)}
              />
            </IonItem>
            <IonItem>
              <IonCheckbox
                checked={autoAdjustMic}
                onIonChange={(e) => setAutoAdjustMic(e.detail.checked)}
              />
              <IonLabel>Automatically adjust microphone volume</IonLabel>
            </IonItem>
            <IonItem>
              <IonCheckbox
                checked={tempUnmute}
                onIonChange={(e) => setTempUnmute(e.detail.checked)}
              />
              <IonLabel>Unmute temporarily by holding the space bar</IonLabel>
            </IonItem>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tabs3;

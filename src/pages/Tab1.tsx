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
import useAudioSettings from "../hooks/useAudioSettings";
export const SESSION_TAB_LABEL = "Session";
export const AUDIO_TAB_LABEL = "Audio";
export const CAMERA_TAB_LABEL = "Camera";
const AudioSettings: React.FC = () => {


  const {
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
  } = useAudioSettings();

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
                    inputDevices.find((device:any) => device?.deviceId === deviceId)
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
                renderLevelIndicator={renderLevelIndicator}
                volume={50}
                handleVolumeChange={() => {}} 
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

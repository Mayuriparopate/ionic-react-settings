import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  IonButton,
  IonCol,
  IonIcon,
  IonItem,
  IonLabel,
  IonRange,
  IonRow,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { volumeLow, volumeHigh, chevronDownOutline } from "ionicons/icons";
import { DeviceProps } from "./IAudioSection";

// interface DeviceProps {
//   title: string; // Title or name of the section or component
//   devices: Array<any>; // List of devices (assumed type, replace `Device` with the actual type if available)
//   selectedDevice: any | null; // Currently selected device (nullable)
//   setSelectedDevice: (device: any) => void; // Function to update the selected device
//   handleDeviceChange: (device: any) => void; // Function to handle device change events
//   level: number; // Level indicator value (e.g., battery or signal level)
//   renderLevelIndicator: () => React.ReactNode; // Function to render a level indicator
//   volume: number; // Current volume level
//   setVolume: (volume: number) => void; // Function to update the volume
//   handleTest: () => void; // Function to initiate testing
//   isTesting: boolean; // Whether a test is currently in progress
//   testLabel: string; // Label for the test button or section
//   IndicatorLabel: string; // Label for the level indicator
//   sliderLabel: string; // Label for the volume slider
//   handleVolumeChange: (volume: number) => void; // Function to handle volume change events
//   type: string; // Type of device or component
// }

const AudioSettingsSection = (props: any) => {
  const {
    title,
    devices,
    selectedDevice,
    setSelectedDevice,
    handleDeviceChange,
    level,
    renderLevelIndicator,
    volume,
    setVolume,
    handleTest,
    isTesting,
    testLabel,
    IndicatorLabel,
    sliderLabel,
    handleVolumeChange,
    type,
  } = props;
  const [screenIsLarge, setScreenIsLarge] = useState(false);

  useEffect(() => {
    const largeScreen = window.innerWidth >= 786;
    if (largeScreen) {
      setScreenIsLarge(true);
    } else {
      setScreenIsLarge(false);
    }

    // console.log("devices", devices);
  }, []);
  return (
    <div className={"col-layout"}>
      <IonRow>
        <IonCol size="12">
          <IonLabel>
            <strong>{title}</strong>
          </IonLabel>
          <IonItem className="ion-audio-select">
            <IonSelect
              value={selectedDevice}
              onIonChange={(e) => {
                setSelectedDevice(e.detail.value);
                handleDeviceChange(e.detail.value); // Switch input device dynamically
              }}
              className="audio-ion-select"
            >
              {devices.map((device: any) => (
                <IonSelectOption key={device.deviceId} value={device.deviceId}>
                  {device.label || "Default"}
                </IonSelectOption>
              ))}
            </IonSelect>
            <IonIcon
              slot="end"
              className="custom-icon"
              icon={chevronDownOutline}
            ></IonIcon>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow className="slider-row">
        <IonCol size="12" size-lg="6">
          <IonLabel>
            <strong>{IndicatorLabel}</strong>
          </IonLabel>
        </IonCol>
        <IonCol size="12" size-lg="6">
          <div className="level-indicator-container">
            {renderLevelIndicator(level)}
          </div>
        </IonCol>
      </IonRow>
      <IonRow className="slider-row">
        <IonCol size="12" size-lg="6">
          <IonLabel>
            <strong>{sliderLabel}</strong>
          </IonLabel>
        </IonCol>
        <IonCol size="12" size-lg="6">
          <IonRange
            min={0}
            max={100}
            value={volume}
            onIonChange={(e) =>
              handleVolumeChange(e.detail.value as number, type)
            }
          >
            <IonIcon slot="start" color="primary" icon={volumeLow} />
            <IonIcon slot="end" color="primary" icon={volumeHigh} />
          </IonRange>
        </IonCol>
      </IonRow>
      <IonButton
        fill="outline"
        onClick={handleTest}
        expand={screenIsLarge ? undefined : "block"}
      >
        {isTesting ? `Stop ${testLabel}` : `Test ${testLabel}`}
      </IonButton>
    </div>
  );
};

export default AudioSettingsSection;

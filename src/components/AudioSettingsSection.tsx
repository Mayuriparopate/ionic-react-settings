import React, { useEffect, useState } from "react";
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

const AudioSettingsSection = ({
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
}: any) => {
  const [screenIsLarge, setScreenIsLarge] = useState(false);

  useEffect(() => {
    const largeScreen = window.innerWidth >= 786;
    if (largeScreen) {
      setScreenIsLarge(true);
    } else {
      setScreenIsLarge(false);
    }
  }, []);
  return (
    <IonCol className={"col-layout"}>
      <IonRow>
        <IonCol size="12">
          <IonLabel>
            <strong>{title}</strong>
          </IonLabel>
          <IonItem>
            <IonSelect
              value={selectedDevice}
              onIonChange={(e) => {
                setSelectedDevice(e.detail.value);
                handleDeviceChange(e.detail.value); // Switch input device dynamically
              }}
            >
              {devices.map((device: any) => (
                <IonSelectOption key={device.deviceId} value={device.deviceId}>
                  {device.label || "Unknown Device"}
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
    </IonCol>
  );
};

export default AudioSettingsSection;

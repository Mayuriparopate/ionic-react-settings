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
import { volumeLow, volumeHigh, chevronDownOutline, chevronUpOutline } from "ionicons/icons";

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
  }, []);
  const handleSelectChange = (deviceId: string) => {
    localStorage.setItem("selectedAudioDevice", deviceId);
    setSelectedDevice(deviceId);
    handleDeviceChange(deviceId);
  };
  return (
    <div className={"col-layout"}>
      <IonRow>
        <IonCol size="12">
          <IonLabel>
            <strong>{title}</strong>
          </IonLabel>
          <div className="ion-audio-select">
            <IonSelect
              value={selectedDevice}
              onIonChange={(e) => handleSelectChange(e.detail.value)}
              className="audio-ion-select"
              toggleIcon={chevronDownOutline}
              expandedIcon={chevronUpOutline}
              labelPlacement="floating"
            >
              {devices.map((device: any) => (
                <IonSelectOption key={device.deviceId} value={device.deviceId}>
                  {device.label || "Default"}
                </IonSelectOption>
              ))}
            </IonSelect>
          </div>
        </IonCol>
      </IonRow>
      <IonRow className="slider-row">
        <IonCol size="12" size-lg="6">
          <IonLabel className="slider-label">
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
      <IonRow>
        <IonCol size="12" size-lg="4" size-md="4">
          <IonButton
            fill="outline"
            expand={screenIsLarge ? undefined : "block"}
            onClick={handleTest}
          >
            {isTesting ? `Stop ${testLabel}` : `Test ${testLabel}`}
          </IonButton>
        </IonCol>
      </IonRow>
    </div>
  );
};

export default AudioSettingsSection;

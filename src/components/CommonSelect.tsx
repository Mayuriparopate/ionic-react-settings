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
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { volumeLow, volumeHigh } from "ionicons/icons"; // Import volume icons

// Common Select Component
const CommonSelect: React.FC<{
  label: string;
  value: string;
  options: MediaDeviceInfo[];
  onChange: (value: string) => void;
}> = (props) => {
  const { label, value, options, onChange } = props;
  return (
    <IonItem>
      <IonLabel>{label}</IonLabel>
      <IonSelect value={value} onIonChange={(e) => onChange(e.detail.value)}>
        {options.map((device) => (
          <IonSelectOption key={device.deviceId} value={device.deviceId}>
            {device.label || "Unknown Device"}
          </IonSelectOption>
        ))}
      </IonSelect>
    </IonItem>
  );
};
export default CommonSelect;

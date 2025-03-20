import React from "react";
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
} from "@ionic/react";
import "./CommonModel.css";
import styled from "styled-components";

const StyledModal = styled(IonModal)<{ width?: string; height?: string }>`
  ${({ width, height }) => `
    --width: ${width || "100%"};
    --height: ${height || "100%"};
  `}
`;

interface CommonModalProps {
  isOpen: boolean;
  title: string;
  height?: string;
  width?: string;
  onClose: () => void;
  children: React.ReactNode;
}

const CommonModal: React.FC<CommonModalProps> = ({
  isOpen,
  title,
  width,
  height,
  onClose,
  children,
}) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onDidDismiss={onClose}
      width={width}
      height={height}
    >
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color="primary">cancel</IonButton>
          </IonButtons>
          <IonTitle>Schedule Request</IonTitle>
          <IonButtons slot="end">
            <IonButton color="primary">continue</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader> */}
      <IonContent>{children}</IonContent>
    </StyledModal>
  );
};

export default CommonModal;

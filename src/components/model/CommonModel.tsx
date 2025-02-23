import React from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent } from '@ionic/react';
import './CommonModel.css';

interface CommonModalProps {
  isOpen: boolean;
  title: string;
  heightWidth?: string;
  onClose: () => void;
  children: React.ReactNode;
}

const CommonModal: React.FC<CommonModalProps> = ({ isOpen, title, heightWidth, onClose, children }) => {
  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose} className={heightWidth} >
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClose}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {children}
      </IonContent>
    </IonModal>
  );
};

export default CommonModal;

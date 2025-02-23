
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonCheckbox,
  IonLabel,
  IonRadioGroup,
  IonRadio,
  IonIcon
} from "@ionic/react";
import { call, videocam } from "ionicons/icons";
import "./WeeklyAppointmentForm.css";

const WeeklyAppointmentForm: React.FC = () => {
  return (
    <div className="mobile-detail-container">
    <IonCard className="mobile-detail-card">
      <IonCardHeader>
        <IonCardTitle>Mandarin Interpretation</IonCardTitle>
        <p className="description">
          Fill out the form below to request your interpretation session for Mandarin. Form data
          entered is private to your company organizer reference. All requests require confirmation
          from client services. Please note that submitting a request does not guarantee a session
          at the selected time.
        </p>
      </IonCardHeader>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonLabel className="custom-label">First Name</IonLabel>
              <IonInput placeholder="Enter text"></IonInput>
            </IonCol>
            <IonCol>
              <IonLabel className="custom-label">Last Name</IonLabel>
              <IonInput placeholder="Enter text"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel className="custom-label">Email</IonLabel>
              <IonInput placeholder="Enter text"></IonInput>
            </IonCol>
            <IonCol>
              <IonLabel className="custom-label">Phone Number</IonLabel>
              <IonInput placeholder="Enter text"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel className="custom-label">Account</IonLabel>
              <IonSelect interface="popover">
                <IonSelectOption value="1">Option 1</IonSelectOption>
              </IonSelect>
            </IonCol>
            <IonCol>
              <IonLabel className="custom-label">PIN</IonLabel>
              <IonSelect interface="popover">
                <IonSelectOption value="1">Option 1</IonSelectOption>
              </IonSelect>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel className="custom-label">Time</IonLabel>
              <IonSelect interface="popover">
                <IonSelectOption value="1">Select Time</IonSelectOption>
              </IonSelect>
            </IonCol>
            <IonCol>
              <IonLabel className="custom-label">Time Zone</IonLabel>
              <IonSelect interface="popover">
                <IonSelectOption value="1">Select Time Zone</IonSelectOption>
              </IonSelect>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel className="custom-label">Session Duration</IonLabel>
              <IonInput placeholder="e.g. 30min"></IonInput>
            </IonCol>
          </IonRow>
          <IonRow className="radio-container">
            <IonLabel className="custom-label">Session Type</IonLabel>
            <IonRadioGroup>
              <IonRadio value="voice">
                <IonIcon icon={call} className="icon" />
                Voice
              </IonRadio>
              <IonRadio value="video">
                <IonIcon icon={videocam} className="icon" />
                Video
              </IonRadio>
            </IonRadioGroup>
          </IonRow>
          <IonRow className="checkbox-container">
            <IonCheckbox></IonCheckbox>
            <IonLabel>
              I acknowledge a $25 fee for no-shows or cancellations less than 24 hours.
            </IonLabel>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
    </div>
  );
};

export default WeeklyAppointmentForm;

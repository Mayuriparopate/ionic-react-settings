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
  IonIcon,
  IonContent,
} from "@ionic/react";
import { call, videocam } from "ionicons/icons";
import "./WeeklyAppointmentForm.css";
import { useEffect, useRef } from "react";
import { Keyboard } from "@capacitor/keyboard";

const WeeklyAppointmentForm: React.FC = () => {
  // const contentRef = useRef<HTMLIonContentElement | null>(null);
  // useEffect(() => {
  //   // Enable automatic keyboard scrolling
  //   Keyboard.setScroll({ isDisabled: false });

  //   // Adjust body padding when the keyboard opens
  //   Keyboard.addListener("keyboardWillShow", (info) => {
  //     console.log("info.keyboardHeight", info.keyboardHeight);
  //     document.body.style.paddingBottom = `${info.keyboardHeight}px`;
  //     console.log(
  //       "document.body.style.paddingBottom",
  //       document.body.style.paddingBottom
  //     );
  //   });

  //   // Remove padding when the keyboard hides
  //   Keyboard.addListener("keyboardWillHide", () => {
  //     console.log("keyboardWillHide");
  //     document.body.style.paddingBottom = "0px";
  //   });

  //   return () => {
  //     Keyboard.removeAllListeners();
  //   };
  // }, []);
  const handleFocus = (event: React.FocusEvent<HTMLIonInputElement>) => {
    // setTimeout(() => {
    //   event.target.scrollIntoView({ behavior: "smooth", block: "center" });
    // }, 300);
  };
  return (
    <IonContent
      className="mobile-detail-container"
      scrollEvents={true}
      keyboard-offset="true"
    >
      <IonCard className="mobile-detail-card">
        <IonCardHeader>
          <IonCardTitle>Mandarin Interpretation</IonCardTitle>
          <p className="description">
            Fill out the form below to request your interpretation session for
            Mandarin. Form data entered is private to your company organizer
            reference. All requests require confirmation from client services.
            Please note that submitting a request does not guarantee a session
            at the selected time.
          </p>
        </IonCardHeader>
        <IonCardContent>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonLabel className="custom-label">First Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonLabel className="custom-label">Last Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel className="custom-label">First Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonLabel className="custom-label">Last Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel className="custom-label">First Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonLabel className="custom-label">Last Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel className="custom-label">First Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonLabel className="custom-label">Last Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel className="custom-label">First Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonLabel className="custom-label">Last Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel className="custom-label">First Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonLabel className="custom-label">Last Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonLabel className="custom-label">First Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonLabel className="custom-label">Last Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel className="custom-label">First Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonLabel className="custom-label">Last Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel className="custom-label">First Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonLabel className="custom-label">Last Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel className="custom-label">First Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonLabel className="custom-label">Last Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel className="custom-label">First Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonLabel className="custom-label">Last Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel className="custom-label">First Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonLabel className="custom-label">Last Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel className="custom-label">First Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonLabel className="custom-label">Last Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel className="custom-label">First Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonLabel className="custom-label">Last Name</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel className="custom-label">First Namedssdf</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonLabel className="custom-label">Last Namedvcsdf</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel className="custom-label">Email dcdscsd</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
              </IonCol>
              <IonCol>
                <IonLabel className="custom-label">Phone dhbsajdhad</IonLabel>
                <IonInput
                  placeholder="Enter text"
                  onFocus={handleFocus}
                ></IonInput>
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
                I acknowledge a $25 fee for no-shows or cancellations less than
                24 hours.
              </IonLabel>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </IonContent>
  );
};

export default WeeklyAppointmentForm;

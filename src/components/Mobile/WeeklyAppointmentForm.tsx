// import {
//   IonCard,
//   IonCardHeader,
//   IonCardTitle,
//   IonCardContent,
//   IonGrid,
//   IonRow,
//   IonCol,
//   IonInput,
//   IonSelect,
//   IonSelectOption,
//   IonCheckbox,
//   IonLabel,
//   IonRadioGroup,
//   IonRadio,
//   IonIcon,
//   IonContent,
// } from "@ionic/react";
// import { call, videocam } from "ionicons/icons";
// import "./WeeklyAppointmentForm.css";
// import { useEffect, useRef } from "react";
// import { Keyboard } from "@capacitor/keyboard";

// const WeeklyAppointmentForm: React.FC = () => {
//   // const contentRef = useRef<HTMLIonContentElement | null>(null);
//   // useEffect(() => {
//   //   // Enable automatic keyboard scrolling
//   //   Keyboard.setScroll({ isDisabled: false });

//   //   // Adjust body padding when the keyboard opens
//   //   Keyboard.addListener("keyboardWillShow", (info) => {
//   //     console.log("info.keyboardHeight", info.keyboardHeight);
//   //     document.body.style.paddingBottom = `${info.keyboardHeight}px`;
//   //     console.log(
//   //       "document.body.style.paddingBottom",
//   //       document.body.style.paddingBottom
//   //     );
//   //   });

//   //   // Remove padding when the keyboard hides
//   //   Keyboard.addListener("keyboardWillHide", () => {
//   //     console.log("keyboardWillHide");
//   //     document.body.style.paddingBottom = "0px";
//   //   });

//   //   return () => {
//   //     Keyboard.removeAllListeners();
//   //   };
//   // }, []);
//   const handleFocus = (event: React.FocusEvent<HTMLIonInputElement>) => {
//     // setTimeout(() => {
//     //   event.target.scrollIntoView({ behavior: "smooth", block: "center" });
//     // }, 300);
//   };
//   return (
//     <IonContent
//       className="mobile-detail-container"
//       scrollEvents={true}
//       keyboard-offset="true"
//     >
//       <IonCard className="mobile-detail-card">
//         <IonCardHeader>
//           <IonCardTitle>Mandarin Interpretation</IonCardTitle>
//           <p className="description">
//             Fill out the form below to request your interpretation session for
//             Mandarin. Form data entered is private to your company organizer
//             reference. All requests require confirmation from client services.
//             Please note that submitting a request does not guarantee a session
//             at the selected time.
//           </p>
//         </IonCardHeader>
//         <IonCardContent>
//           <IonGrid>
//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">First Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//               <IonCol>
//                 <IonLabel className="custom-label">Last Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//             </IonRow>
//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">First Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//               <IonCol>
//                 <IonLabel className="custom-label">Last Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//             </IonRow>
//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">First Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//               <IonCol>
//                 <IonLabel className="custom-label">Last Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//             </IonRow>
//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">First Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//               <IonCol>
//                 <IonLabel className="custom-label">Last Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//             </IonRow>
//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">First Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//               <IonCol>
//                 <IonLabel className="custom-label">Last Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//             </IonRow>
//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">First Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//               <IonCol>
//                 <IonLabel className="custom-label">Last Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//             </IonRow>

//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">First Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//               <IonCol>
//                 <IonLabel className="custom-label">Last Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//             </IonRow>
//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">First Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//               <IonCol>
//                 <IonLabel className="custom-label">Last Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//             </IonRow>
//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">First Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//               <IonCol>
//                 <IonLabel className="custom-label">Last Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//             </IonRow>
//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">First Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//               <IonCol>
//                 <IonLabel className="custom-label">Last Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//             </IonRow>
//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">First Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//               <IonCol>
//                 <IonLabel className="custom-label">Last Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//             </IonRow>
//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">First Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//               <IonCol>
//                 <IonLabel className="custom-label">Last Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//             </IonRow>
//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">First Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//               <IonCol>
//                 <IonLabel className="custom-label">Last Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//             </IonRow>
//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">First Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//               <IonCol>
//                 <IonLabel className="custom-label">Last Name</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//             </IonRow>
//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">First Namedssdf</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//               <IonCol>
//                 <IonLabel className="custom-label">Last Namedvcsdf</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//             </IonRow>
//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">Email dcdscsd</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//               <IonCol>
//                 <IonLabel className="custom-label">Phone dhbsajdhad</IonLabel>
//                 <IonInput
//                   placeholder="Enter text"
//                   onFocus={handleFocus}
//                 ></IonInput>
//               </IonCol>
//             </IonRow>
//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">Account</IonLabel>
//                 <IonSelect interface="popover">
//                   <IonSelectOption value="1">Option 1</IonSelectOption>
//                 </IonSelect>
//               </IonCol>
//               <IonCol>
//                 <IonLabel className="custom-label">PIN</IonLabel>
//                 <IonSelect interface="popover">
//                   <IonSelectOption value="1">Option 1</IonSelectOption>
//                 </IonSelect>
//               </IonCol>
//             </IonRow>
//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">Time</IonLabel>
//                 <IonSelect interface="popover">
//                   <IonSelectOption value="1">Select Time</IonSelectOption>
//                 </IonSelect>
//               </IonCol>
//               <IonCol>
//                 <IonLabel className="custom-label">Time Zone</IonLabel>
//                 <IonSelect interface="popover">
//                   <IonSelectOption value="1">Select Time Zone</IonSelectOption>
//                 </IonSelect>
//               </IonCol>
//             </IonRow>
//             <IonRow>
//               <IonCol>
//                 <IonLabel className="custom-label">Session Duration</IonLabel>
//                 <IonInput placeholder="e.g. 30min"></IonInput>
//               </IonCol>
//             </IonRow>
//             <IonRow className="radio-container">
//               <IonLabel className="custom-label">Session Type</IonLabel>
//               <IonRadioGroup>
//                 <IonRadio value="voice">
//                   <IonIcon icon={call} className="icon" />
//                   Voice
//                 </IonRadio>
//                 <IonRadio value="video">
//                   <IonIcon icon={videocam} className="icon" />
//                   Video
//                 </IonRadio>
//               </IonRadioGroup>
//             </IonRow>
//             <IonRow className="checkbox-container">
//               <IonCheckbox></IonCheckbox>
//               <IonLabel>
//                 I acknowledge a $25 fee for no-shows or cancellations less than
//                 24 hours.
//               </IonLabel>
//             </IonRow>
//           </IonGrid>
//         </IonCardContent>
//       </IonCard>
//     </IonContent>
//   );
// };

// export default WeeklyAppointmentForm;

import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonRadioGroup,
  IonRadio,
  IonCheckbox,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButtons,
} from "@ionic/react";
import styled from "styled-components";

// Styled Components
const StyledIonHeader = styled(IonHeader)`
  ion-toolbar {
    --background: #f8f9fa;
    --border-color: transparent;
  }

  ion-title {
    font-size: 20px;
    font-weight: 600;
    color: #333;
  }

  ion-button {
    font-size: 14px;
    text-transform: none;
    --color: #007bff;
  }
`;

const TabButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  ion-button {
    flex: 1;
    margin: 0 4px;
    --border-radius: 4px;
    --padding-start: 8px;
    --padding-end: 8px;
    font-size: 14px;
    text-transform: none;
    --border-width: 1px;
  }

  ion-button[fill="solid"] {
    --background: #007bff;
    --color: white;
  }

  ion-button[fill="outline"] {
    --border-color: #007bff;
    --color: #007bff;
    --background: transparent;
  }
`;

const StyledIonItem = styled(IonItem)`
  --padding-start: 0;
  --inner-padding-end: 0;
  --background: transparent;
  --border-color: transparent;
  margin-bottom: 8px;

  ion-label {
    font-size: 14px;
    color: #333;
  }

  strong {
    font-size: 16px;
    font-weight: 600;
    margin-right: 8px;
  }

  p {
    margin: 4px 0;
    font-size: 12px;
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 4px;
  }

  .available {
    color: #007bff;
  }

  .unavailable {
    color: #666;
  }
`;

const Title = styled.h2`
  margin-top: 0;
  font-size: 24px;
  font-weight: 600;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #333;
  margin: 4px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
  line-height: 1.5;
`;

const FormIonItem = styled(IonItem)`
  --border-width: 0 0 1px 0;
  --border-color: #ccc;
  --padding-start: 0;
  --inner-padding-end: 0;
  margin-bottom: 16px;

  ion-label {
    font-size: 14px;
    color: #333;
    font-weight: 500;
  }

  ion-input,
  ion-select {
    font-size: 14px;
    color: #333;
  }

  ion-input::part(placeholder),
  ion-select::part(placeholder) {
    color: #999;
    font-size: 14px;
  }
`;

const RadioIonItem = styled(IonItem)`
  --padding-start: 0;
  --inner-padding-end: 0;
  --background: transparent;
  --border-color: transparent;
  margin-bottom: 8px;

  ion-label {
    font-size: 14px;
    color: #333;
  }

  ion-radio {
    --color: #ccc;
    --color-checked: #007bff;
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }
`;

const CheckboxIonItem = styled(IonItem)`
  --padding-start: 0;
  --inner-padding-end: 0;
  --background: transparent;
  --border-color: transparent;
  margin-bottom: 16px;

  ion-checkbox {
    --border-color: #ccc;
    --background: transparent;
    --background-checked: #007bff;
    --border-color-checked: #007bff;
    --checkmark-color: white;
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }

  ion-label {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
  }
`;

const SubmitButton = styled(IonButton)`
  --background: #007bff;
  --border-radius: 4px;
  --padding-start: 16px;
  --padding-end: 16px;
  margin-top: 16px;
  text-transform: none;
  font-size: 16px;
  font-weight: 500;
  --color: white;
`;

const FooterNote = styled.p`
  font-size: 12px;
  color: #999;
  margin-top: 16px;
  line-height: 1.5;
`;

const ScrollContainer = styled(IonCol)`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  overflow: hidden;
`;

// Each section should be scrollable independently
const ScrollableSection = styled.div`
  flex: 1;
  overflow-y: auto;
  height: 100%;

    /* Hide scrollbar for Chrome, Safari and Edge */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  scrollbar-width: none;
`;

const WeeklyAppointmentForm: React.FC = () => {
  const [sessionType, setSessionType] = useState("voice");

  return (
    <ScrollContainer >
      <ScrollableSection>
        <Title>Mandarin Interpretation</Title>
        <Subtitle>普通话</Subtitle>
        <Description>
          Select a date from the left and fill out the form below to request
          your interpreter session for Mandarin. Form data entered is private to
          your company organization reference.
        </Description>

        <IonGrid>
          <IonRow>
            <IonCol>
              <FormIonItem>
                <IonLabel position="stacked">First Name</IonLabel>
                <IonInput placeholder="Enter text"></IonInput>
              </FormIonItem>
            </IonCol>
            <IonCol>
              <FormIonItem>
                <IonLabel position="stacked">Last Name</IonLabel>
                <IonInput placeholder="Enter text"></IonInput>
              </FormIonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <FormIonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput placeholder="Enter text"></IonInput>
              </FormIonItem>
            </IonCol>
            <IonCol>
              <FormIonItem>
                <IonLabel position="stacked">Phone Number</IonLabel>
                <IonInput placeholder="Enter text"></IonInput>
              </FormIonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <FormIonItem>
                <IonLabel position="stacked">Account</IonLabel>
                <IonSelect placeholder="Start typing or select from drop down">
                  <IonSelectOption value="account1">Account 1</IonSelectOption>
                  <IonSelectOption value="account2">Account 2</IonSelectOption>
                </IonSelect>
              </FormIonItem>
            </IonCol>
            <IonCol>
              <FormIonItem>
                <IonLabel position="stacked">PIN</IonLabel>
                <IonSelect placeholder="Start typing or select from drop down">
                  <IonSelectOption value="pin1">PIN 1</IonSelectOption>
                  <IonSelectOption value="pin2">PIN 2</IonSelectOption>
                </IonSelect>
              </FormIonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <FormIonItem>
                <IonLabel position="stacked">Time</IonLabel>
                <IonInput placeholder="e.g. 30min"></IonInput>
              </FormIonItem>
            </IonCol>
            <IonCol>
              <FormIonItem>
                <IonLabel position="stacked">Session Duration</IonLabel>
                <IonInput placeholder="e.g. 30min"></IonInput>
              </FormIonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* Session Type Radio Buttons */}
        <IonRadioGroup
          value={sessionType}
          onIonChange={(e) => setSessionType(e.detail.value)}
        >
          <RadioIonItem>
            <IonLabel>Voice</IonLabel>
            <IonRadio slot="start" value="voice" />
          </RadioIonItem>
          <RadioIonItem>
            <IonLabel>Video</IonLabel>
            <IonRadio slot="start" value="video" />
          </RadioIonItem>
        </IonRadioGroup>

        {/* Checkbox */}
        <CheckboxIonItem>
          <IonCheckbox slot="start" />
          <IonLabel>
            I acknowledge a $25 fee for no-shows or cancellations less than 24
            hours.
          </IonLabel>
        </CheckboxIonItem>

        {/* Submit Button */}
        <SubmitButton expand="block">Submit Request</SubmitButton>

        {/* Footer Note */}
        <FooterNote>
          All requests require confirmation from client services. While we
          strive to accommodate your service needs, please note that submitting
          a request DOES NOT guarantee a session at the selected time. Thank you
          for your understanding.
        </FooterNote>
      </ScrollableSection>
    </ScrollContainer>
  );
};
export default WeeklyAppointmentForm;

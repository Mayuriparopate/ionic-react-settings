// import { IonContent, IonPage } from "@ionic/react";
// import { useEffect, useState } from "react";
// import CommonModal from "../components/model/CommonModel";
// import WeeklyAppointmentForm from "../components/Mobile/WeeklyAppointmentForm";
// import WeeklyAvailability from "../components/Mobile/WeeklyAvailability";
// import useMinimumScreenWidth from "../hooks/useMinimumWidth";

// const Tab2: React.FC = () => {
//   const [selectedWeekDay, setSelectedMobile] = useState<number | null>(1);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Use the custom hook to track screen width and orientation
//   const { screenSize, requirementMet } = useMinimumScreenWidth(1024);
//   const isMobileView = !requirementMet();

//   useEffect(() => {
//     if (!isMobileView && isModalOpen) {
//       setIsModalOpen(false);
//     }
//   }, [isMobileView, isModalOpen]);

//   const handleSelectMobile = (mobileId: number) => {
//     setSelectedMobile(mobileId);
//     if (isMobileView) {
//       setIsModalOpen(true);
//     }
//   };

//   return (
//     <IonPage>
//       <IonContent style={{ innerHeight: "100%" }}>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: isMobileView ? "column" : "row",
//           }}
//         >
//           {/* List of Mobile Numbers */}
//           <div style={{ flex: 1 }}>
//             <WeeklyAvailability
//               onSelect={handleSelectMobile}
//               selectedId={selectedWeekDay}
//             />
//           </div>

//           {!isMobileView && selectedWeekDay && (
//             <div style={{ flex: 2 }}>
//               <WeeklyAppointmentForm />
//             </div>
//           )}
//         </div>

//         {/* Modal for Mobile View */}
//         <CommonModal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           title="Schedule Request"
//           width={isMobileView ? "100%" : "80%"}
//           height={isMobileView ? "100%" : "80%"}
//         >
//           {selectedWeekDay && <WeeklyAppointmentForm />}
//         </CommonModal>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Tab2;

import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WeeklyAppointmentForm from "../components/Mobile/WeeklyAppointmentForm";
import WeeklyAvailability from "../components/Mobile/WeeklyAvailability";
import CommonModal from "../components/model/CommonModel";
import useMinimumScreenWidth from "../hooks/useMinimumWidth";

const Divider = styled.div`
  width: 2px;
  background-color: #ccc;
  margin: 0 10px;
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
`;

const Tab2: React.FC = () => {
  const [selectedWeekDay, setSelectedMobile] = useState<number | null>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use the custom hook to track screen width and orientation
  const { screenSize, requirementMet } = useMinimumScreenWidth(1024);
  const isMobileView = !requirementMet();

  useEffect(() => {
    if (!isMobileView && isModalOpen) {
      setIsModalOpen(false);
    }
  }, [isMobileView, isModalOpen]);

  const handleSelectMobile = (mobileId: number) => {
    setSelectedMobile(mobileId);
    if (isMobileView) {
      setIsModalOpen(true);
    }
  };
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid style={{ height: "85vh" }}>
          <IonRow style={{ height: "100%" }}>
            <WeeklyAvailability isMobile={isMobileView} onSelect={handleSelectMobile} selectedId={selectedWeekDay} />
            <Divider />
            {!isMobileView && selectedWeekDay && (
            <WeeklyAppointmentForm />
            )}
            <CommonModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Schedule Request"
              width={isMobileView ? "100%" : "80%"}
              height={isMobileView ? "100%" : "80%"}
            >
              {selectedWeekDay && <WeeklyAppointmentForm />}
            </CommonModal>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

// import { IonContent, IonPage } from "@ionic/react";
// import { useEffect, useState } from "react";
// import CommonModal from "./commonModal/CommonModal";
// import WeeklyAppointmentForm from "./scheduleRequest/WeeklyAppointmentForm";
// import WeeklyAvailability from "./scheduleRequest/WeeklyAvailability";
// import useMinimumScreenWidth from "../../client-app/screen/useMinimumScreenWidth";

// const SplitComponent: React.FC = () => {
//   const [selectedWeekDay, setSelectedMobile] = useState<number | null>(1);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//    // Use the custom hook to track screen width and orientation
//    const { screenSize, requirementMet } = useMinimumScreenWidth(1024);
//    const isMobileView = !requirementMet();

//    useEffect(() => {
//     if (!isMobileView && isModalOpen) {
//       setIsModalOpen(false);
//     }
//   }, [isMobileView, isModalOpen]);

//   const handleSelectMobile = (mobileId: number) => {
//     setSelectedMobile(mobileId);
//     if (isMobileView) {
//       setIsModalOpen(true);
//     }
//   };

//   return (
//     <IonPage>
//       <IonContent style={{ innerHeight: "100%" }}>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: isMobileView ? "column" : "row",
//           }}
//         >
//           {/* List of Mobile Numbers */}
//           <div style={{ flex: 1 }}>
//             <WeeklyAvailability
//               onSelect={handleSelectMobile}
//               selectedId={selectedWeekDay}
//             />
//           </div>

//           {!isMobileView && selectedWeekDay && (
//             <div style={{ flex: 2 }}>
//               <WeeklyAppointmentForm />
//             </div>
//           )}
//         </div>

//         {/* Modal for Mobile View */}
//         <CommonModal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           title="Schedule Request"
//           width={isMobileView ? "100%" : "95%"}
//           height={isMobileView ? "100%" : "95%"}
//         >
//           {selectedWeekDay && <WeeklyAppointmentForm />}
//         </CommonModal>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default SplitComponent;

// import React, { useState } from 'react';
// import {
//   IonPage,
//   IonHeader,
//   IonToolbar,
//   IonTitle,
//   IonContent,
//   IonGrid,
//   IonRow,
//   IonCol,
//   IonList,
//   IonItem,
//   IonLabel,
//   IonInput,
//   IonSelect,
//   IonSelectOption,
//   IonButton,
//   IonRadioGroup,
//   IonRadio,
//   IonCheckbox,
//   IonButtons,
// } from '@ionic/react';
// import styled from 'styled-components';

// // Styled Components
// const TabButtons = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 16px;

//   ion-button {
//     flex: 1;
//     margin: 0 4px;
//   }
// `;

// const StyledIonItem = styled(IonItem)`
//   --padding-start: 0;
// `;

// const FooterNote = styled.p`
//   font-size: 12px;
//   color: #666;
//   margin-top: 16px;
// `;

// const Title = styled.h2`
//   margin-top: 0;
// `;

// const Description = styled.p`
//   font-size: 14px;
//   color: #333;
// `;

// const SplitComponent: React.FC = () => {
//   const [selectedTab, setSelectedTab] = useState('current');
//   const [sessionType, setSessionType] = useState('voice');

//   // Sample availability data
//   const availabilityData = [
//     { day: 'S', date: '10/27/2024', video: 'Available Midnight to 6:00 PM', voice: 'Available All Day' },
//     { day: 'M', date: '10/27/2024', video: 'No Availability', voice: 'Available All Day' },
//     { day: 'T', date: '10/27/2024', video: 'No Availability', voice: 'Available All Day' },
//     { day: 'W', date: '10/27/2024', video: 'Available All Day', voice: 'Available All Day' },
//     { day: 'T', date: '10/27/2024', video: 'Available All Day', voice: 'Available All Day' },
//     { day: 'F', date: '10/27/2024', video: 'No Availability', voice: 'No Availability' },
//     { day: 'S', date: '10/27/2024', video: 'Available Midnight to 6:00 PM', voice: 'Available All Day' },
//   ];

//   return (
//     <IonPage>

//       <IonContent className="ion-padding">
//         <IonGrid>
//           <IonRow>
//             {/* Left Side: Calendar/Availability */}
//             <IonCol size="4">
//               <TabButtons>
//                 <IonButton
//                   fill={selectedTab === 'current' ? 'solid' : 'outline'}
//                   onClick={() => setSelectedTab('current')}
//                 >
//                   Current Week
//                 </IonButton>
//                 <IonButton
//                   fill={selectedTab === 'next' ? 'solid' : 'outline'}
//                   onClick={() => setSelectedTab('next')}
//                 >
//                   Next Week
//                 </IonButton>
//               </TabButtons>
//               <IonList>
//                 {availabilityData.map((item, index) => (
//                   <StyledIonItem key={index}>
//                     <IonLabel>
//                       <strong>{item.day}</strong> {item.date}
//                       <p>
//                         <span role="img" aria-label="video">📹</span> {item.video}
//                       </p>
//                       <p>
//                         <span role="img" aria-label="voice">📞</span> {item.voice}
//                       </p>
//                     </IonLabel>
//                   </StyledIonItem>
//                 ))}
//               </IonList>
//             </IonCol>

//             {/* Right Side: Form */}
//             <IonCol size="8">
//               <Title>Mandarin Interpretation</Title>
//               <Description>普通话</Description>
//               <Description>
//                 Select a date from the left and fill out the form below to request your interpreter session for Mandarin. Form data entered is private to your company organization reference.
//               </Description>

//               <IonGrid>
//                 <IonRow>
//                   <IonCol>
//                     <IonItem>
//                       <IonLabel position="stacked">First Name</IonLabel>
//                       <IonInput placeholder="Enter text"></IonInput>
//                     </IonItem>
//                   </IonCol>
//                   <IonCol>
//                     <IonItem>
//                       <IonLabel position="stacked">Last Name</IonLabel>
//                       <IonInput placeholder="Enter text"></IonInput>
//                     </IonItem>
//                   </IonCol>
//                 </IonRow>
//                 <IonRow>
//                   <IonCol>
//                     <IonItem>
//                       <IonLabel position="stacked">Email</IonLabel>
//                       <IonInput placeholder="Enter text"></IonInput>
//                     </IonItem>
//                   </IonCol>
//                   <IonCol>
//                     <IonItem>
//                       <IonLabel position="stacked">Phone Number</IonLabel>
//                       <IonInput placeholder="Enter text"></IonInput>
//                     </IonItem>
//                   </IonCol>
//                 </IonRow>
//                 <IonRow>
//                   <IonCol>
//                     <IonItem>
//                       <IonLabel position="stacked">Account</IonLabel>
//                       <IonSelect placeholder="Start typing or select from drop down">
//                         <IonSelectOption value="account1">Account 1</IonSelectOption>
//                         <IonSelectOption value="account2">Account 2</IonSelectOption>
//                       </IonSelect>
//                     </IonItem>
//                   </IonCol>
//                   <IonCol>
//                     <IonItem>
//                       <IonLabel position="stacked">PIN</IonLabel>
//                       <IonSelect placeholder="Start typing or select from drop down">
//                         <IonSelectOption value="pin1">PIN 1</IonSelectOption>
//                         <IonSelectOption value="pin2">PIN 2</IonSelectOption>
//                       </IonSelect>
//                     </IonItem>
//                   </IonCol>
//                 </IonRow>
//                 <IonRow>
//                   <IonCol>
//                     <IonItem>
//                       <IonLabel position="stacked">Time</IonLabel>
//                       <IonInput placeholder="e.g. 30min"></IonInput>
//                     </IonItem>
//                   </IonCol>
//                   <IonCol>
//                     <IonItem>
//                       <IonLabel position="stacked">Session Duration</IonLabel>
//                       <IonInput placeholder="e.g. 30min"></IonInput>
//                     </IonItem>
//                   </IonCol>
//                 </IonRow>
//               </IonGrid>

//               {/* Session Type Radio Buttons */}
//               <IonRadioGroup value={sessionType} onIonChange={(e) => setSessionType(e.detail.value)}>
//                 <IonItem>
//                   <IonLabel>Voice</IonLabel>
//                   <IonRadio slot="start" value="voice" />
//                 </IonItem>
//                 <IonItem>
//                   <IonLabel>Video</IonLabel>
//                   <IonRadio slot="start" value="video" />
//                 </IonItem>
//               </IonRadioGroup>

//               {/* Checkbox */}
//               <IonItem>
//                 <IonCheckbox slot="start" />
//                 <IonLabel>
//                   I acknowledge a $25 fee for no-shows or cancellations less than 24 hours.
//                 </IonLabel>
//               </IonItem>

//               {/* Submit Button */}
//               <IonButton expand="block" color="primary">
//                 Submit Request
//               </IonButton>

//               {/* Footer Note */}
//               <FooterNote>
//                 All requests require confirmation from client services. While we strive to accommodate your service needs, please note that submitting a request DOES NOT guarantee a session at the selected time. Thank you for your understanding.
//               </FooterNote>
//             </IonCol>
//           </IonRow>
//         </IonGrid>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default SplitComponent;

// import React, { useState } from 'react';
// import {
//   IonPage,
//   IonHeader,
//   IonToolbar,
//   IonTitle,
//   IonContent,
//   IonGrid,
//   IonRow,
//   IonCol,
//   IonList,
//   IonItem,
//   IonLabel,
//   IonInput,
//   IonSelect,
//   IonSelectOption,
//   IonButton,
//   IonRadioGroup,
//   IonRadio,
//   IonCheckbox,
//   IonButtons,
// } from '@ionic/react';
// import styled from 'styled-components';

// // Styled Components
// const StyledIonHeader = styled(IonHeader)`
//   ion-toolbar {
//     --background: #f8f9fa;
//     --border-color: transparent;
//   }

//   ion-title {
//     font-size: 20px;
//     font-weight: 600;
//     color: #333;
//   }

//   ion-button {
//     font-size: 14px;
//     text-transform: none;
//     --color: #007bff;
//   }
// `;

// const TabButtons = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 16px;

//   ion-button {
//     flex: 1;
//     margin: 0 4px;
//     --border-radius: 4px;
//     --padding-start: 8px;
//     --padding-end: 8px;
//     font-size: 14px;
//     text-transform: none;
//     --border-width: 1px;
//   }

//   ion-button[fill='solid'] {
//     --background: #007bff;
//     --color: white;
//   }

//   ion-button[fill='outline'] {
//     --border-color: #007bff;
//     --color: #007bff;
//     --background: transparent;
//   }
// `;

// const StyledIonItem = styled(IonItem)`
//   --padding-start: 0;
//   --inner-padding-end: 0;
//   --background: transparent;
//   --border-color: transparent;
//   margin-bottom: 8px;

//   ion-label {
//     font-size: 14px;
//     color: #333;
//   }

//   strong {
//     font-size: 16px;
//     font-weight: 600;
//     margin-right: 8px;
//   }

//   p {
//     margin: 4px 0;
//     font-size: 12px;
//     display: flex;
//     align-items: center;
//   }

//   .icon {
//     margin-right: 4px;
//   }

//   .available {
//     color: #007bff;
//   }

//   .unavailable {
//     color: #666;
//   }
// `;

// const Title = styled.h2`
//   margin-top: 0;
//   font-size: 24px;
//   font-weight: 600;
//   color: #333;
// `;

// const Subtitle = styled.p`
//   font-size: 16px;
//   color: #333;
//   margin: 4px 0;
// `;

// const Description = styled.p`
//   font-size: 14px;
//   color: #666;
//   margin-bottom: 24px;
//   line-height: 1.5;
// `;

// const FormIonItem = styled(IonItem)`
//   --border-width: 0 0 1px 0;
//   --border-color: #ccc;
//   --padding-start: 0;
//   --inner-padding-end: 0;
//   margin-bottom: 16px;

//   ion-label {
//     font-size: 14px;
//     color: #333;
//     font-weight: 500;
//   }

//   ion-input,
//   ion-select {
//     font-size: 14px;
//     color: #333;
//   }

//   ion-input::part(placeholder),
//   ion-select::part(placeholder) {
//     color: #999;
//     font-size: 14px;
//   }
// `;

// const RadioIonItem = styled(IonItem)`
//   --padding-start: 0;
//   --inner-padding-end: 0;
//   --background: transparent;
//   --border-color: transparent;
//   margin-bottom: 8px;

//   ion-label {
//     font-size: 14px;
//     color: #333;
//   }

//   ion-radio {
//     --color: #ccc;
//     --color-checked: #007bff;
//     margin-right: 8px;
//     width: 20px;
//     height: 20px;
//   }
// `;

// const CheckboxIonItem = styled(IonItem)`
//   --padding-start: 0;
//   --inner-padding-end: 0;
//   --background: transparent;
//   --border-color: transparent;
//   margin-bottom: 16px;

//   ion-checkbox {
//     --border-color: #ccc;
//     --background: transparent;
//     --background-checked: #007bff;
//     --border-color-checked: #007bff;
//     --checkmark-color: white;
//     margin-right: 8px;
//     width: 20px;
//     height: 20px;
//   }

//   ion-label {
//     font-size: 14px;
//     color: #666;
//     line-height: 1.5;
//   }
// `;

// const SubmitButton = styled(IonButton)`
//   --background: #007bff;
//   --border-radius: 4px;
//   --padding-start: 16px;
//   --padding-end: 16px;
//   margin-top: 16px;
//   text-transform: none;
//   font-size: 16px;
//   font-weight: 500;
//   --color: white;
// `;

// const FooterNote = styled.p`
//   font-size: 12px;
//   color: #999;
//   margin-top: 16px;
//   line-height: 1.5;
// `;

// const SplitComponent: React.FC = () => {
//   const [selectedTab, setSelectedTab] = useState('current');
//   const [sessionType, setSessionType] = useState('voice');

//   // Sample availability data
//   const availabilityData = [
//     { day: 'S', date: '10/27/2024', video: 'Available Midnight to 6:00 PM', voice: 'Available All Day' },
//     { day: 'M', date: '10/27/2024', video: 'No Availability', voice: 'Available All Day' },
//     { day: 'T', date: '10/27/2024', video: 'No Availability', voice: 'Available All Day' },
//     { day: 'W', date: '10/27/2024', video: 'Available All Day', voice: 'Available All Day' },
//     { day: 'T', date: '10/27/2024', video: 'Available All Day', voice: 'Available All Day' },
//     { day: 'F', date: '10/27/2024', video: 'No Availability', voice: 'No Availability' },
//     { day: 'S', date: '10/27/2024', video: 'Available Midnight to 6:00 PM', voice: 'Available All Day' },
//   ];

//   return (
//     <IonPage>
//       <StyledIonHeader>
//         <IonToolbar>
//           <IonTitle>Schedule Request</IonTitle>
//           <IonButtons slot="end">
//             <IonButton>Cancel</IonButton>
//           </IonButtons>
//         </IonToolbar>
//       </StyledIonHeader>
//       <IonContent className="ion-padding">
//         <IonGrid>
//           <IonRow>
//             {/* Left Side: Calendar/Availability */}
//             <IonCol size="4">
//               <TabButtons>
//                 <IonButton
//                   fill={selectedTab === 'current' ? 'solid' : 'outline'}
//                   onClick={() => setSelectedTab('current')}
//                 >
//                   Current Week
//                 </IonButton>
//                 <IonButton
//                   fill={selectedTab === 'next' ? 'solid' : 'outline'}
//                   onClick={() => setSelectedTab('next')}
//                 >
//                   Next Week
//                 </IonButton>
//               </TabButtons>
//               <IonList>
//                 {availabilityData.map((item, index) => (
//                   <StyledIonItem key={index}>
//                     <IonLabel>
//                       <strong>{item.day}</strong> {item.date}
//                       <p>
//                         <span className="icon" role="img" aria-label="video">
//                           📹
//                         </span>{' '}
//                         <span className={item.video.includes('Available') ? 'available' : 'unavailable'}>
//                           {item.video}
//                         </span>
//                       </p>
//                       <p>
//                         <span className="icon" role="img" aria-label="voice">
//                           📞
//                         </span>{' '}
//                         <span className={item.voice.includes('Available') ? 'available' : 'unavailable'}>
//                           {item.voice}
//                         </span>
//                       </p>
//                     </IonLabel>
//                   </StyledIonItem>
//                 ))}
//               </IonList>
//             </IonCol>

//             {/* Right Side: Form */}
//             <IonCol size="8">
//               <Title>Mandarin Interpretation</Title>
//               <Subtitle>普通话</Subtitle>
//               <Description>
//                 Select a date from the left and fill out the form below to request your interpreter session for
//                 Mandarin. Form data entered is private to your company organization reference.
//               </Description>

//               <IonGrid>
//                 <IonRow>
//                   <IonCol>
//                     <FormIonItem>
//                       <IonLabel position="stacked">First Name</IonLabel>
//                       <IonInput placeholder="Enter text"></IonInput>
//                     </FormIonItem>
//                   </IonCol>
//                   <IonCol>
//                     <FormIonItem>
//                       <IonLabel position="stacked">Last Name</IonLabel>
//                       <IonInput placeholder="Enter text"></IonInput>
//                     </FormIonItem>
//                   </IonCol>
//                 </IonRow>
//                 <IonRow>
//                   <IonCol>
//                     <FormIonItem>
//                       <IonLabel position="stacked">Email</IonLabel>
//                       <IonInput placeholder="Enter text"></IonInput>
//                     </FormIonItem>
//                   </IonCol>
//                   <IonCol>
//                     <FormIonItem>
//                       <IonLabel position="stacked">Phone Number</IonLabel>
//                       <IonInput placeholder="Enter text"></IonInput>
//                     </FormIonItem>
//                   </IonCol>
//                 </IonRow>
//                 <IonRow>
//                   <IonCol>
//                     <FormIonItem>
//                       <IonLabel position="stacked">Account</IonLabel>
//                       <IonSelect placeholder="Start typing or select from drop down">
//                         <IonSelectOption value="account1">Account 1</IonSelectOption>
//                         <IonSelectOption value="account2">Account 2</IonSelectOption>
//                       </IonSelect>
//                     </FormIonItem>
//                   </IonCol>
//                   <IonCol>
//                     <FormIonItem>
//                       <IonLabel position="stacked">PIN</IonLabel>
//                       <IonSelect placeholder="Start typing or select from drop down">
//                         <IonSelectOption value="pin1">PIN 1</IonSelectOption>
//                         <IonSelectOption value="pin2">PIN 2</IonSelectOption>
//                       </IonSelect>
//                     </FormIonItem>
//                   </IonCol>
//                 </IonRow>
//                 <IonRow>
//                   <IonCol>
//                     <FormIonItem>
//                       <IonLabel position="stacked">Time</IonLabel>
//                       <IonInput placeholder="e.g. 30min"></IonInput>
//                     </FormIonItem>
//                   </IonCol>
//                   <IonCol>
//                     <FormIonItem>
//                       <IonLabel position="stacked">Session Duration</IonLabel>
//                       <IonInput placeholder="e.g. 30min"></IonInput>
//                     </FormIonItem>
//                   </IonCol>
//                 </IonRow>
//               </IonGrid>

//               {/* Session Type Radio Buttons */}
//               <IonRadioGroup value={sessionType} onIonChange={(e) => setSessionType(e.detail.value)}>
//                 <RadioIonItem>
//                   <IonLabel>Voice</IonLabel>
//                   <IonRadio slot="start" value="voice" />
//                 </RadioIonItem>
//                 <RadioIonItem>
//                   <IonLabel>Video</IonLabel>
//                   <IonRadio slot="start" value="video" />
//                 </RadioIonItem>
//               </IonRadioGroup>

//               {/* Checkbox */}
//               <CheckboxIonItem>
//                 <IonCheckbox slot="start" />
//                 <IonLabel>
//                   I acknowledge a $25 fee for no-shows or cancellations less than 24 hours.
//                 </IonLabel>
//               </CheckboxIonItem>

//               {/* Submit Button */}
//               <SubmitButton expand="block">Submit Request</SubmitButton>

//               {/* Footer Note */}
//               <FooterNote>
//                 All requests require confirmation from client services. While we strive to accommodate your service
//                 needs, please note that submitting a request DOES NOT guarantee a session at the selected time. Thank
//                 you for your understanding.
//               </FooterNote>
//             </IonCol>
//           </IonRow>
//         </IonGrid>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default SplitComponent;

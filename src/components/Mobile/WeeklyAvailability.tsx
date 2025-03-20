// import { IonList, IonItem, IonLabel, IonIcon } from "@ionic/react";
// import { videocamOutline, callOutline, closeOutline } from "ionicons/icons";
// import "./WeeklyAvailability.css";

// interface IDayAvailability {
//   id: number;
//   day: string;
//   date: string;
//   availability: { type: string; text: string }[];
// }

// interface IProps {
//   onSelect: (id: number) => void;
//   selectedId: number | null;
// }

// const weekAvailability: Array<IDayAvailability> = [
//   {
//     id: 1,
//     day: "S",
//     date: "10/27/2024",
//     availability: [
//       { type: "video", text: "Available All Day" },
//       { type: "call", text: "Available Midnight to 6:00 PM" },
//     ],
//   },
//   {
//     id: 2,
//     day: "M",
//     date: "10/27/2024",
//     availability: [
//       { type: "none", text: "No availability" },
//       { type: "call", text: "Available All Day" },
//     ],
//   },
//   {
//     id: 3,
//     day: "T",
//     date: "10/27/2024",
//     availability: [
//       { type: "none", text: "No availability" },
//       { type: "call", text: "Available All Day" },
//     ],
//   },
//   {
//     id: 4,
//     day: "W",
//     date: "10/27/2024",
//     availability: [
//       { type: "video", text: "Available All Day" },
//       { type: "call", text: "Available All Day" },
//     ],
//   },
//   {
//     id: 5,
//     day: "T",
//     date: "10/27/2024",
//     availability: [
//       { type: "video", text: "Available All Day" },
//       { type: "call", text: "Available All Day" },
//     ],
//   },
//   {
//     id: 6,
//     day: "F",
//     date: "10/27/2024",
//     availability: [{ type: "none", text: "No availability" }],
//   },
//   {
//     id: 7,
//     day: "S",
//     date: "10/27/2024",
//     availability: [
//       { type: "call", text: "Available Midnight to 6:00 PM" },
//       { type: "call", text: "Available All Day" },
//     ],
//   },
// ];

// const getIcon = (type: string) => {
//   switch (type) {
//     case "video":
//       return videocamOutline;
//     case "call":
//       return callOutline;
//     case "none":
//       return closeOutline;
//     default:
//       return "";
//   }
// };

// const WeeklyAvailability: React.FC<IProps> = ({ onSelect, selectedId }) => {
//   return (
//     <div className="weekly-availability-container">
//       <IonList className="weekly-availability">
//         {weekAvailability.map((day) => (
//           <IonItem
//             key={day.id}
//             button
//             onClick={() => onSelect(day.id)}
//             className={`weekly-item ${selectedId === day.id ? "selected" : ""}`}
//           >
//             {/* Day and Date Section */}
//             <div className="day-date-container">
//               <IonLabel className="day-label">{day.day}</IonLabel>
//             </div>

//             {/* Availability Section */}
//             <div className="availability-container">
//               <IonLabel className="date-label">{day.date}</IonLabel>
//               {day.availability.map((avail, index) => (
//                 <div key={index} className="availability-item">
//                   <IonIcon
//                     icon={getIcon(avail.type)}
//                     className={`availability-icon ${avail.type}`}
//                   />
//                   <IonLabel className="availability-text">
//                     {avail.text}
//                   </IonLabel>
//                 </div>
//               ))}
//             </div>
//           </IonItem>
//         ))}
//       </IonList>
//     </div>
//   );
// };

// export default WeeklyAvailability;

import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonRow,
  IonText,
} from "@ionic/react";
import {
  call,
  callOutline,
  closeOutline,
  videocam,
  videocamOff,
  videocamOutline,
} from "ionicons/icons";
import React, { useState } from "react";
import styled from "styled-components";

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

const DayRow = styled(IonRow)`
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const DayLetter = styled(IonCol)`
  font-size: 22px;
  font-weight: bold;
  flex: 0 0 30px;
  text-align: center;
`;

const DateCol = styled(IonCol)`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const AvailabilityCol = styled(IonCol)`
  font-size: 14px;
  color: #555;
`;

const IconTextRow = styled(IonRow)`
  align-items: center;
  gap: 6px;
  margin-top: 4px;
`;

const StyledIcon = styled(IonIcon)`
  font-size: 24px;
  color: #007aff;
`;

const NoAvailabilityIcon = styled(IonIcon)`
  font-size: 24px;
  color: #888;
`;

const Divider = styled.div`
  width: 0.8px;
  background-color: #ccc;
  min-height: 00%;
`;

const TabButtons = styled.div`
  display: flex;
  background: #e0ebff;
  border-radius: 8px;
  padding: 0px 1px;
  gap: 1px;
`;

const StyledButton = styled(IonButton)<{ selected: boolean }>`
  font-size: 16px;
  font-weight: 600;
  color: #0056b3;
  --background: ${(props) => (props.selected ? "white" : "transparent")};
  border-radius: 6px;
  height: 46px;
  min-width: 150px;
  --border: ${(props) => (props.selected ? "1px solid #d0d7e6" : "none")};
  text-transform: none;
  box-shadow: none; /* Removes box shadow */
  --box-shadow: none; /* Ensure Ionic's shadow is removed */
  --border-width: 0; /* Remove Ionic's default border */
  &:hover {
    background: ${(props) =>
      props.selected ? "white" : "rgba(255, 255, 255, 0.3)"};
  }
`;

interface IProps {
  onSelect: (id: number) => void;
  selectedId: number | null;
  isMobile?: boolean;
}

// Availability Component
const WeeklyAvailability: React.FC<IProps> = ({
  isMobile,
  onSelect,
  selectedId,
}) => {
  const [selectedTab, setSelectedTab] = useState("current");

  const scheduleData = [
    { id: 1, day: "S", date: "10/27/2024", available: ["video", "call"] },
    { id: 2, day: "M", date: "10/27/2024", available: ["none", "call"] },
    { id: 3, day: "T", date: "10/27/2024", available: ["none", "call"] },
    { id: 4, day: "W", date: "10/27/2024", available: ["video", "call"] },
    { id: 5, day: "T", date: "10/27/2024", available: ["video", "call"] },
    { id: 6, day: "F", date: "10/27/2024", available: ["none", "none"] },
    { id: 7, day: "S", date: "10/27/2024", available: ["video", "call"] },
  ];

  return (
    <ScrollContainer size={isMobile ? "12" : "3"}>
      <ScrollableSection>
        <IonRow
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TabButtons>
            <StyledButton
              selected={selectedTab === "current"}
              onClick={() => setSelectedTab("current")}
            >
              Current Week
            </StyledButton>
            <StyledButton
              selected={selectedTab === "next"}
              onClick={() => setSelectedTab("next")}
            >
              Next Week
            </StyledButton>
          </TabButtons>
        </IonRow>
        <IonGrid>
          {scheduleData.map((item, index) => (
            <IonRow
              style={{ padding: "5px 0", borderBottom: "1px solid #1555c4" }}
              key={index}
              className="ion-padding-none"
              onClick={() => onSelect(item.id)}
            >
              <IonCol size="2">
                <IonText style={{ fontSize: "30px" }}>{item.day}</IonText>
              </IonCol>
              <Divider></Divider>
              <IonCol>
                <IconTextRow style={{ fontSize: "18px", fontWeight: "600" }}>
                  {item.date}
                </IconTextRow>
                {item.available.map((type, idx) => (
                  <IconTextRow key={idx}>
                    {type === "video" && (
                      <>
                        <StyledIcon icon={videocam} size="" />
                        <IonText>Available All Day</IonText>
                      </>
                    )}
                    {type === "call" && (
                      <>
                        <StyledIcon icon={call} />
                        <IonText>Available Midnight to 6:00 PM</IonText>
                      </>
                    )}
                    {type === "none" && (
                      <>
                        <NoAvailabilityIcon icon={videocamOff} />
                        <IonText>No availability</IonText>
                      </>
                    )}
                  </IconTextRow>
                ))}
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </ScrollableSection>
    </ScrollContainer>
  );
};

export default WeeklyAvailability;

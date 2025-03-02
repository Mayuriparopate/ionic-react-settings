import { IonList, IonItem, IonLabel, IonIcon } from "@ionic/react";
import { videocamOutline, callOutline, closeOutline } from "ionicons/icons";
import "./WeeklyAvailability.css";

interface IDayAvailability {
  id: number;
  day: string;
  date: string;
  availability: { type: string; text: string }[];
}

interface IProps {
  onSelect: (id: number) => void;
  selectedId: number | null;
}

const weekAvailability: Array<IDayAvailability> = [
  {
    id: 1,
    day: "S",
    date: "10/27/2024",
    availability: [
      { type: "video", text: "Available All Day" },
      { type: "call", text: "Available Midnight to 6:00 PM" },
    ],
  },
  {
    id: 2,
    day: "M",
    date: "10/27/2024",
    availability: [
      { type: "none", text: "No availability" },
      { type: "call", text: "Available All Day" },
    ],
  },
  {
    id: 3,
    day: "T",
    date: "10/27/2024",
    availability: [
      { type: "none", text: "No availability" },
      { type: "call", text: "Available All Day" },
    ],
  },
  {
    id: 4,
    day: "W",
    date: "10/27/2024",
    availability: [
      { type: "video", text: "Available All Day" },
      { type: "call", text: "Available All Day" },
    ],
  },
  {
    id: 5,
    day: "T",
    date: "10/27/2024",
    availability: [
      { type: "video", text: "Available All Day" },
      { type: "call", text: "Available All Day" },
    ],
  },
  {
    id: 6,
    day: "F",
    date: "10/27/2024",
    availability: [{ type: "none", text: "No availability" }],
  },
  {
    id: 7,
    day: "S",
    date: "10/27/2024",
    availability: [
      { type: "call", text: "Available Midnight to 6:00 PM" },
      { type: "call", text: "Available All Day" },
    ],
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "video":
      return videocamOutline;
    case "call":
      return callOutline;
    case "none":
      return closeOutline;
    default:
      return "";
  }
};

const WeeklyAvailability: React.FC<IProps> = ({ onSelect, selectedId }) => {
  return (
    <div className="weekly-availability-container">
      <IonList className="weekly-availability">
        {weekAvailability.map((day) => (
          <IonItem
            key={day.id}
            button
            onClick={() => onSelect(day.id)}
            className={`weekly-item ${selectedId === day.id ? "selected" : ""}`}
          >
            {/* Day and Date Section */}
            <div className="day-date-container">
              <IonLabel className="day-label">{day.day}</IonLabel>
            </div>

            {/* Availability Section */}
            <div className="availability-container">
              <IonLabel className="date-label">{day.date}</IonLabel>
              {day.availability.map((avail, index) => (
                <div key={index} className="availability-item">
                  <IonIcon
                    icon={getIcon(avail.type)}
                    className={`availability-icon ${avail.type}`}
                  />
                  <IonLabel className="availability-text">
                    {avail.text}
                  </IonLabel>
                </div>
              ))}
            </div>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

export default WeeklyAvailability;

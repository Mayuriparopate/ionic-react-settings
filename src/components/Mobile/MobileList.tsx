import { IonList, IonItem, IonLabel } from "@ionic/react";

interface IMobileNumber {
  id: number;
  number: string;
}

interface IProps {
    onSelect: (id: number) => void;
    selectedId: number | null;
}

const mobileNumbers: Array<IMobileNumber> = [
  { id: 1, number: "9876543210" },
  { id: 2, number: "8765432109" },
  { id: 3, number: "7654321098" },
];

const MobileList: React.FC<IProps> = ({ onSelect, selectedId }) => {
  return (
    <IonList>
      {mobileNumbers.map((mobile) => (
        <IonItem key={mobile.id} button onClick={() => onSelect(mobile.id)} color={selectedId === mobile.id ? "primary" : ""}>
          <IonLabel>{mobile.number}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default MobileList;

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";

interface Record<T> {
  [key: number]: T;
}

interface MobileDetails {
  owner: string;
  plan: string;
  validity: string;
}

interface Props {
  mobileId: number;
}

const mobileDetails: Record<MobileDetails> = {
  1: { owner: "John Doe", plan: "Unlimited Data", validity: "30 Days" },
  2: { owner: "Alice Smith", plan: "500MB Daily", validity: "15 Days" },
  3: { owner: "Bob Johnson", plan: "1GB Daily", validity: "45 Days" },
};

const MobileDetail: React.FC<Props> = ({ mobileId }) => {
  const details: MobileDetails = mobileDetails[mobileId];

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Mobile Number Details</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>
          <strong>Owner:</strong> {details.owner}
        </p>
        <p>
          <strong>Plan:</strong> {details.plan}
        </p>
        <p>
          <strong>Validity:</strong> {details.validity}
        </p>
      </IonCardContent>
    </IonCard>
  );
};

export default MobileDetail;

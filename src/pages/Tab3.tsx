import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonModal,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import styled from "styled-components";
import { useState } from "react";
import Tab2 from "./Tab2";

type SessionRequestToolbarProps = {
  onCloseButtonClicked: () => void;
};

const ToolbarContainer = styled(IonGrid)`
  padding: 10px 10px 16px 0px;
  background: transparent;

  .back-button {
    --padding-start: 0px !important;
  }
`;

const ActionButtonsCol = styled(IonCol)`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  ion-button {
    margin: 0;
  }

  .schedule-btn {
    --background: white;
    --color: #0076c0;
    border: 1px solid #0076c0;
    border-radius: 4px;
  }

  .video-btn {
    --background: #dddcde;
    --color: #6d6972;
  }

  .voice-btn {
    --background: #0076c0;
    --color: white;
  }

  .ion-hide-sm-down {
    display: none;
  }

  @media (min-width: 576px) {
    .ion-hide-sm-down {
      display: inline;
    }

    ion-button {
      min-width: 120px;
    }
  }
`;
const StyledModal = styled(IonModal)`
  --width: 95%;
  --height: 95%;

  // @media (min-width: 768px) {
  //     --height: 90vh;
  //     --max-width: 600px;
  //     --border-radius: 12px;
  // }
`;

export default function Tab3(
  props: SessionRequestToolbarProps
) {
  const [isOuterModalOpen, setIsOuterModalOpen] = useState(false);
  const [isInnerModalOpen, setIsInnerModalOpen] = useState(false);
  return (
    <>
      <IonButton onClick={() => setIsOuterModalOpen(true)}>Click</IonButton>


      {/* model */}
      <StyledModal
        isOpen={isOuterModalOpen}
        onDidDismiss={() => setIsOuterModalOpen(false)}
        backdropDismiss={false}
      >
        <IonHeader>
          <IonToolbar>
            <IonTitle>Schedule Session</IonTitle>
            <IonButton
              slot="end"
              onClick={() => setIsOuterModalOpen(false)}
              fill="clear"
            >
              Close
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>This is where the scheduling form or options will be displayed.</p>
          <Tab2></Tab2>
        </IonContent>
      </StyledModal>


    </>
  );
}

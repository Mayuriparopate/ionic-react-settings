import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";
import {
  videocamOffOutline,
  callOutline,
  map,
  calendarOutline,
} from "ionicons/icons";
import styled from "styled-components";

type SessionRequestToolbarProps = {
  onCloseButtonClicked?: () => void;
};

const ToolbarContainer = styled(IonGrid)`
  padding: 10px 10px 16px 0px;
  background: transparent;
  l̥ .back-button {
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

export default function SessionRequestToolbar(
  props: SessionRequestToolbarProps
) {
  return (
    <ToolbarContainer className="ion-no-padding">
      <IonRow className="ion-align-items-center">
        <IonCol size="auto">
          <IonButton className="back-button">cancel</IonButton>
        </IonCol>
        <ActionButtonsCol>
          {/* Commented map button as it is not showing in toolbar as per the figma. We need to show map button next to the native language. */}
          {/* <SessionRequestButton icon={map} className="schedule-btn">
                        Map
                    </SessionRequestButton> */}
          <IonButton className="schedule-btn">Schedule</IonButton>
          <IonButton className="video-btn" disabled>
            Video
          </IonButton>
          <IonButton className="voice-btn">Voice</IonButton>
        </ActionButtonsCol>
      </IonRow>
    </ToolbarContainer>
  );
}

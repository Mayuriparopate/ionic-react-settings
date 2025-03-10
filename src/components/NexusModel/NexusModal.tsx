// import React from "react";
// import {
//   IonButton,
//   IonButtons,
//   IonContent,
//   IonHeader,
//   IonIcon,
//   IonModal,
//   IonTitle,
//   IonToolbar,
// } from "@ionic/react";
// import "./NexusModal.css";

type NexusModalProps = {
  isOpen: boolean;
  onDismiss: () => void;
  children: React.ReactNode;
  title: string;
  modalName?: "sessiondetails" | "filters";
  showHeader?: boolean;
  showStartBackButton?: boolean;
  showStartCloseButton?: boolean;
  height?: string;
  width?: string;
  showEndCloseButton?: boolean;
  showCustomButton?: boolean;
  customButtonText?: string;
  onCustomClick?: () => void;
};

// const NexusModal: React.FC<NexusModalProps> = ({
//   isOpen,
//   onDismiss,
//   children,
//   title,
//   modalName,
//   showHeader = true,
// }) => {
//   return (
//     <IonModal isOpen={isOpen} onDidDismiss={onDismiss} className="nexus-modal">
//       <IonHeader>
//         <IonToolbar>
//           <IonButtons slot="start">
//             <IonButton onClick={onDismiss}>Back</IonButton>
//           </IonButtons>
//           {showHeader && <IonTitle>{title}</IonTitle>}
//           <IonButtons slot="end">
//             <IonButton onClick={onDismiss}>close</IonButton>
//           </IonButtons>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent

//       >
//         {children}
//       </IonContent>
//     </IonModal>
//   );
// };

// export default NexusModal;

import React from "react";
import styled from "styled-components";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";

const StyledModal = styled(IonModal)<{ width?: string; height?: string }>`
${({ width, height }) => `
--width: ${width || "90%"};
--height: ${height || "90%"};
`}

--border-radius: 8px;
--box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);


&.sessiondetails {
    --width: 90%;
    --height: 90%;
  }

  &.filters {
    --width: 90%;
    --height: 63%;
  }


@media screen and (min-width: 768px) {
    &.sessiondetails {
      --width: 80%;
      --height: 65%;
    }
    &.filters {
      --width: 80%;
      --height: 80%;
    }
  }

  @media screen and (min-width: 1024px) {
    &.sessiondetails {
      --width: 70%;
      --height: 95%;
    }
    &.filters {
      --width: 70%;
      --height: 80%;
    }
  }


/* Generalized Responsive Breakpoints */
@media screen and (min-width: 600px) {
--width: 85%;
--height: 85%;
}

@media screen and (min-width: 768px) {
--width: 80%;
--height: 80%;
}

@media screen and (min-width: 1024px) {
--width: 70%;
--height: 75%;
}

@media screen and (min-width: 1280px) {
--width: 60%;
--height: 70%;
}

&::part(content) {
--background: var(--ion-background-color, #fff);
}
`;

const StyledToolbar = styled(IonToolbar)`
  --color: var(--ion-color);
`;

const StyledTitle = styled(IonTitle)`
  font-size: 1.2rem;
  text-align: center;
`;

const StyledContent = styled(IonContent)`
  overflow: hidden;
  &::part(scroll) {
    overflow: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
  }
  &::part(scroll)::-webkit-scrollbar {
    display: none; /* WebKit */
  }
`;

const NexusModal = ({
  isOpen,
  onDismiss,
  children,
  title,
  modalName,
  showHeader = true,
  showStartBackButton = false,
  showStartCloseButton = false,
  showEndCloseButton = false,
  showCustomButton = false,
  customButtonText = "",
  onCustomClick,
  height,
  width,
}: NexusModalProps) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onDidDismiss={onDismiss}
      className={`nexus-modal ${modalName}`}
      width={width}
      height={height}
    >
      <IonHeader>
        <StyledToolbar>
          <IonButtons slot="start">
            {showStartBackButton && (
              <IonButton onClick={onDismiss}>
                <IonIcon icon={chevronBackOutline} slot="start" />
                Back
              </IonButton>
            )}
            {showStartCloseButton && (
              <IonButton onClick={onDismiss}>Close</IonButton>
            )}
          </IonButtons>
          {showHeader && <StyledTitle>{title}</StyledTitle>}
          <IonButtons slot="end">
            {showEndCloseButton && (
              <IonButton onClick={onDismiss}>Close</IonButton>
            )}
            {showCustomButton && (
              <IonButton onClick={onCustomClick}>{customButtonText}</IonButton>
            )}
          </IonButtons>
        </StyledToolbar>
      </IonHeader>

      <StyledContent>{children}</StyledContent>
    </StyledModal>
  );
};

export default NexusModal;

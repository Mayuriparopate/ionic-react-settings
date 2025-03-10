import { IonButton } from "@ionic/react";

import { useState } from "react";
import CommonModal from "../components/model/CommonModel";
import Tab2 from "./Tab2";
import useMinimumScreenWidth from "../hooks/useMinimumWidth";
import NexusModal from "../components/NexusModel/NexusModal";

export default function Tab3() {
  const [isOuterModalOpen, setIsOuterModalOpen] = useState(false);

  const { screenSize, requirementMet } = useMinimumScreenWidth(1024);
  const isMobileView = !requirementMet();

  return (
    <>
      <IonButton onClick={() => setIsOuterModalOpen(true)}>Click</IonButton>

      <NexusModal
        isOpen={isOuterModalOpen}
        onDismiss={() => setIsOuterModalOpen(false)}
        title="Schedule Session"
        showHeader={true}
        modalName="sessiondetails"
        showStartBackButton={true}
        height="100%"
        width="100%"
      >
        <Tab2></Tab2>
      </NexusModal>
    </>
  );
}

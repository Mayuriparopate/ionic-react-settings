import { IonButton } from "@ionic/react";

import { useState } from "react";
import CommonModal from "../components/model/CommonModel";
import Tab2 from "./Tab2";
import useMinimumScreenWidth from "../hooks/useMinimumWidth";

export default function Tab3() {
  const [isOuterModalOpen, setIsOuterModalOpen] = useState(false);

  const { screenSize, requirementMet } = useMinimumScreenWidth(1024);
  const isMobileView = !requirementMet();

  return (
    <>
      <IonButton onClick={() => setIsOuterModalOpen(true)}>Click</IonButton>

      <CommonModal
        isOpen={isOuterModalOpen}
        onClose={() => setIsOuterModalOpen(false)}
        title="Schedule Session"
        width={ "100%"}
        height={"100%"}
      >
        <Tab2></Tab2>
      </CommonModal>
    </>
  );
}

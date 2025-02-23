import {
  IonButton
} from "@ionic/react";

import { useState } from "react";
import CommonModal from "../components/model/CommonModel";
import Tab2 from "./Tab2";

export default function Tab3() {
  const [isOuterModalOpen, setIsOuterModalOpen] = useState(false);
  return (
    <>
      <IonButton onClick={() => setIsOuterModalOpen(true)}>Click</IonButton>

      <CommonModal
        isOpen={isOuterModalOpen}
        onClose={() => setIsOuterModalOpen(false)}
        title="Schedule Session"
        heightWidth="heigth-width-95"
      >
          <Tab2></Tab2>
      </CommonModal>


    </>
  );
}

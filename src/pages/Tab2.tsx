import { useState, useEffect } from "react";
import { IonPage, IonContent, IonButton, IonModal } from "@ionic/react";
import MobileList from "../components/Mobile/MobileList";
import MobileDetail from "../components/Mobile/MobileDetail";
import useMinimumScreenWidth from "../hooks/useMinimumWidth";

const Tab2: React.FC = () => {
  const [selectedMobile, setSelectedMobile] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

   // Use the custom hook to track screen width and orientation
   const { screenSize, requirementMet } = useMinimumScreenWidth(1024);
   const isMobileView = !requirementMet();


   useEffect(() => {
    if (!isMobileView && isModalOpen) {
      setIsModalOpen(false);
    }
  }, [isMobileView, isModalOpen]);

  const handleSelectMobile = (mobileId: number) => {
    setSelectedMobile(mobileId);
    if (isMobileView) {
      setIsModalOpen(true);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div style={{ display: "flex", flexDirection: isMobileView ? "column" : "row" }}>
          {/* List of Mobile Numbers */}
          <div style={{ flex: 1 }}>
            <MobileList onSelect={handleSelectMobile} selectedId={selectedMobile} />
          </div>

          {/* Detail View (Only for Desktop) */}
          {!isMobileView && selectedMobile && (
            <div style={{ flex: 2 }}>
              <MobileDetail mobileId={selectedMobile} />
            </div>
          )}
        </div>

        {/* Modal for Mobile View */}
        <IonModal isOpen={isModalOpen} onDidDismiss={() => setIsModalOpen(false)}>
          <IonButton onClick={() => setIsModalOpen(false)}>Back</IonButton>
          {selectedMobile && <MobileDetail mobileId={selectedMobile} />}
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

import { IonContent, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import CommonModal from "../components/model/CommonModel";
import WeeklyAppointmentForm from "../components/Mobile/WeeklyAppointmentForm";
import WeeklyAvailability from "../components/Mobile/WeeklyAvailability";
import useMinimumScreenWidth from "../hooks/useMinimumWidth";

const Tab2: React.FC = () => {
  const [selectedWeekDay, setSelectedMobile] = useState<number | null>(1);
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
      <IonContent style={{ innerHeight: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: isMobileView ? "column" : "row",
          }}
        >
          {/* List of Mobile Numbers */}
          <div style={{ flex: 1 }}>
            <WeeklyAvailability
              onSelect={handleSelectMobile}
              selectedId={selectedWeekDay}
            />
          </div>

          {!isMobileView && selectedWeekDay && (
            <div style={{ flex: 2 }}>
              <WeeklyAppointmentForm />
            </div>
          )}
        </div>

        {/* Modal for Mobile View */}
        <CommonModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Schedule Request"
          width={isMobileView ? "100%" : "80%"}
          height={isMobileView ? "100%" : "80%"}
        >
          {selectedWeekDay && <WeeklyAppointmentForm />}
        </CommonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

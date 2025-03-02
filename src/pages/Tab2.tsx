import NexusPageLayout from "../Layout/NexusPageLayout";
import { SessionRequestInfoIntake } from "../Layout/SessionRequesetInfoTake";


const Tab2: React.FC = () => {
  return (
    // <IonPage>
    //   <IonContent style={{innerHeight: "100%"}}>
    //     <div style={{ display: "flex", flexDirection: isMobileView ? "column" : "row" }}>
    //       {/* List of Mobile Numbers */}
    //       <div style={{ flex: 1 }}>
    //         <WeeklyAvailability onSelect={handleSelectMobile} selectedId={selectedWeekDay} />
    //       </div>

    //       {!isMobileView && selectedWeekDay && (
    //         <div style={{ flex: 2 }}>
    //           <WeeklyAppointmentForm />
    //         </div>
    //       )}
    //     </div>

    //     {/* Modal for Mobile View */}
    //     <CommonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Schedule Request">
    //       {selectedWeekDay && <WeeklyAppointmentForm />}
    //     </CommonModal>
    //   </IonContent>l̥
    // </IonPage>
    <NexusPageLayout title="Tab 2">
      <SessionRequestInfoIntake></SessionRequestInfoIntake>
    </NexusPageLayout>
  );
};

export default Tab2;

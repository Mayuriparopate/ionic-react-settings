import NexusPageLayout from "../Layout/NexusPageLayout";
import { SessionRequestInfoIntake } from "../Layout/SessionRequesetInfoTake";

const Tab1: React.FC = () => {
  return (
    <NexusPageLayout title="Tab 1">
      <SessionRequestInfoIntake></SessionRequestInfoIntake>
    </NexusPageLayout>
  );
};

export default Tab1;

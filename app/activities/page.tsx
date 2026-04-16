import type { Metadata } from "next";
import ActivitiesPageBody from "@/components/activities/ActivitiesPageBody";
import truth from "@/client-business-truth.json";

export const metadata: Metadata = {
  title: "Activities | Vaalpenskraal Game Reserve",
  description: `Clay pigeon shooting, game drives, pool, boma, outlook point, and waterhole at Vaalpenskraal. ${truth.onEstateActivities.scheduling}`,
};

const ActivitiesPage = () => {
  return <ActivitiesPageBody />;
};

export default ActivitiesPage;

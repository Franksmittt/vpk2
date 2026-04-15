import HuntAudienceImmersion from "@/components/the-hunt/HuntAudienceImmersion";
import HuntBookingJourney from "@/components/the-hunt/HuntBookingJourney";
import HuntFieldImmersion from "@/components/the-hunt/HuntFieldImmersion";
import HuntFinale from "@/components/the-hunt/HuntFinale";
import HuntLeadBar from "@/components/the-hunt/HuntLeadBar";
import HuntPackagesEnquiry from "@/components/the-hunt/HuntPackagesEnquiry";
import HuntPulseStrip from "@/components/the-hunt/HuntPulseStrip";
import HuntQuarryStrip from "@/components/the-hunt/HuntQuarryStrip";
import HuntRhythmMosaic from "@/components/the-hunt/HuntRhythmMosaic";

const TheHuntPageBody = () => {
  return (
    <>
      <HuntLeadBar />
      <HuntPulseStrip />
      <HuntAudienceImmersion />
      <HuntBookingJourney />
      <HuntRhythmMosaic />
      <HuntFieldImmersion />
      <HuntQuarryStrip />
      <HuntPackagesEnquiry />
      <HuntFinale />
    </>
  );
};

export default TheHuntPageBody;

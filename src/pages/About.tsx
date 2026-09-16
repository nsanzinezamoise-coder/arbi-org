import CTASection from "@/components/home/CTASection";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import HistorySection from "@/components/sections/HistorySection";
import MissionVisionSection from "@/components/sections/MissionVisionSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ReachSection from "@/components/sections/ReachSection";
import ScriptureSection from "@/components/sections/ScriptureSection";
import StorySection from "@/components/sections/StorySection";
// import TeamSection from "@/components/sections/TeamSection";
import TimelineSection from "@/components/sections/TimelineSection";
import ValuesSection from "@/components/sections/ValuesSection";


const AboutUsPage = () => {
  return (
    <Layout>
      <HeroSection />
      <HistorySection />
      <StorySection />
      <MissionVisionSection />
      <TimelineSection />
      {/* <ReachSection /> */}
      {/* <TeamSection /> */}
      <ValuesSection />
      {/* <PartnersSection /> */}
      {/* <ScriptureSection /> */}
      <CTASection />
    </Layout>
  );
};

export default AboutUsPage;
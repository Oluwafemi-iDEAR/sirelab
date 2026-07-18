import Seo from "../../components/common/Seo";
import CtaBanner from "../../components/common/CtaBanner";
import HeroSlider from "../../components/home/HeroSlider";
import StatsSection from "../../components/home/StatsSection";
import ResearchFocus from "../../components/home/ResearchFocus";
import ResearchHighlights from "../../components/home/ResearchHighlights";
import UpcomingEventsSpotlight from "../../components/home/UpcomingEventsSpotlight";
import PublicationsSpotlight from "../../components/home/PublicationsSpotlight";

export default function Home() {
  return (
    <>
      <Seo
        title="SIRE — Sustainable Infrastructure Research"
        description="SIRE advances sustainability, resilient engineering, and STEM education through interdisciplinary research, teaching, and industry collaboration at Morgan State University."
      />

      <HeroSlider />
      <StatsSection />
      <ResearchFocus />
      <ResearchHighlights />
      <UpcomingEventsSpotlight />
      <PublicationsSpotlight />

      <CtaBanner
        heading="Join our research community"
        text="Explore assistantships, capstone projects, and industry collaborations."
        buttons={[{ label: "Contact us", href: "/contact" }]}
      />
    </>
  );
}

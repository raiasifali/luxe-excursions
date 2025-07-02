import AboutHero from "@/components/about/AboutHero";
import CraftingJourneys from "@/components/about/CraftingJourneys";
import CoreValues from "@/components/about/CoreValues";
import TeamSection from "@/components/about/TeamSection";
import ExcursionsSection from "@/components/about/ExcursionsSection";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <AboutHero />
      <CraftingJourneys />
      <CoreValues />
      <TeamSection />
      <ExcursionsSection />
    </div>
  );
};

export default About;
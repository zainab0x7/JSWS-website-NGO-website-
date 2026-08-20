import { Hero } from "@/components/home/Hero";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FutureProject } from "@/components/home/FutureProject";
import { AboutSection } from "@/components/home/AboutSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HealthAwareness } from "@/components/home/HealthAwareness";
import { GalleryHighlights } from "@/components/home/GalleryHighlights";
import { MapSection } from "@/components/home/MapSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProjectsSection />
      <ServicesSection />
      <FutureProject />
      <AboutSection />
      <StatsSection />
      <WhyChooseUs />
      <GalleryHighlights />
      <HealthAwareness />
      <MapSection />
    </div>
  );
}

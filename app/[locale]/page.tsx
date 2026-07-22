import { Hero } from "@/components/home/Hero";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { FutureProject } from "@/components/home/FutureProject";
import { AboutSection } from "@/components/home/AboutSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HealthAwareness } from "@/components/home/HealthAwareness";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ProjectsSection />
      <FutureProject />
      <AboutSection />
      <StatsSection />
      <WhyChooseUs />
      <HealthAwareness />
    </div>
  );
}

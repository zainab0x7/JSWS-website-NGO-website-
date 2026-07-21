import { Hero } from"@/components/home/Hero";
import { AboutSection } from"@/components/home/AboutSection";
import { ServicesSection } from"@/components/home/ServicesSection";
import { StatsSection } from"@/components/home/StatsSection";
import { WhyChooseUs } from"@/components/home/WhyChooseUs";
import { HealthAwareness } from"@/components/home/HealthAwareness";

export default function Home() {
 return (
 <div className="flex flex-col min-h-screen">
 <Hero />
 <AboutSection />
 <ServicesSection />
 <StatsSection />
 <WhyChooseUs />
 <HealthAwareness />
 </div>
 );
}

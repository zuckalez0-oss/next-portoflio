import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutMeSection } from "@/components/sections/AboutMeSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsGrid />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

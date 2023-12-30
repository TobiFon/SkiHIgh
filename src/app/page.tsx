import AboutSection from "@/components/AboutSection";
import AcademicPrograms from "@/components/AcademicPrograms";
import ContactSection from "@/components/ContactSection";
import Facilitites from "@/components/Facilitites";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import StaffSection from "@/components/StaffSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <AcademicPrograms />
      <StaffSection />
      <Gallery />
      <Facilitites />
      <ContactSection />
    </div>
  );
}

import AboutSection from "@/components/AboutSection";
import AcademicPrograms from "@/components/AcademicPrograms";
import Facilitites from "@/components/Facilitites";
import HeroSection from "@/components/HeroSection";
import StaffSection from "@/components/StaffSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <AcademicPrograms />
      <Facilitites />
      <StaffSection />
    </div>
  );
}

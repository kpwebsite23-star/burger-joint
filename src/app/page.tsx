import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import LocationHoursSection from "@/components/LocationHoursSection";
import AboutStorySection from "@/components/AboutStorySection";
import VipClubSection from "@/components/VipClubSection";
import StickyMobileOrderBar from "@/components/StickyMobileOrderBar";

export default function Home() {
  return (
    <main className="flex-1 pb-16 md:pb-0">
      <HeroSection />
      <MenuSection />
      <LocationHoursSection />
      <AboutStorySection />
      <VipClubSection />
      <StickyMobileOrderBar />
    </main>
  );
}

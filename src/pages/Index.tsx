
import Navbar from "@/components/Navbar";
import ProfileHeader from "@/components/ProfileHeader";
import AboutSection from "@/components/AboutSection";
import BusinessInfo from "@/components/BusinessInfo";
import ServicesSection from "@/components/ServicesSection";
import ExpertFeed from "@/components/ExpertFeed";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import OperatingHours from "@/components/OperatingHours";
import MrExperienceReport from "@/components/MrExperienceReport";
import StickyCTA from "@/components/StickyCTA";
import InstantMessagingBar from "@/components/InstantMessagingBar";
import TrustIcons from "@/components/TrustIcons";
import SEOHead from "@/components/SEOHead";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead />
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <ProfileHeader />
        <TrustIcons />
        
        {isMobile ? (
          // Mobile layout
          <div className="space-y-6">
            <MrExperienceReport />
            <AboutSection />
            <BusinessInfo />
            <ExpertFeed />
            <ServicesSection />
            <ReviewsSection />
            <FaqSection />
            <OperatingHours />
          </div>
        ) : (
          // Desktop layout
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <MrExperienceReport />
              <AboutSection />
              <ExpertFeed />
              <ServicesSection />
              <ReviewsSection />
              <FaqSection />
            </div>
            
            <div className="space-y-6">
              <BusinessInfo />
              <OperatingHours />
            </div>
          </div>
        )}
      </div>
      
      <StickyCTA />
      <InstantMessagingBar />
    </div>
  );
};

export default Index;


import Navbar from "@/components/Navbar";
import ProfileHeader from "@/components/ProfileHeader";
import AboutSection from "@/components/AboutSection";
import BusinessInfo from "@/components/BusinessInfo";
import ServicesSection from "@/components/ServicesSection";
import ExpertFeed from "@/components/ExpertFeed";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import OperatingHours from "@/components/OperatingHours";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <ProfileHeader />
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <AboutSection />
            <ServicesSection />
            <ExpertFeed />
            <ReviewsSection />
            <FaqSection />
          </div>
          
          <div className="space-y-6">
            <BusinessInfo />
            <OperatingHours />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

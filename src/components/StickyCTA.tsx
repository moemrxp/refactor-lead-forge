
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Phone, MessageSquare, FileText, Shield, CheckCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed ${isMobile ? 'bottom-0 left-0 right-0' : 'bottom-6 right-6'} z-50`}>
      {isMobile ? (
        // Mobile: Full-width bottom bar
        <div className="bg-white border-t shadow-lg p-4">
          <div className="flex space-x-2">
            <Button className="flex-1 bg-sky-600 hover:bg-sky-500 text-white">
              <Phone className="w-4 h-4 mr-1" />
              Call
            </Button>
            <Button className="flex-1 bg-[#0a2463] hover:bg-[#081d4f] text-white">
              <MessageSquare className="w-4 h-4 mr-1" />
              Message
            </Button>
            <Button className="flex-1 bg-green-600 hover:bg-green-500 text-white">
              <FileText className="w-4 h-4 mr-1" />
              Quote
            </Button>
          </div>
          <div className="text-center mt-2">
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-600">
              <span className="flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                Exclusive Leads
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-3 h-3 mr-1" />
                Verified Business
              </span>
            </div>
          </div>
        </div>
      ) : (
        // Desktop: Floating button
        <div className="bg-white rounded-lg shadow-xl border p-4 max-w-xs">
          <div className="text-center mb-3">
            <h4 className="font-semibold text-gray-900">Ready to get started?</h4>
            <p className="text-sm text-gray-600">Get your free quote today</p>
          </div>
          <div className="space-y-2">
            <Button className="w-full bg-green-600 hover:bg-green-500 text-white">
              <FileText className="w-4 h-4 mr-2" />
              Request Quote
            </Button>
            <div className="flex space-x-2">
              <Button variant="outline" className="flex-1">
                <Phone className="w-4 h-4 mr-1" />
                Call
              </Button>
              <Button variant="outline" className="flex-1">
                <MessageSquare className="w-4 h-4 mr-1" />
                Message
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 text-xs text-gray-500 mt-3">
            <span className="flex items-center">
              <Shield className="w-3 h-3 mr-1" />
              Exclusive
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-1" />
              Verified
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default StickyCTA;

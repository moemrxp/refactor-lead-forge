
import { Shield, Award, Users, Clock } from "lucide-react";

const TrustIcons = () => {
  const trustElements = [
    {
      icon: Shield,
      label: "Verified Business",
      description: "Background checked"
    },
    {
      icon: Award,
      label: "Exclusive Leads", 
      description: "No shared contacts"
    },
    {
      icon: Users,
      label: "Local Expert",
      description: "15+ years experience"
    },
    {
      icon: Clock,
      label: "Quick Response",
      description: "Same day quotes"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      {trustElements.map((element, index) => {
        const IconComponent = element.icon;
        return (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="text-sm font-medium text-gray-900">{element.label}</div>
            <div className="text-xs text-gray-600">{element.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TrustIcons;


import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

type ServiceCategory = {
  title: string;
  services: string[];
};

const serviceCategories: ServiceCategory[] = [
  {
    title: "Roofing",
    services: ["Gutter Installation or Replacement", "Roof Inspection", "Roof Installation or Replacement"]
  },
  {
    title: "Siding",
    services: ["Siding Installation"]
  },
  {
    title: "Doors & Windows",
    services: ["Window Installation"]
  }
];

const ServicesSection = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="border-b pb-3">
        <CardTitle className="text-lg font-semibold text-[#0a2463]">Services Provided</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-6">
          {serviceCategories.map((category, index) => (
            <div key={index} className={index !== 0 ? "pt-4 border-t" : ""}>
              <h3 className="font-medium text-gray-800 mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.services.map((service, serviceIndex) => (
                  <Badge key={serviceIndex} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 px-4 py-2 rounded-md">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicesSection;

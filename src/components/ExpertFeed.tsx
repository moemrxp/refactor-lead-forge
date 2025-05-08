
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const ExpertFeed = () => {
  // Sample project photos
  const projectImages = [
    "/lovable-uploads/ecec4951-18e3-49da-a29d-79d6f2ee784e.png",
    "/lovable-uploads/8d86d6e5-5dd5-40c7-9c99-b388a62cb213.png",
    "/lovable-uploads/01d8e6b3-d42a-40a8-85e9-b81d17b7ec41.png",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
  ];

  return (
    <Card className="mb-6">
      <CardHeader className="border-b pb-3">
        <CardTitle className="text-lg font-semibold text-[#0a2463]">Expert's Feed</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {projectImages.map((image, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden">
              <img 
                src={image} 
                alt={`Project image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Button variant="outline" className="border-[#0a2463] text-[#0a2463] hover:bg-[#0a2463] hover:text-white">
            See All Photos
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpertFeed;


import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const AboutSection = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="border-b pb-3">
        <CardTitle className="text-lg font-semibold text-[#0a2463]">About</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-gray-700 leading-relaxed">
          At Future Remodeling, we believe that by transforming our homes, we can transform our lives. 
          Experience remodeling like never before. From the first consultation to the final reveal, 
          we make every step effortless and transparent. Forward-thinking is part of our DNA, and 
          we apply it to everything we do to ensure results exceed expectations – because we believe 
          your home's exterior should be as innovative as you are. Discover how we're revolutionizing 
          the future of home exteriors!
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutSection;


import { Phone, MessageSquare, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "./ui/separator";
const ProfileHeader = () => {
  const isMobile = useIsMobile();
  return <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      {/* Mobile layout */}
      {isMobile ? <>
          {/* Centered company logo and information */}
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-28 h-28 rounded-full border-4 border-[#0a2463]">
              <AvatarImage src="/lovable-uploads/26be86e9-110b-488c-9811-b7b83d76afba.png" alt="Future Remodeling Logo" className="object-cover" />
              <AvatarFallback className="bg-black text-white text-3xl font-bold">FR</AvatarFallback>
            </Avatar>
            
            <div className="mt-4">
              <div className="flex justify-center items-center">
                <h1 className="text-2xl font-bold text-[#0a2463] flex items-center">
                  Future Remodeling
                  <span className="ml-2 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                  </span>
                </h1>
              </div>
              
              <div className="flex justify-center items-center mt-2">
                <div className="flex items-center text-amber-600 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                  15 Years of Experience in Roofing
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="mt-6 space-y-3">
            <Button variant="default" size="lg" className="w-full text-white bg-sky-600 hover:bg-sky-500">
              <Phone className="mr-2 h-5 w-5" /> Call Now
            </Button>
            <Button variant="default" size="lg" className="w-full bg-[#0a2463] hover:bg-[#081d4f] text-white">
              <MessageSquare className="mr-2 h-5 w-5" /> Instant Message
            </Button>
            <Button variant="default" size="lg" className="w-full bg-[#0a2463] hover:bg-[#081d4f] text-white">
              <FileText className="mr-2 h-5 w-5" /> Request a Quote
            </Button>
          </div>
        </> : <>
          {/* Desktop layout - keeping as is */}
          <div className="flex items-center gap-6 mb-6">
            <Avatar className="w-28 h-28 rounded-full border-4 border-black">
              <AvatarImage src="/lovable-uploads/26be86e9-110b-488c-9811-b7b83d76afba.png" alt="Future Remodeling Logo" className="object-cover" />
              <AvatarFallback className="bg-black text-white text-3xl font-bold">FR</AvatarFallback>
            </Avatar>
            
            <div>
              <div className="flex items-center flex-wrap">
                <h1 className="text-3xl font-bold text-[#0a2463] flex items-center">
                  Future Remodeling
                  <span className="ml-2 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                  </span>
                </h1>
                
                <div className="flex items-center ml-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-500">
                    <path fillRule="evenodd" d="M11.484 2.17a.75.75 0 011.032 0 11.209 11.209 0 007.877 3.08.75.75 0 01.722.515 12.74 12.74 0 01.635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 01-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 01.722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM12 15a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75H12z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-amber-700 font-medium">15 Years of Experience</span>
                </div>
              </div>
              
              <p className="text-gray-600 mt-2">Premier home renovation and remodeling services</p>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          {/* CTA section for desktop */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Contact Us Today</h3>
            <div className="flex flex-col space-y-3">
              <Button variant="default" size="lg" className="w-full bg-sky-600 hover:bg-sky-500">
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </Button>
              <Button variant="default" size="lg" className="w-full bg-[#0a2463] hover:bg-[#081d4f]">
                <MessageSquare className="mr-2 h-5 w-5" /> Instant Message
              </Button>
              <Button variant="default" size="lg" className="w-full bg-[#0a2463] hover:bg-[#081d4f]">
                <FileText className="mr-2 h-5 w-5" /> Request a Quote
              </Button>
            </div>
          </div>
        </>}
    </div>;
};
export default ProfileHeader;

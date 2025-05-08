
import { Phone, MessageSquare, FileText } from "lucide-react";
import { Button } from "./ui/button";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8 p-6 md:p-8 bg-white rounded-lg shadow-sm mb-6">
      <div className="flex flex-col items-center mb-6 md:mb-0">
        <div className="bg-black rounded-full p-1 mb-3">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-black flex items-center justify-center border-4 border-black overflow-hidden">
            <div className="text-white text-5xl font-bold flex items-center justify-center">
              <img src="/lovable-uploads/26be86e9-110b-488c-9811-b7b83d76afba.png" alt="Future Remodeling Logo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-[#0a2463] flex items-center">
          Future Remodeling
          <span className="ml-2 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
          </span>
        </h1>
        <div className="flex items-center mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-500">
            <path fillRule="evenodd" d="M11.484 2.17a.75.75 0 011.032 0 11.209 11.209 0 007.877 3.08.75.75 0 01.722.515 12.74 12.74 0 01.635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 01-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 01.722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM12 15a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75H12z" clipRule="evenodd" />
          </svg>
          <span className="ml-2 text-amber-700 font-medium">15 Years of Experience in Roofing</span>
        </div>
      </div>
      
      <div className="w-full md:flex-grow flex flex-col space-y-3">
        <Button className="w-full bg-[#3e92cc] hover:bg-[#2d7eb9] flex items-center justify-center py-6">
          <Phone className="mr-2 h-5 w-5" /> Call Now
        </Button>
        <Button className="w-full bg-[#0a2463] hover:bg-[#081d4f] flex items-center justify-center py-6">
          <MessageSquare className="mr-2 h-5 w-5" /> Chat Now
        </Button>
        <Button className="w-full bg-[#0a2463] hover:bg-[#081d4f] flex items-center justify-center py-6">
          <FileText className="mr-2 h-5 w-5" /> Request a Quote
        </Button>
      </div>
    </div>
  );
};

export default ProfileHeader;

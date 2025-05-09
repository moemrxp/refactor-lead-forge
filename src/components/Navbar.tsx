import { Search } from "lucide-react";
import { Button } from "./ui/button";
const Navbar = () => {
  return <nav className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-[#0a2463]">
          <span>mr<span className="text-[#3e92cc]">xp</span></span>
        </div>
        <div className="hidden md:flex relative">
          
          
        </div>
      </div>
      <div className="flex items-center space-x-3">
        
        
        <Button className="bg-[#3e92cc] hover:bg-[#2d7eb9]">Become an Expert</Button>
      </div>
    </nav>;
};
export default Navbar;
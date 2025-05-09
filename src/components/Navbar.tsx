import { Search } from "lucide-react";
import { Button } from "./ui/button";
const Navbar = () => {
  return <nav className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-[#0a2463]">
          
        </div>
        <div className="hidden md:flex relative">
          
          
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-xs text-gray-500 mr-2 text-left">
          Powered by <span className="font-bold text-[#0a2463]">mr<span className="text-[#3e92cc]">xp</span></span>
        </span>
        
      </div>
    </nav>;
};
export default Navbar;
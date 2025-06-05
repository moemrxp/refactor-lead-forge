import { Search } from "lucide-react";
import { Button } from "./ui/button";
const Navbar = () => {
  return <nav className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-gray-500">
          <span className="text-xs font-semibold md:text-sm px-0 text-right">Powered by</span>
          <img src="/lovable-uploads/a7a109b2-0d70-48a1-8036-8871b08a4c90.png" alt="mrxp logo" className="ml-1 h-8 md:h-10" />
        </div>
        <div className="hidden md:flex relative">
          
          
        </div>
      </div>
      <div className="flex items-center space-x-3">
        
      </div>
    </nav>;
};
export default Navbar;
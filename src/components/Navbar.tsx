
import { Search } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-[#0a2463]">
          <span>mr<span className="text-[#3e92cc]">xp</span></span>
        </div>
        <div className="hidden md:flex relative">
          <input
            type="text"
            placeholder="Search for a service..."
            className="pl-3 pr-10 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-64"
          />
          <div className="bg-[#3e92cc] text-white p-2 rounded-r-md flex items-center justify-center">
            <Search size={20} />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Button variant="outline" className="hidden md:block">Sign Up</Button>
        <Button variant="outline" className="hidden md:block">Log In</Button>
        <Button className="bg-[#3e92cc] hover:bg-[#2d7eb9]">Become an Expert</Button>
      </div>
    </nav>
  );
};

export default Navbar;

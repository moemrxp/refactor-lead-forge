
import { Badge } from "./ui/badge";
import { Shield, CheckCircle } from "lucide-react";

const VerifiedBadge = () => {
  return (
    <div className="flex items-center space-x-2">
      <Badge className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer px-3 py-1">
        <Shield className="w-3 h-3 mr-1" />
        Verified by MrXP
      </Badge>
      <div className="flex items-center text-green-600">
        <CheckCircle className="w-4 h-4 mr-1" />
        <span className="text-sm font-medium">Licensed & Insured</span>
      </div>
    </div>
  );
};

export default VerifiedBadge;

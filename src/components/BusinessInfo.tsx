
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Users, Globe, FileText } from "lucide-react";

const BusinessInfo = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="border-b pb-3">
        <CardTitle className="text-lg font-semibold text-[#0a2463]">Business Info</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          <div className="flex">
            <div className="text-blue-500 mr-4 mt-1">
              <MapPin size={18} />
            </div>
            <div>
              <div className="font-medium text-gray-900">Business Address:</div>
              <div className="text-gray-600">37a Woodbine Street, Bergenfield, New Jersey 07621, United States</div>
            </div>
          </div>

          <div className="flex">
            <div className="text-blue-500 mr-4 mt-1">
              <Users size={18} />
            </div>
            <div>
              <div className="font-medium text-gray-900">Company Size:</div>
              <div className="text-gray-600">11-50 employees</div>
            </div>
          </div>
          
          <div className="flex">
            <div className="text-blue-500 mr-4 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 8l6 6 6-6"/>
                <path d="M12 2v12"/>
                <path d="M5 14h14"/>
              </svg>
            </div>
            <div>
              <div className="font-medium text-gray-900">Languages:</div>
              <div className="text-gray-600">English, Spanish, Russian</div>
            </div>
          </div>

          <div className="flex">
            <div className="text-blue-500 mr-4 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-gray-900">Accepted Payments:</div>
              <div className="text-gray-600">Credit/Debit, Checks</div>
            </div>
          </div>

          <div className="flex">
            <div className="text-blue-500 mr-4 mt-1">
              <Globe size={18} />
            </div>
            <div>
              <div className="font-medium text-gray-900">Website:</div>
              <a href="https://futureremodeling.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">futureremodeling.com</a>
            </div>
          </div>

          <div className="flex">
            <div className="text-blue-500 mr-4 mt-1">
              <FileText size={18} />
            </div>
            <div>
              <div className="font-medium text-gray-900">License:</div>
              <div className="text-gray-600">13VH13329600</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessInfo;

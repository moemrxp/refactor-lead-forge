import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Shield, Calendar, MapPin, Star, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
const MrExperienceReport = () => {
  return <Card className="mb-6 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
      <CardHeader className="border-b border-blue-200 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-[#0a2463] flex items-center">
            <Shield className="mr-2 h-6 w-6 text-blue-600" />
            Mr. Experience Report
          </CardTitle>
          <Badge className="bg-green-100 text-green-800 border-green-300">
            <CheckCircle className="w-3 h-3 mr-1" />
            Verified
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column - Key Stats */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-blue-600 mr-3" />
              <div>
                <div className="font-semibold text-gray-900">15 Years in Business</div>
                <div className="text-sm text-gray-600">Since 2009</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-green-600 mr-3" />
              <div>
                <div className="font-semibold text-gray-900">Licensed & Insured</div>
                <div className="text-sm text-gray-600">License #13VH13329600</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-purple-600 mr-3" />
              <div>
                <div className="font-semibold text-gray-900">Service Area</div>
                <div className="text-sm text-gray-600">Bergen County, NJ</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-500 mr-3" />
              <div>
                <div className="font-semibold text-gray-900">Customer Rating</div>
                <div className="text-sm text-gray-600">No reviews yet</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Recent Activity */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Recent Activity</h4>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-lg border">
                <div className="font-medium text-sm">Roof Installation</div>
                <div className="text-xs text-gray-500">Bergenfield, NJ • 2 weeks ago</div>
              </div>
              <div className="p-3 bg-white rounded-lg border">
                <div className="font-medium text-sm">Gutter Replacement</div>
                <div className="text-xs text-gray-500">Teaneck, NJ • 1 month ago</div>
              </div>
              <div className="p-3 bg-white rounded-lg border">
                <div className="font-medium text-sm">Siding Installation</div>
                <div className="text-xs text-gray-500">Hackensack, NJ • 2 months ago</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-blue-200">
          
        </div>
      </CardContent>
    </Card>;
};
export default MrExperienceReport;

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Clock } from "lucide-react";

const daySchedule = [
  { day: "Monday", hours: "8:00 AM - 6:00 PM" },
  { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
  { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
  { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
  { day: "Friday", hours: "8:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const OperatingHours = () => {
  const today = new Date().getDay(); // 0 for Sunday, 1 for Monday, ...
  const adjustedIndex = today === 0 ? 6 : today - 1; // Adjust for our array (0 for Monday, 6 for Sunday)

  return (
    <Card className="mb-6">
      <CardHeader className="border-b pb-3">
        <CardTitle className="text-lg font-semibold text-[#0a2463]">Hours of Operation</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-2">
          {daySchedule.map((schedule, index) => (
            <div 
              key={schedule.day} 
              className={`flex justify-between py-1.5 ${index === adjustedIndex ? "bg-blue-50 rounded-md px-2 font-medium" : ""}`}
            >
              <div className="flex items-center">
                {index === adjustedIndex && <Clock size={16} className="mr-2 text-blue-600" />}
                <span className={index === adjustedIndex ? "text-blue-700" : "text-gray-700"}>
                  {schedule.day}
                </span>
              </div>
              <span className={index === adjustedIndex ? "text-blue-700" : "text-gray-600"}>
                {schedule.hours}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OperatingHours;

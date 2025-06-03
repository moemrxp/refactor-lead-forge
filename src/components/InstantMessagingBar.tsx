
import { useState } from "react";
import { Button } from "./ui/button";
import { MessageSquare, X, Send } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";

const InstantMessagingBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message
      console.log("Sending message:", message);
      setMessage("");
      // Show success toast or handle response
    }
  };

  return (
    <>
      {/* Floating Message Button */}
      {!isOpen && (
        <div className="fixed bottom-24 right-6 z-40">
          <Button
            onClick={() => setIsOpen(true)}
            className="rounded-full w-14 h-14 bg-green-600 hover:bg-green-500 text-white shadow-xl"
          >
            <MessageSquare className="w-6 h-6" />
          </Button>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">!</span>
          </div>
        </div>
      )}

      {/* Message Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-2rem)]">
          <Card className="shadow-2xl">
            <div className="bg-green-600 text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-300 rounded-full mr-2"></div>
                  <span className="font-medium">Message Future Remodeling</span>
                </div>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-green-700"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 max-h-60 overflow-y-auto">
              <div className="bg-white rounded-lg p-3 mb-3 shadow-sm">
                <p className="text-sm text-gray-700">
                  Hi! I'm here to help with your roofing project. What can I assist you with today?
                </p>
                <span className="text-xs text-gray-500">Just now</span>
              </div>
            </div>
            
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button 
                  onClick={handleSendMessage}
                  size="sm" 
                  className="bg-green-600 hover:bg-green-500"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Usually responds within minutes
              </p>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default InstantMessagingBar;


import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { MessageSquare, Star } from "lucide-react";
import { toast } from "./ui/sonner";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "./ui/dialog";

type ReviewFormValues = {
  name: string;
  rating: number;
  comment: string;
}

const ReviewsSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  
  const form = useForm<ReviewFormValues>({
    defaultValues: {
      name: "",
      rating: 0,
      comment: ""
    }
  });

  const handleSubmit = (data: ReviewFormValues) => {
    // In a real application, this would send the review to a backend
    console.log("Review submitted:", { ...data, rating: selectedRating });
    
    toast.success("Thank you for your review!");
    setDialogOpen(false);
    setSelectedRating(0);
    form.reset();
  };

  return (
    <Card className="mb-6">
      <CardHeader className="border-b pb-3">
        <CardTitle className="text-lg font-semibold text-[#0a2463]">Customer Reviews</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex flex-col items-center mb-6">
          <span className="text-6xl font-bold text-[#0a2463]">0.0</span>
          <div className="flex items-center my-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-500">0 reviews</span>
        </div>

        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center">
              <div className="flex items-center mr-2">
                {Array(rating).fill(null).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <Progress value={0} className="h-2 flex-grow" />
              <span className="ml-2 text-gray-600 w-4 text-right">0</span>
            </div>
          ))}
        </div>

        <Button 
          onClick={() => setDialogOpen(true)} 
          className="w-full mt-6 bg-[#3e92cc] hover:bg-[#3e92cc]/90"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Write a Review
        </Button>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-[#0a2463]">Share your experience</DialogTitle>
            </DialogHeader>
            
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Rating</label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-8 w-8 cursor-pointer ${
                        selectedRating >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                      onClick={() => setSelectedRating(star)}
                    />
                  ))}
                </div>
              </div>
              
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input {...form.register("name")} placeholder="Enter your name" />
                </FormControl>
              </FormItem>
              
              <FormItem>
                <FormLabel>Your Review</FormLabel>
                <FormControl>
                  <Textarea 
                    {...form.register("comment")}
                    placeholder="Share your experience with this business"
                    className="min-h-[100px]"
                  />
                </FormControl>
              </FormItem>

              <DialogFooter className="sm:justify-end">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => {
                    setDialogOpen(false);
                    setSelectedRating(0);
                    form.reset();
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={selectedRating === 0}
                  className="bg-[#3e92cc] hover:bg-[#3e92cc]/90"
                >
                  Submit Review
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ReviewsSection;

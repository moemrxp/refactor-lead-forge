
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What makes MrXP different from other platforms?",
    answer: "MrXP connects homeowners directly with qualified local experts for home improvement and repair projects. We carefully vet all professionals on our platform to ensure quality service, transparent pricing, and reliable outcomes."
  },
  {
    question: "How do you screen your professionals?",
    answer: "We verify licenses, insurance, and credentials, conduct background checks, and review past work history and customer feedback to ensure only qualified professionals join our platform."
  },
  {
    question: "What happens if I'm not satisfied with the work?",
    answer: "Customer satisfaction is our priority. If you're not happy with the work performed, we offer a satisfaction guarantee and will work with you and the professional to resolve any issues."
  }
];

const FaqSection = () => {
  return (
    <Card className="mb-6">
      <CardHeader className="border-b pb-3">
        <CardTitle className="text-lg font-semibold text-[#0a2463]">Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-gray-800">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FaqSection;

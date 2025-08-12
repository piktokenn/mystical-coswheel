import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What's the warranty on HZEBIKES bikes?",
      answer: "All HZEBIKES bikes come with a 2-year comprehensive warranty covering the frame, motor, and battery. We also offer extended warranty options for additional peace of mind."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days within the continental US. Express shipping options are available at checkout for faster delivery."
    },
    {
      question: "Can I test ride before buying?",
      answer: "Yes! We have test ride locations in major cities across the US. Visit our website to find the nearest test ride location and book your appointment."
    },
    {
      question: "What's the maximum weight capacity?",
      answer: "Our bikes are designed to support riders up to 300 lbs (136 kg) while maintaining optimal performance and safety standards."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we offer 0% APR financing for up to 12 months through our partner Affirm. Monthly payment options start as low as $83/month."
    },
    {
      question: "Are replacement parts available?",
      answer: "Absolutely! We stock all replacement parts and accessories. Most parts ship within 24-48 hours, and we provide detailed installation guides."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about HZEBIKES electric bikes
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
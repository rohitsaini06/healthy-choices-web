
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What is substance abuse?",
      answer: "Substance abuse refers to the harmful or hazardous use of psychoactive substances, including alcohol and illicit drugs. It can lead to dependence syndrome - a cluster of behavioral, cognitive, and physiological phenomena that develop after repeated substance use."
    },
    {
      question: "How can I tell if someone I care about has a substance abuse problem?",
      answer: "Signs may include changes in behavior, mood swings, secretive actions, neglecting responsibilities, financial problems, changes in social circles, physical health issues, defensiveness when substance use is mentioned, and increasing tolerance to the substance."
    },
    {
      question: "Can substance abuse be prevented?",
      answer: "Yes, substance abuse can often be prevented through education, developing healthy coping skills, building strong support systems, early intervention for mental health issues, setting clear boundaries, and seeking professional help when needed."
    },
    {
      question: "How do I talk to someone about their substance use?",
      answer: "Approach the conversation with compassion, not judgment. Choose a private moment when they're sober. Express specific concerns using 'I' statements rather than accusations. Listen actively, offer support, and be prepared with resources for help."
    },
    {
      question: "Where can I find help for substance abuse?",
      answer: "Help is available through national helplines, local treatment centers, healthcare providers, support groups like AA or NA, school or workplace counseling programs, and community mental health services."
    }
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white" id="faq">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-prevention-darkPurple sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg">
            Find answers to common questions about substance abuse and prevention.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-prevention-darkPurple">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

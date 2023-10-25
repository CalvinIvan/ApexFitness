import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

export default function FAQ() {
  const faq = [
    {
      question:
        "What types of memberships do you offer, and what are the associated costs?",
      answer:
        "We offer various membership options, including monthly, quarterly, and annual plans. The costs vary based on the type and duration of the membership. For detailed pricing information, please visit our Memberships page or contact our front desk.",
    },
    {
      question:
        "Do you provide personal training sessions, and how can I schedule one?",
      answer:
        "Yes, we offer personalized training sessions with our certified trainers. To schedule a personal training session, you can visit the front desk, call our gym, or use our online booking system. Our trainers will work with you to create a tailored fitness plan based on your goals and preferences.",
    },

    {
      question:
        "What safety measures are in place, especially considering the ongoing health situation?",
      answer:
        "Your safety is our top priority. We have implemented stringent health and hygiene protocols in line with the latest guidelines from health authorities. These measures include frequent sanitization of equipment, social distancing practices, mandatory mask policies in common areas, and limited class sizes. Please visit our Safety Measures page to learn more about the precautions we are taking to ensure a safe gym environment.",
    },
  ];
  return (
    <section className="mt-[-15rem] flex h-[50rem] w-3/4 flex-col items-center justify-center sm:pt-0">
      <h1 className="mb-10 text-center text-3xl font-semibold sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl ">
        Frequently Asked Questions (FAQ)
      </h1>
      <Accordion
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 1,
                },
                opacity: {
                  easings: "ease",
                  duration: 1,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.25,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.3,
                },
              },
            },
          },
        }}
      >
        <AccordionItem key="1" aria-label="Accordion 1" title={faq[0].question}>
          {faq[0].answer}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title={faq[1].question}>
          {faq[1].answer}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title={faq[2].question}>
          {faq[2].answer}
        </AccordionItem>
      </Accordion>
    </section>
  );
}

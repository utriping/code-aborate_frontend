import React from "react";
import {
  Accordian,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
const FAQs = () => {
  const items = [
    {
      question: "What is Code-Aborate?",
      answer:
        "Code-Aborate is a collaborative coding platform that allows developers to connect, practice DSA, track progress through leaderboards, and communicate in real time while learning together.",
    },
    {
      question: "How does the leaderboard work?",
      answer:
        "The leaderboard ranks users based on their coding activity, consistency, and problem-solving performance, helping create a healthy competitive environment and track improvement over time.",
    },
    {
      question: "Can I collaborate with other developers on the platform?",
      answer:
        "Yes. Code-Aborate includes chat and collaboration features that allow users to discuss problems, share ideas, and learn together in a community-driven environment.",
    },
    {
      question: "Who is Code-Aborate for?",
      answer:
        "It is designed for students, beginners, and aspiring developers who want to improve their coding skills, stay consistent, and grow through peer learning and competition.",
    },
  ];
  return (
    <section className='w-full w-[50%] p-7 mt-5 '>
      <div className=" text-[#B10F2E]">
        <h2 className=" text-4xl md:text-6xl font-bold text-[#B10F2E] mb-5 text-center">
          FAQs
        </h2>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="border-2 p-3"
        >
          {items.map((element, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{element.question}</AccordionTrigger>
              <AccordionContent key={Math.random()}>
                {element.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;

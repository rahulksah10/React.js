import React, { useState } from "react";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces. It lets you create reusable UI components.",
    },
    {
      question: "What are React Hooks?",
      answer:
        "Hooks let you use state and other React features in functional components. Examples include useState and useEffect.",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension that allows mixing HTML-like syntax with JavaScript logic in React.",
    },
    {
      question: "What is the Virtual DOM?",
      answer:
        "The Virtual DOM is a lightweight representation of the real DOM that React uses to optimize updates efficiently.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-100 to-pink-100 font-poppins">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-xl">
        <h2 className="text-4xl font-semibold text-center mb-6 text-gray-800">
          💬 FAQ - Accordion
        </h2>

        {faqs.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 mb-4 pb-3 transition-all duration-300"
          >
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-blue-600"
            >
              <span className="font-medium">{item.question}</span>
              <span className="text-xl font-bold text-blue-500">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;

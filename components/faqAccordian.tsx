"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What services do you offer?",
      answer:
        "We offer comprehensive web development services including custom web applications, e-commerce solutions, Progressive Web Apps (PWAs), API development and integration, UI/UX design, and consulting services. Our team specializes in creating scalable, high-performance web solutions tailored to your business needs.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border-1"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300"
              >
                <span className="text-lg pr-8">
                  {faq.question}
                </span>
                <div className="hover:cursor-pointer transition-transform duration-300">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-purple-100 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

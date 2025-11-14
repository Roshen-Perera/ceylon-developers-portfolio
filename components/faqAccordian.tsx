"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { H4 } from "./typography";

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
    {
      question: "Do you offer website redesign services?",
      answer:
        "Yes! We provide complete website redesign services including UI/UX audit, modern responsive design implementation, performance optimization, accessibility improvements, and SEO enhancement. We'll work closely with you to transform your existing website into a modern, user-friendly experience while maintaining your brand identity.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use cutting-edge technologies including Next.js for server-side rendering and static site generation, React for dynamic user interfaces, Tailwind CSS for responsive styling, TypeScript for type-safe code, Node.js for backend services, and various cloud platforms like Vercel, AWS, and Google Cloud for deployment and hosting.",
    },
    {
      question: "Can you build a custom web application?",
      answer:
        "Absolutely! We specialize in building custom web applications from scratch. Whether you need a SaaS platform, dashboard, content management system, or any other web-based solution, we'll architect and develop a robust application that meets your specific requirements with clean code and best practices.",
    },
    {
      question: "Do you offer maintenance and support?",
      answer:
        "Yes, we provide ongoing maintenance and support packages including regular updates, security patches, performance monitoring, bug fixes, feature enhancements, and 24/7 technical support. We ensure your web application runs smoothly and stays up-to-date with the latest technologies and security standards.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-12 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-(image:--faq-card-background) rounded-[30px] overflow-hidden border"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300"
              >
                <H4 className="pr-8">{faq.question}</H4>
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
                <div className="px-6 pb-5 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

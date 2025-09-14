import React, { useState } from 'react';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First item expanded by default

  const faqData = [
    {
      question: "What is Seven Figure Creators all about?",
      answer: "We help creators and business owners just LinkedIn to get their leads and make more money. Whether you're just starting or already making some cash, we've got a program for you."
    },
    {
      question: "Do I need any experience with LinkedIn?",
      answer: "No previous experience is required! Our programs are designed for all skill levels, from complete beginners to advanced users."
    },
    {
      question: "How soon can I see results?",
      answer: "Results vary depending on your commitment and implementation, but many students start seeing improvements within the first few weeks of applying our strategies."
    },
    {
      question: "What kind of support will I get?",
      answer: "You'll get comprehensive support including live coaching calls, community access, direct messaging support, and step-by-step guidance throughout your journey."
    },
    {
      question: "How much time do I need to commit each week?",
      answer: "We recommend dedicating 5-10 hours per week to get the best results, but our flexible program allows you to work at your own pace."
    },
    {
      question: "Can I join more than one program? Where should I start?",
      answer: "Yes, you can join multiple programs, but we recommend starting with our foundational course that matches your current experience level."
    },
    {
      question: "What if I'm a business owner and not a creator?",
      answer: "Our strategies work equally well for business owners! Many of our successful students are entrepreneurs and business owners who use LinkedIn to generate leads and grow their businesses."
    },
    {
      question: "What happens after I finish the free course?",
      answer: "After completing the free course, you'll have the option to join our advanced paid programs for deeper training and ongoing support."
    },
    {
      question: "How do I know which program is right for me?",
      answer: "We provide a detailed assessment and consultation to help you choose the program that best fits your goals, experience level, and business needs."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <div className="relative inline-block">
            <h2 style={{fontFamily:"poppins"}} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
              <i>Frequently asked questions</i>
            </h2>
            {/* Decorative Element */}
            <div 
              className="absolute -top-4 -right-6 w-12 h-8 opacity-70 -z-10"
              style={{
                background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                borderRadius: '50% 30% 70% 40%',
              }}
            ></div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-700 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-blue-700 transform transition-transform duration-200 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
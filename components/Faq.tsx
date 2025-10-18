"use client";

import { useState } from "react";

const faqData = [
  {
    question: "How long does the server take to deploy?",
    answer: "Its instant! With our modern billing portal and fast uplink, your server is deployed upon purchase, and will take less than five minutes to install. Now that's speedy!"
  },
  {
    question: "Can I purchase dedicated IPs?",
    answer: "Every server comes default with a shared IP and port, but you can purchase a dedicated IP at a cost of $2.50/mo. After purchase, open a support ticket, and we'll allocate it to your server."
  },
  {
    question: "Can transfer my world to Sour Host?",
    answer: "Yes! You can easily transfer your server with our server importer feature. Enjoy more power but keep your gameplay and data!"
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-20 max-w-6xl mx-auto my-10 mb-40">
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-300">Find the answer to all the questions we most commonly get.</p>
        </div>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="max-w-4xl mx-auto text-white rounded-lg p-4 bg-gray-800 transition"
          >
            <button
              className="cursor-pointer w-full flex justify-between items-center text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-bold text-xl">{faq.question}</span>
              <span
                className={`text-[#00b72f] transform transition-transform duration-300 text-4xl ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-lg text-white">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}



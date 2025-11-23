
import React, { useState } from "react";

export default function FaqPage() {
    const faqs = [
        {
            question: "What services does NexPipe Tech offer?",
            answer:
                "We provide leak detection, pipe installation, drain cleaning, water heater installation, maintenance, and full plumbing repairs for residential and commercial clients.",
        },
        {
            question: "Do you offer emergency plumbing services?",
            answer:
                "Yes, we provide 24/7 emergency plumbing support for urgent leaks, burst pipes, clogged drains, and other critical issues.",
        },
        {
            question: "How soon can a technician arrive?",
            answer:
                "Our response time is typically within 30–60 minutes depending on your location and service availability.",
        },
        {
            question: "Are your plumbers certified?",
            answer:
                "Yes, all NexPipe Tech technicians are fully trained, licensed, and certified to handle professional plumbing work.",
        },
        {
            question: "Do you provide warranty for your services?",
            answer:
                "Absolutely. We offer service warranties depending on the type of work completed. All installations and repairs come with quality guarantees.",
        },
        {
            question: "Which areas do you serve?",
            answer:
                "We serve Nairobi and surrounding regions. Contact us directly to confirm service availability in your area.",
        },
        {
            question: "Do you offer free quotes?",
            answer:
                "Yes! We provide free consultations and estimates for all plumbing services.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-100 py- md:px-20">
            <h1 className="text-4xl font-normal botext-center text-blue-700 mb-6">Frequently Asked Questions</h1>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-xl p-5 border border-gray-200 cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-gray-800">{faq.question}</h2>
                            <span className="text-2xl text-blue-600">{openIndex === index ? "−" : "+"}</span>
                        </div>

                        {openIndex === index && (
                            <p className="mt-3 text-gray-600">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}


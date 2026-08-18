import React, { useState } from "react";
import { Sparkles, ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

const faqs = [
    {
        question: "How long does a custom website or web application project take?",
        answer: "Most startup and business website projects are delivered within 1 to 2 weeks. Full-stack web applications with Spring Boot, Node.js, and custom AI/RAG backend take around 2 to 4 weeks depending on scope.",
    },
    {
        question: "Will I own 100% of the source code and design assets?",
        answer: "Yes, absolutely! Upon final delivery, you receive full 100% ownership of all source code repositories, design files, custom 3D assets, and deployment configurations without any ongoing licensing fees.",
    },
    {
        question: "What technology stack do you use?",
        answer: "Our core stack includes React 19, Next.js, TypeScript, Tailwind CSS, WebGL/OGL for 3D visual graphics, Node.js, Express, Java Spring Boot, Spring AI & RAG, Docker, Kubernetes, and PostgreSQL/MongoDB.",
    },
    {
        question: "Can you build custom 3D interactive graphics for my website?",
        answer: "Yes! We specialize in ReactBits-style 3D interactive cursor physics, WebGL shader background canvases, dynamic specular lights, and tactile glassmorphic cards that wow your site visitors.",
    },
    {
        question: "How do we get started on a project?",
        answer: "You can click 'Start a Conversation' to send us your details via form, chat with us directly on WhatsApp (+91 7367055728), or call us directly. We will schedule a quick call and provide a custom proposal within 2 hours!",
    },
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 sm:py-28 relative bg-[#050507] border-t border-white/10">
            <div className="mx-auto w-[92%] max-w-5xl relative z-10">
                <div className="mb-14 text-center max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300 mb-4 backdrop-blur-md">
                        <HelpCircle className="h-3.5 w-3.5" />
                        <span>Got Questions? We Have Answers</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                        Frequently asked questions.
                    </h2>

                    <p className="mt-4 text-base text-white/60">
                        Everything you need to know about working with PRAVORA Digital Studio.
                    </p>
                </div>

                {/* 3D Glass Accordion List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`overflow-hidden rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
                                    isOpen
                                        ? "border-cyan-400/50 bg-gradient-to-r from-cyan-500/10 via-black/90 to-indigo-500/10 shadow-[0_10px_30px_rgba(34,211,238,0.15)]"
                                        : "border-white/15 bg-white/5 hover:border-white/30"
                                }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                                >
                                    <span className="text-base sm:text-lg font-bold text-white pr-4">
                                        {faq.question}
                                    </span>
                                    <div
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-transform duration-300 ${
                                            isOpen ? "rotate-180 bg-cyan-400 text-black border-cyan-400" : "text-white/70"
                                        }`}
                                    >
                                        <ChevronDown className="h-4 w-4" />
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="border-t border-white/10 px-5 sm:px-6 pb-6 pt-4 text-sm sm:text-base leading-relaxed text-white/70 animate-in fade-in">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Quick Help Footer Pill */}
                <div className="mt-12 text-center">
                    <p className="text-xs text-white/50">
                        Have a custom question not listed here?{" "}
                        <a
                            href="https://wa.me/917367055728?text=Hi%20PRAVORA,%20I%20have%20a%20question."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 font-bold hover:underline inline-flex items-center gap-1"
                        >
                            <MessageSquare className="h-3.5 w-3.5" />
                            Chat with Founder on WhatsApp →
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default FAQ;

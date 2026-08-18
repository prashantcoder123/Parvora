import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Phone, Sparkles, Bot, Check, ArrowRight } from "lucide-react";

const initialMessages = [
    {
        sender: "bot",
        text: "👋 Hi! Welcome to PRAVORA Digital Studio. How can we help you build your digital project today?",
    },
];

const quickPrompts = [
    "🚀 What services do you offer?",
    "💰 How much does a website cost?",
    "⏱️ How fast can you deliver?",
    "💬 Chat on WhatsApp",
    "📞 Call Founder directly",
];

function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(initialMessages);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSendMessage = (textToSend) => {
        const text = textToSend || inputValue;
        if (!text.trim()) return;

        const userMsg = { sender: "user", text };
        setMessages((prev) => [...prev, userMsg]);
        if (!textToSend) setInputValue("");
        setIsTyping(true);

        setTimeout(() => {
            let botReply = "";
            const lower = text.toLowerCase();

            if (lower.includes("whatsapp") || lower.includes("chat on whatsapp")) {
                botReply = "📱 Opening WhatsApp chat with our team (7367055728)...";
                window.open("https://wa.me/917367055728?text=Hi%20PRAVORA,%20I'm%20interested%20in%20building%20a%20project.", "_blank");
            } else if (lower.includes("call") || lower.includes("phone")) {
                botReply = "📞 You can call us directly at +91 7367055728!";
                window.location.href = "tel:+917367055728";
            } else if (lower.includes("service")) {
                botReply = "✨ We specialize in Startup Websites, Enterprise Business Platforms, High-Converting 3D Landing Pages, and Full-Stack Web Applications (React, Spring Boot, Node.js).";
            } else if (lower.includes("cost") || lower.includes("price") || lower.includes("budget")) {
                botReply = "💡 Our custom projects start from basic landing pages to comprehensive 3D web platforms. Tell us your requirements and we'll provide an instant custom quote!";
            } else if (lower.includes("fast") || lower.includes("time") || lower.includes("deliver")) {
                botReply = "⚡ Most custom website projects are delivered within 1 to 3 weeks with full responsiveness, SEO, and 3D visual polish.";
            } else {
                botReply = "Awesome! We'd love to learn more about your idea. Call us at +91 7367055728 or click 'WhatsApp' to talk directly!";
            }

            setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
            setIsTyping(false);
        }, 800);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Floating Chat Trigger Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-black font-bold shadow-[0_8px_30px_rgba(34,211,238,0.5),0_4px_0_#0284c7] transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label="Open AI Assistant Chat"
                >
                    <MessageSquare className="h-6 w-6 text-black transition-transform duration-300 group-hover:rotate-12" />
                    
                    {/* Notification Pulse */}
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-400"></span>
                    </span>
                </button>
            )}

            {/* Floating 3D Chat Window */}
            {isOpen && (
                <div className="flex h-[520px] w-[90vw] max-w-[380px] flex-col overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(34,211,238,0.2)] backdrop-blur-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/15 bg-white/5 px-5 py-4 backdrop-blur-md">
                        <div className="flex items-center gap-3">
                            <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-400 to-indigo-500 text-black font-extrabold shadow-md">
                                <Bot className="h-5 w-5" />
                                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-black bg-emerald-400" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                                    PRAVORA Assistant
                                    <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                                </h3>
                                <p className="text-[11px] text-emerald-400 font-medium">Online • Instant Reply</p>
                            </div>
                        </div>

                        {/* Direct WhatsApp & Close Buttons */}
                        <div className="flex items-center gap-2">
                            <a
                                href="https://wa.me/917367055728?text=Hi%20PRAVORA,%20I'd%20like%20to%20discuss%20a%20project."
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Chat on WhatsApp"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-colors"
                            >
                                <MessageSquare className="h-4 w-4" />
                            </a>
                            <a
                                href="tel:+917367055728"
                                title="Call Us Direct (+91 7367055728)"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors"
                            >
                                <Phone className="h-4 w-4" />
                            </a>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Messages Body */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-white/10">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed shadow-sm ${
                                        msg.sender === "user"
                                            ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold rounded-br-none"
                                            : "bg-white/10 border border-white/15 text-white/90 rounded-bl-none backdrop-blur-md"
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="rounded-2xl bg-white/10 px-4 py-2.5 text-xs text-white/50 animate-pulse">
                                    PRAVORA Assistant is typing...
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Quick Prompts */}
                    <div className="px-3 py-2 border-t border-white/10 flex gap-2 overflow-x-auto no-scrollbar">
                        {quickPrompts.map((prompt, i) => (
                            <button
                                key={i}
                                onClick={() => handleSendMessage(prompt)}
                                className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-colors shrink-0"
                            >
                                {prompt}
                            </button>
                        ))}
                    </div>

                    {/* Input Footer */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSendMessage();
                        }}
                        className="flex items-center gap-2 border-t border-white/10 bg-black/60 p-3"
                    >
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="flex-1 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs text-white placeholder-white/40 focus:border-cyan-400 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black transition-transform hover:scale-105 active:scale-95 shadow-md"
                        >
                            <Send className="h-4 w-4" />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ChatbotWidget;

import React, { useState, useRef } from "react";
import { Sparkles, Send, PhoneCall, MessageSquare, CheckCircle2, ArrowRight, X, Mail } from "lucide-react";

function CTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "Startup Website",
        message: "",
    });

    const cardRef = useRef(null);
    const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`);
        setGlare({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100,
            opacity: 0.25,
        });
    };

    const handleMouseLeave = () => {
        setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
        setGlare({ x: 50, y: 50, opacity: 0 });
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send email to prashantkum7676@gmail.com via FormSubmit AJAX service
            await fetch("https://formsubmit.co/ajax/prashantkum7676@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    service: formData.service,
                    message: formData.message,
                    _subject: `New Lead from Pravora Studio: ${formData.name}`,
                    _template: "table",
                }),
            });
        } catch (err) {
            console.error("Form submission notice:", err);
        } finally {
            setIsSubmitting(false);
            setIsSubmitted(true);

            // Clear the form fields immediately after submit
            setFormData({
                name: "",
                email: "",
                service: "Startup Website",
                message: "",
            });
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsSubmitted(false);
        setFormData({
            name: "",
            email: "",
            service: "Startup Website",
            message: "",
        });
    };

    return (
        <section id="contact" className="relative overflow-hidden py-24 sm:py-32 bg-[#050508]">
            {/* Ambient Background Radial Glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_60%)]" />

            <div className="relative z-10 mx-auto w-[92%] max-w-5xl">
                {/* 3D Glass Container */}
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="group relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-white/10 via-black/90 to-zinc-950 p-8 sm:p-14 backdrop-blur-2xl transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:border-cyan-400/40"
                    style={{
                        transform,
                        transformStyle: "preserve-3d",
                    }}
                >
                    {/* Dynamic Glare Light */}
                    <div
                        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
                        style={{
                            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.2) 0%, transparent 60%)`,
                            opacity: glare.opacity,
                        }}
                    />

                    <div className="relative z-20 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300 mb-4 backdrop-blur-md">
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Let's Create Something Extraordinary</span>
                        </div>

                        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                            Have an idea? <br className="hidden sm:inline" />
                            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                Let's build it.
                            </span>
                        </h2>

                        <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/60">
                            Tell us what you're building and let's turn your vision into a high-converting digital experience people remember.
                        </p>

                        {/* Interactive Buttons Bar */}
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-4" style={{ transform: "translateZ(25px)" }}>
                            {/* Main Contact Form Trigger */}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="group/btn relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 px-8 py-4 text-sm font-extrabold text-black transition-all duration-200 shadow-[0_6px_0_#0284c7,0_10px_25px_rgba(34,211,238,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_0_#0284c7,0_15px_30px_rgba(34,211,238,0.5)] active:translate-y-1 active:shadow-[0_1px_0_#0284c7]"
                            >
                                <Mail className="h-5 w-5" />
                                <span>Start a Conversation</span>
                                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                            </button>

                            {/* WhatsApp Direct Button */}
                            <a
                                href="https://wa.me/917367055728?text=Hi%20PRAVORA,%20I'm%20interested%20in%20building%20a%20project."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-emerald-950/60 px-6 py-4 text-sm font-bold text-emerald-400 backdrop-blur-md transition-all duration-200 shadow-[0_4px_0_rgba(16,185,129,0.3)] hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-black active:translate-y-0.5"
                            >
                                <MessageSquare className="h-4 w-4" />
                                <span>WhatsApp (7367055728)</span>
                            </a>

                            {/* Phone Call Button */}
                            <a
                                href="tel:+917367055728"
                                className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-200 shadow-[0_4px_0_rgba(255,255,255,0.2)] hover:-translate-y-0.5 hover:bg-white/20 active:translate-y-0.5"
                            >
                                <PhoneCall className="h-4 w-4" />
                                <span>Call (+91 7367055728)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3D Contact Form Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
                    <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 p-6 sm:p-8 text-white shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(34,211,238,0.3)]">
                        {/* Close Modal Button */}
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        {!isSubmitted ? (
                            <>
                                <div className="mb-6">
                                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-1">
                                        <Sparkles className="h-3.5 w-3.5" />
                                        <span>Direct Project Inquiry</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Start Your Project</h3>
                                    <p className="text-xs text-white/60 mt-1">
                                        Fill in your details below and we will respond within 2 hours.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-medium text-white/70 mb-1">Your Name</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-cyan-400 focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-white/70 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-cyan-400 focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-white/70 mb-1">Service Required</label>
                                        <select
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            className="w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                                        >
                                            <option value="Startup Website">Startup Website</option>
                                            <option value="Business Website">Business Website</option>
                                            <option value="Landing Page">High-Converting Landing Page</option>
                                            <option value="Web Application">Web Application (Fullstack)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-white/70 mb-1">Project Details</label>
                                        <textarea
                                            rows="3"
                                            required
                                            placeholder="Describe your goals, features, or timeline..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-cyan-400 focus:outline-none resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 py-3 text-sm font-bold text-black shadow-[0_5px_0_#0284c7] transition-all hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_#0284c7] disabled:opacity-50"
                                    >
                                        <Send className="h-4 w-4" />
                                        <span>{isSubmitting ? "Sending Email..." : "Send Message Directly"}</span>
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="py-8 text-center space-y-4">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Message Delivered to Email!</h3>
                                <p className="text-sm text-white/70 max-w-sm mx-auto">
                                    Your message has been dispatched directly to <span className="text-cyan-300 font-bold">prashantkum7676@gmail.com</span>! We will contact you back shortly.
                                </p>
                                <div className="pt-4 flex flex-col gap-2">
                                    <button
                                        onClick={handleCloseModal}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 text-sm font-bold text-black shadow-md hover:scale-[1.02] transition-transform"
                                    >
                                        <span>Done / Close</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}

export default CTA;
import React, { useState, useRef } from "react";
import { Sparkles, Check, ArrowRight, Zap, ShieldCheck, Rocket, MessageSquare } from "lucide-react";

const pricingTiers = [
    {
        name: "Startup Launchpad",
        tagline: "Ideal for early-stage startups needing a fast, high-converting web presence.",
        price: "₹2999",
        badge: "Fast Track",
        color: "from-cyan-500/20 to-blue-500/20",
        borderColor: "border-cyan-500/30",
        shadowGlow: "group-hover:shadow-[0_15px_35px_rgba(34,211,238,0.2)]",
        features: [
            "Up to 5 High-Impact Pages",
            "Responsive Modern UI Design",
            "SEO & Performance Optimization",
            "Custom Contact Form & WhatsApp Integration",
            "1 Week Rapid Delivery",
            "30 Days Post-Launch Support",
        ],
    },
    {
        name: "Business Growth",
        tagline: "For scaling businesses wanting custom 3D visuals, animation, and leads engine.",
        price: "₹7999",
        popular: true,
        badge: "Most Popular",
        color: "from-indigo-500/30 to-purple-500/30",
        borderColor: "border-purple-500/50",
        shadowGlow: "group-hover:shadow-[0_20px_45px_rgba(168,85,247,0.3)]",
        features: [
            "Up to 10 Bespoke Pages / Sections",
            "ReactBits 3D Interactive Graphics",
            "Micro-Animations & Smooth Physics",
            "CMS / Blog Integration",
            "2 Weeks Turnaround Time",
            "60 Days Founder Priority Support",
        ],
    },
    {
        name: "Fullstack Enterprise & AI",
        tagline: "Complete custom Web Apps powered by React, Spring Boot, Node.js & Spring AI.",
        price: "₹12999+",
        badge: "Bespoke Scale",
        color: "from-amber-500/20 to-emerald-500/20",
        borderColor: "border-amber-500/30",
        shadowGlow: "group-hover:shadow-[0_15px_35px_rgba(251,191,36,0.2)]",
        features: [
            "Fullstack Web App Architecture",
            "Spring Boot / Node.js APIs & DB",
            "Spring AI & RAG Chatbot Integration",
            "Cloud Infrastructure (Docker / K8s)",
            "Enterprise Security & Authentication",
            "Dedicated Project Manager & Code Ownership",
        ],
    },
];

function PricingCard({ tier }) {
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

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`);
        setGlare({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100,
            opacity: 0.3,
        });
    };

    const handleMouseLeave = () => {
        setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
        setGlare({ x: 50, y: 50, opacity: 0 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-gradient-to-b from-white/10 via-black/90 to-zinc-950 p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.7)] ${tier.borderColor} ${tier.shadowGlow} ${tier.popular ? "border-cyan-400 ring-1 ring-cyan-400/40" : "border-white/15"
                }`}
            style={{
                transform,
                transformStyle: "preserve-3d",
            }}
        >
            {/* Dynamic Glare */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
                style={{
                    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.25) 0%, transparent 60%)`,
                    opacity: glare.opacity,
                }}
            />

            <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between" style={{ transform: "translateZ(20px)" }}>
                    <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/15 bg-white/5 text-cyan-300">
                        {tier.badge}
                    </span>
                    {tier.popular && (
                        <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-black shadow-md">
                            <Sparkles className="h-3 w-3" />
                            Popular Choice
                        </span>
                    )}
                </div>

                {/* Tier Title & Price */}
                <div className="mt-6" style={{ transform: "translateZ(25px)" }}>
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                        {tier.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/60">
                        {tier.tagline}
                    </p>
                    <div className="mt-5 flex items-baseline gap-1">
                        <span className="text-4xl font-black text-white">{tier.price}</span>
                        <span className="text-xs text-white/40">/ fixed project quote</span>
                    </div>
                </div>

                {/* Features List */}
                <ul className="mt-8 space-y-3 border-t border-white/10 pt-6" style={{ transform: "translateZ(15px)" }}>
                    {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-white/80">
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                                <Check className="h-3.5 w-3.5" />
                            </div>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Action CTA Button */}
            <div className="mt-8 pt-4 border-t border-white/10" style={{ transform: "translateZ(20px)" }}>
                <a
                    href="https://wa.me/917367055728?text=Hi%20PRAVORA,%20I'm%20interested%20in%20the%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-xs font-extrabold transition-all duration-200 shadow-md ${tier.popular
                        ? "bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-black shadow-[0_4px_0_#0284c7] hover:-translate-y-0.5"
                        : "border border-white/20 bg-white/10 text-white hover:bg-white/20"
                        }`}
                >
                    <MessageSquare className="h-4 w-4" />
                    <span>Get Instant Custom Quote</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                </a>
            </div>
        </div>
    );
}

function Pricing() {
    return (
        <section id="pricing" className="py-20 sm:py-28 relative bg-[#060609] border-t border-white/10">
            {/* Background Glow */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />

            <div className="mx-auto w-[92%] max-w-7xl relative z-10">
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300 mb-4 backdrop-blur-md">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Transparent & Scalable Investment</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                        Simple, transparent pricing.
                    </h2>

                    <p className="mt-4 text-base text-white/60">
                        No hidden fees. Every project includes full source code ownership, 3D interactive graphics, and dedicated founder access.
                    </p>
                </div>

                {/* 3D Pricing Grid */}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                    {pricingTiers.map((tier) => (
                        <PricingCard key={tier.name} tier={tier} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pricing;

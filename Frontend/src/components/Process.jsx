import React, { useState, useRef } from "react";
import { Sparkles, ArrowRight, Search, Palette, Code2, Rocket, CheckCircle2 } from "lucide-react";

const processSteps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        subtitle: "Uncovering your core goals",
        description:
            "We skip the corporate fluff and dive straight into understanding your brand, target audience, and business objectives to map out a clear roadmap.",
        deliverables: ["User Research", "Wireframe Blueprints", "UX Mapping"],
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
        icon: Search,
        accentColor: "from-cyan-500/20 to-blue-500/20",
    },
    {
        number: "02",
        title: "UI/UX & 3D Prototyping",
        subtitle: "Designing for maximum wow-factor",
        description:
            "Creating high-fidelity 3D visual concepts, sleek layouts, and dynamic micro-animations tailored to give your site a distinct edge.",
        deliverables: ["Custom UI Components", "Interactive Mockups", "Design System"],
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80",
        icon: Palette,
        accentColor: "from-purple-500/20 to-indigo-500/20",
    },
    {
        number: "03",
        title: "Engineering & Build",
        subtitle: "Writing fast, rock-solid code",
        description:
            "Transforming static designs into lightning-fast, responsive web applications using React, TailwindCSS, and optimized 3D graphics.",
        deliverables: ["Clean React Code", "Mobile Optimization", "API Integration"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
        icon: Code2,
        accentColor: "from-emerald-500/20 to-teal-500/20",
    },
    {
        number: "04",
        title: "QA & Live Launch",
        subtitle: "Polishing every single detail",
        description:
            "Rigorous cross-browser testing, SEO optimization, and performance tuning before flipping the switch to go live with confidence.",
        deliverables: ["Cross-Device Testing", "SEO & Meta Setup", "Post-Launch Support"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
        icon: Rocket,
        accentColor: "from-amber-500/20 to-orange-500/20",
    },
];

function Process3DStep({ step, index }) {
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

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
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

    const Icon = step.icon;

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 via-black/85 to-zinc-950 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-cyan-400/50 hover:shadow-[0_20px_45px_rgba(34,211,238,0.2)]"
            style={{
                transform,
                transformStyle: "preserve-3d",
            }}
        >
            {/* Dynamic Glare Effect */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
                style={{
                    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.25) 0%, transparent 60%)`,
                    opacity: glare.opacity,
                }}
            />

            {/* Header: Number & Step Icon */}
            <div>
                <div className="flex items-center justify-between" style={{ transform: "translateZ(25px)" }}>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-tr from-white/15 to-white/5 font-mono text-sm font-extrabold text-cyan-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                        {step.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors group-hover:bg-cyan-400 group-hover:text-black">
                        <Icon className="h-5 w-5" />
                    </div>
                </div>

                {/* Real Small Image Preview with 3D Depth */}
                <div
                    className="relative mt-5 mb-5 h-36 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-inner group-hover:border-cyan-400/30 transition-all duration-300"
                    style={{ transform: "translateZ(30px)" }}
                >
                    <img
                        src={step.image}
                        alt={step.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-cyan-300 backdrop-blur-md bg-black/70 px-2.5 py-0.5 rounded-full border border-white/10">
                        {step.subtitle}
                    </span>
                </div>

                {/* Title & Detailed Content */}
                <div style={{ transform: "translateZ(20px)" }}>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/60">
                        {step.description}
                    </p>
                </div>

                {/* Deliverables List */}
                <div className="mt-5 space-y-1.5 pt-4 border-t border-white/10" style={{ transform: "translateZ(15px)" }}>
                    {step.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-white/70">
                            <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tactile 3D Action Button */}
            <div className="mt-6 pt-2" style={{ transform: "translateZ(25px)" }}>
                <a
                    href="#contact"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 py-2.5 px-4 text-xs font-bold text-white transition-all duration-200 shadow-[0_4px_0_rgba(255,255,255,0.15)] hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400 hover:text-black hover:shadow-[0_4px_0_#22d3ee] active:translate-y-0.5 active:shadow-[0_1px_0_#22d3ee]"
                >
                    <span>Phase Details</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                </a>
            </div>
        </div>
    );
}

function Process() {
    return (
        <section id="process" className="py-20 sm:py-28 relative">
            {/* Background Glow */}
            <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-cyan-500/5 blur-[120px]" />

            <div className="mx-auto w-[92%] max-w-7xl relative z-10">
                <div className="mb-16 max-w-2xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300 mb-4 backdrop-blur-md">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>How We Build</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                        Simple process. Serious results.
                    </h2>

                    <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/60">
                        No endless back-and-forth or confusing jargon. Just a clean, transparent development workflow built around your timeline.
                    </p>
                </div>

                {/* 4 Step 3D Grid */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {processSteps.map((step, idx) => (
                        <Process3DStep key={step.number} step={step} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Process;
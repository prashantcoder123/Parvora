import React, { useState, useRef } from "react";
import { ArrowUpRight, Sparkles, Code, Layout, Globe, Server } from "lucide-react";

const services = [
    {
        number: "01",
        title: "Startup Websites",
        description:
            "Modern, high-impact websites engineered for startups to establish credibility, convert visitors, and scale fast.",
        image: "/images/startup_3d.png",
        icon: Globe,
        tags: ["Modern UI", "Fast Loading", "SEO Optimized"],
    },
    {
        number: "02",
        title: "Business Websites",
        description:
            "Professional enterprise-grade websites crafted to captivate audiences, showcase services, and generate premium leads.",
        image: "/images/business_3d.png",
        icon: Layout,
        tags: ["Custom Design", "CMS Integration", "Brand Identity"],
    },
    {
        number: "03",
        title: "Landing Pages",
        description:
            "Conversion-focused landing pages designed with persuasive copy, 3D interactive visuals, and optimized funnel flows.",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=90",
        icon: Code,
        tags: ["High Converting", "A/B Testing Ready", "Micro-Animations"],
    },
    {
        number: "04",
        title: "Web Applications",
        description:
            "Full-stack web applications built with modern frameworks, secure authentication, real-time data, and robust cloud APIs.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=90",
        icon: Server,
        tags: ["React & Node", "Database Architecture", "Cloud APIs"],
    },
];

function Service3DCard({ service }) {
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
            opacity: 0.35,
        });
    };

    const handleMouseLeave = () => {
        setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
        setGlare({ x: 50, y: 50, opacity: 0 });
    };

    const Icon = service.icon;

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 via-black/80 to-zinc-950 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(34,211,238,0.2)]"
            style={{
                transform,
                transformStyle: "preserve-3d",
            }}
        >
            {/* Dynamic 3D Glare Light */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.25) 0%, transparent 60%)`,
                    opacity: glare.opacity,
                }}
            />

            {/* Card Header & 3D Number Tag */}
            <div>
                <div className="flex items-center justify-between" style={{ transform: "translateZ(25px)" }}>
                    <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 text-cyan-400 font-mono text-sm font-bold shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                            {service.number}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 group-hover:text-cyan-400 group-hover:bg-cyan-400/10 transition-colors">
                            <Icon className="h-5 w-5" />
                        </div>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400 group-hover:text-black group-hover:rotate-45 shadow-sm">
                        <ArrowUpRight className="h-5 w-5" />
                    </div>
                </div>

                {/* 3D Image Thumbnail Container */}
                <div
                    className="relative mt-6 mb-6 h-48 sm:h-56 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-inner group-hover:border-cyan-400/30 transition-all duration-300"
                    style={{ transform: "translateZ(30px)" }}
                >
                    <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* Floating Pill Tags over Image */}
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-10">
                        {service.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[11px] font-medium text-cyan-300 backdrop-blur-md shadow-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Title & Description with 3D Depth */}
                <div style={{ transform: "translateZ(20px)" }}>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                        {service.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/60">
                        {service.description}
                    </p>
                </div>
            </div>

            {/* Bottom Action Footer */}
            <div
                className="mt-6 flex items-center justify-between border-t border-white/10 pt-4"
                style={{ transform: "translateZ(15px)" }}
            >
                <span className="text-xs font-semibold uppercase tracking-wider text-white/40 group-hover:text-cyan-400 transition-colors">
                    Explore Solution
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            </div>
        </div>
    );
}

function Services() {
    return (
        <section id="services" className="py-20 sm:py-28 relative">
            {/* Background Ambient Glow */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />

            <div className="mx-auto w-[92%] max-w-7xl relative z-10">
                <div className="mb-16 max-w-2xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300 mb-4 backdrop-blur-md">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Services & Capabilities</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                        Digital experiences built around your business.
                    </h2>

                    <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/60">
                        From startup websites to complete web applications, PRAVORA helps businesses build a stronger digital presence with cutting-edge 3D design & robust code.
                    </p>
                </div>

                {/* Responsive 3D Grid */}
                <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
                    {services.map((service) => (
                        <Service3DCard key={service.number} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
import React, { useState, useRef } from "react";
import {
    Cpu,
    Code2,
    Database,
    Layers,
    Flame,
    Zap,
    Shield,
    Sparkles,
    Terminal,
    Box,
    Coffee,
    Container,
    Network,
    Workflow,
    Brain,
    Globe,
    FileCode,
    Server,
} from "lucide-react";

const technologies = [
    {
        name: "React",
        category: "Frontend UI",
        description: "Interactive User Interfaces",
        color: "from-cyan-500/20 to-blue-500/20",
        borderColor: "group-hover:border-cyan-400/60",
        shadowColor: "group-hover:shadow-[0_15px_30px_rgba(34,211,238,0.25)]",
        tagColor: "text-cyan-400",
        icon: Code2,
    },
    {
        name: "Next.js",
        category: "Fullstack",
        description: "SSR & React Framework",
        color: "from-slate-500/20 to-zinc-500/20",
        borderColor: "group-hover:border-white/60",
        shadowColor: "group-hover:shadow-[0_15px_30px_rgba(255,255,255,0.25)]",
        tagColor: "text-white",
        icon: Layers,
    },
    {
        name: "Java",
        category: "Backend",
        description: "Enterprise Object-Oriented Language",
        color: "from-orange-500/20 to-red-500/20",
        borderColor: "group-hover:border-orange-400/60",
        shadowColor: "group-hover:shadow-[0_15px_30px_rgba(251,146,60,0.25)]",
        tagColor: "text-orange-400",
        icon: Coffee,
    },
    {
        name: "Spring Boot",
        category: "Framework",
        description: "Robust Enterprise Backend Services",
        color: "from-emerald-500/20 to-green-600/20",
        borderColor: "group-hover:border-emerald-400/60",
        shadowColor: "group-hover:shadow-[0_15px_30px_rgba(52,211,153,0.25)]",
        tagColor: "text-emerald-400",
        icon: Server,
    },
    {
        name: "Spring AI & RAG",
        category: "AI & GenAI",
        description: "Retrieval-Augmented Intelligent Apps",
        color: "from-purple-500/20 to-indigo-500/20",
        borderColor: "group-hover:border-purple-400/60",
        shadowColor: "group-hover:shadow-[0_15px_30px_rgba(192,132,252,0.25)]",
        tagColor: "text-purple-300",
        icon: Brain,
    },
    {
        name: "Docker",
        category: "DevOps",
        description: "Containerization & Deployment",
        color: "from-blue-500/20 to-cyan-500/20",
        borderColor: "group-hover:border-blue-400/60",
        shadowColor: "group-hover:shadow-[0_15px_30px_rgba(96,165,250,0.25)]",
        tagColor: "text-blue-400",
        icon: Container,
    },
    {
        name: "Kubernetes",
        category: "Cloud Native",
        description: "Automated Container Orchestration",
        color: "from-sky-500/20 to-blue-600/20",
        borderColor: "group-hover:border-sky-400/60",
        shadowColor: "group-hover:shadow-[0_15px_30px_rgba(56,189,248,0.25)]",
        tagColor: "text-sky-400",
        icon: Network,
    },
    {
        name: "Jenkins",
        category: "CI / CD",
        description: "Automated Build & Deployment Pipelines",
        color: "from-red-500/20 to-amber-600/20",
        borderColor: "group-hover:border-red-400/60",
        shadowColor: "group-hover:shadow-[0_15px_30px_rgba(248,113,113,0.25)]",
        tagColor: "text-red-400",
        icon: Workflow,
    },
    {
        name: "TypeScript",
        category: "Language",
        description: "Type-Safe Architecture",
        color: "from-blue-500/20 to-indigo-500/20",
        borderColor: "group-hover:border-blue-400/60",
        shadowColor: "group-hover:shadow-[0_15px_30px_rgba(96,165,250,0.25)]",
        tagColor: "text-blue-400",
        icon: Terminal,
    },
    {
        name: "JavaScript (ES6+)",
        category: "Web Core",
        description: "Dynamic Web Logic & Async Standard",
        color: "from-amber-400/20 to-yellow-500/20",
        borderColor: "group-hover:border-amber-400/60",
        shadowColor: "group-hover:shadow-[0_15px_30px_rgba(251,191,36,0.25)]",
        tagColor: "text-amber-300",
        icon: Zap,
    },
    {
        name: "HTML5 & CSS3",
        category: "Fundamentals",
        description: "Semantic Layouts & Modern Styling",
        color: "from-orange-500/20 to-pink-500/20",
        borderColor: "group-hover:border-orange-400/60",
        shadowColor: "group-hover:shadow-[0_15px_30px_rgba(251,146,60,0.25)]",
        tagColor: "text-orange-300",
        icon: FileCode,
    },
    {
        name: "Tailwind CSS",
        category: "Styling",
        description: "Utility-First CSS System",
        color: "from-cyan-400/20 to-teal-500/20",
        borderColor: "group-hover:border-cyan-400/60",
        shadowColor: "group-hover:shadow-[0_15px_30px_rgba(34,211,238,0.25)]",
        tagColor: "text-cyan-300",
        icon: Globe,
    },
    {
        name: "Node.js",
        category: "Backend",
        description: "Scalable Event-Driven Runtime",
        color: "from-emerald-500/20 to-green-600/20",
        borderColor: "group-hover:border-emerald-400/60",
        shadowColor: "group-hover:shadow-[0_15px_30px_rgba(52,211,153,0.25)]",
        tagColor: "text-emerald-400",
        icon: Cpu,
    },
    {
        name: "Express.js",
        category: "API Engine",
        description: "Fast RESTful Web Services",
        color: "from-zinc-500/20 to-slate-600/20",
        borderColor: "group-hover:border-zinc-400/60",
        shadowColor: "group-hover:shadow-[0_15px_30px_rgba(212,212,216,0.25)]",
        tagColor: "text-zinc-300",
        icon: Shield,
    },
    {
        name: "MongoDB",
        category: "Database",
        description: "NoSQL Cloud Database",
        color: "from-emerald-600/20 to-teal-600/20",
        borderColor: "group-hover:border-emerald-500/60",
        shadowColor: "group-hover:shadow-[0_15px_30px_rgba(16,185,129,0.25)]",
        tagColor: "text-emerald-300",
        icon: Database,
    },
    {
        name: "PostgreSQL",
        category: "SQL Database",
        description: "Relational Data Storage",
        color: "from-sky-500/20 to-indigo-600/20",
        borderColor: "group-hover:border-sky-400/60",
        shadowColor: "group-hover:shadow-[0_15px_30px_rgba(56,189,248,0.25)]",
        tagColor: "text-sky-400",
        icon: Database,
    },
    {
        name: "WebGL / OGL",
        category: "3D Graphics",
        description: "High Performance 3D & Shaders",
        color: "from-purple-500/20 to-pink-500/20",
        borderColor: "group-hover:border-purple-400/60",
        shadowColor: "group-hover:shadow-[0_15px_30px_rgba(192,132,252,0.25)]",
        tagColor: "text-purple-400",
        icon: Box,
    },
    {
        name: "Vite",
        category: "Build Tool",
        description: "Lightning-Fast Bundler",
        color: "from-amber-500/20 to-purple-500/20",
        borderColor: "group-hover:border-amber-400/60",
        shadowColor: "group-hover:shadow-[0_15px_30px_rgba(251,191,36,0.25)]",
        tagColor: "text-amber-300",
        icon: Flame,
    },
];

function Tech3DCard({ tech }) {
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

        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
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

    const Icon = tech.icon;

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 via-black/80 to-zinc-950 p-5 backdrop-blur-xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)] ${tech.borderColor} ${tech.shadowColor}`}
            style={{
                transform,
                transformStyle: "preserve-3d",
            }}
        >
            {/* Dynamic Glare Effect */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
                style={{
                    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.3) 0%, transparent 60%)`,
                    opacity: glare.opacity,
                }}
            />

            {/* Ambient Inner Gradient */}
            <div className={`pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-gradient-to-br ${tech.color} blur-xl group-hover:scale-150 transition-transform duration-500`} />

            {/* Icon & Category Badge */}
            <div className="flex items-center justify-between" style={{ transform: "translateZ(25px)" }}>
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-tr ${tech.color} ${tech.tagColor} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-5 w-5" />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/10 bg-white/5 ${tech.tagColor}`}>
                    {tech.category}
                </span>
            </div>

            {/* Tech Title & Description */}
            <div className="mt-5" style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-lg font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                </h3>
                <p className="mt-1 text-xs text-white/60 leading-relaxed">
                    {tech.description}
                </p>
            </div>
        </div>
    );
}

function TechStack() {
    return (
        <section className="py-20 sm:py-28 relative bg-[#07070a] border-y border-white/10">
            {/* Background Glow */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />

            <div className="mx-auto w-[92%] max-w-7xl relative z-10">
                <div className="mb-14 text-center max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300 mb-4 backdrop-blur-md">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Enterprise & Full-Stack Capabilities</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                        Technologies we master.
                    </h2>

                    <p className="mt-4 text-base text-white/60">
                        From enterprise Java Spring Boot & Spring AI / RAG architectures to cloud DevOps, frontend frameworks, and 3D web graphics.
                    </p>
                </div>

                {/* 3D Tech Stack Grid */}
                <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {technologies.map((tech) => (
                        <Tech3DCard key={tech.name} tech={tech} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechStack;

import React, { useState, useRef } from "react";
import { ExternalLink, Sparkles, FolderGit2, EyeOff } from "lucide-react";

const projects = [
    {
        number: "01",
        title: "HouseFrame",
        category: "3D Architectural & Construction Studio",
        description:
            "A comprehensive 3D architectural rendering and smart future spaces estimator platform designed to deliver premium residential and commercial projects.",
        image: "/images/houseframe.png",
        link: "https://houseframe.in/",
        tags: ["3D Studio", "Vastu Estimator", "Real Estate", "React"],
    },
    {
        number: "02",
        title: "AutoVelo",
        category: "Super App & Mobility Platform",
        description:
            "An integrated multi-service platform for seamless ride booking, grocery delivery, and on-demand food delivery.",
        image: "/images/autovelo.png",
        link: "https://auto-velo-db85.vercel.app/",
        tags: ["Ride Booking", "Delivery API", "React", "Node.js"],
    },
    {
        number: "03",
        title: "Elixir D'Or Perfumes",
        category: "Luxury E-Commerce & Brand Showcase",
        description:
            "An immersive luxury fragrance storefront featuring 3D bottle visualizers, interactive scent notes breakdown, and premium checkout flow.",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
        link: null, // No link provided as requested
        tags: ["Luxury Retail", "3D Product Viewer", "TailwindCSS"],
    },
    {
        number: "04",
        title: "Aura Culinary Bistro",
        category: "Gourmet Restaurant & Reservation App",
        description:
            "An elegant digital experience for fine dining featuring table reservations, interactive chef menus, and immersive culinary story experiences.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        link: null, // No link provided as requested
        tags: ["Table Reservation", "Interactive Menu", "UI/UX Design"],
    },
];

function Project3DCard({ project }) {
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

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`);
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

    const CardWrapper = project.link ? "a" : "div";
    const wrapperProps = project.link
        ? {
              href: project.link,
              target: "_blank",
              rel: "noopener noreferrer",
          }
        : {};

    return (
        <CardWrapper
            {...wrapperProps}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative flex flex-col lg:flex-row overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 via-black/80 to-zinc-950 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(34,211,238,0.2)] cursor-pointer"
            style={{
                transform,
                transformStyle: "preserve-3d",
            }}
        >
            {/* Dynamic 3D Glare Lighting */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-20"
                style={{
                    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.2) 0%, transparent 60%)`,
                    opacity: glare.opacity,
                }}
            />

            {/* Left/Top Image Preview Container with 3D Pop */}
            <div
                className="relative lg:w-1/2 h-56 sm:h-72 lg:h-auto overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-inner group-hover:border-cyan-400/40 transition-all duration-300"
                style={{ transform: "translateZ(30px)" }}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating Project Number Badge */}
                <div className="absolute top-4 left-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black/60 font-mono text-sm font-bold text-cyan-400 backdrop-blur-md shadow-md">
                    {project.number}
                </div>

                {/* Live vs Design Concept Badge */}
                <div className="absolute top-4 right-4 z-10">
                    {project.link ? (
                        <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/80 px-3 py-1 text-xs font-semibold text-emerald-400 backdrop-blur-md shadow-md">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                            Live Project
                        </span>
                    ) : (
                        <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/80 px-3 py-1 text-xs font-semibold text-white/70 backdrop-blur-md shadow-md">
                            <EyeOff className="h-3 w-3 text-cyan-400" />
                            Design Concept
                        </span>
                    )}
                </div>
            </div>

            {/* Right/Bottom Content Area */}
            <div className="flex flex-1 flex-col justify-between pt-6 lg:pt-0 lg:pl-8" style={{ transform: "translateZ(20px)" }}>
                <div>
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                            {project.category}
                        </span>

                        {project.link ? (
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400 group-hover:text-black group-hover:rotate-45 shadow-sm">
                                <ExternalLink className="h-5 w-5" />
                            </div>
                        ) : (
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/30">
                                <FolderGit2 className="h-5 w-5" />
                            </div>
                        )}
                    </div>

                    <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/60">
                        {project.description}
                    </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-md group-hover:border-cyan-400/30 group-hover:text-white transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </CardWrapper>
    );
}

function Projects() {
    return (
        <section id="work" className="py-20 sm:py-28 relative bg-[#07070a]">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute top-1/3 right-10 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[120px]" />

            <div className="mx-auto w-[92%] max-w-7xl relative z-10">
                <div className="mb-16 max-w-2xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300 mb-4 backdrop-blur-md">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Selected Portfolio</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                        Things we've built.
                    </h2>
                </div>

                <div className="space-y-8">
                    {projects.map((project) => (
                        <Project3DCard key={project.number} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
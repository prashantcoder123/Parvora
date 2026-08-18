import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles, Code2, Layers, Cpu, Users, PhoneCall } from "lucide-react";

// ReactBits 3D Parallax & Glare Logo Element
function ReactBits3DLogo() {
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

        const rotateX = ((y - centerY) / centerY) * -16;
        const rotateY = ((x - centerX) / centerX) * 16;

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.06, 1.06, 1.06)`);
        setGlare({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100,
            opacity: 0.45
        });
    };

    const handleMouseLeave = () => {
        setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
        setGlare({ x: 50, y: 50, opacity: 0 });
    };

    return (
        <a
            href="#"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative flex items-center gap-3 rounded-full border border-white/25 bg-gradient-to-r from-white/15 via-white/5 to-white/15 px-4 py-2 backdrop-blur-xl transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-cyan-400/50"
            style={{
                transform,
                transformStyle: "preserve-3d"
            }}
        >
            {/* ReactBits Dynamic Glare Overlay */}
            <div
                className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300"
                style={{
                    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.5) 0%, transparent 65%)`,
                    opacity: glare.opacity
                }}
            />

            {/* 3D Floating Emblem with Layering */}
            <div
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-white via-slate-100 to-slate-300 font-extrabold text-black shadow-[0_0_15px_rgba(255,255,255,0.6)] transition-transform duration-200"
                style={{ transform: "translateZ(20px)" }}
            >
                P
            </div>

            {/* 3D Glowing Text */}
            <span
                className="font-bold tracking-[0.18em] text-white text-sm flex items-center gap-1.5 transition-transform duration-200"
                style={{ transform: "translateZ(12px)" }}
            >
                PRAVORA
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            </span>
        </a>
    );
}

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navBarRef = useRef(null);
    const [navTransform, setNavTransform] = useState("perspective(1200px) rotateX(0deg) rotateY(0deg)");
    const [navLight, setNavLight] = useState({ x: 50, opacity: 0 });

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    // Interactive 3D tilt for the entire Navbar container
    const handleNavMouseMove = (e) => {
        if (!navBarRef.current) return;
        const rect = navBarRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6; // subtle 3D tilt
        const rotateY = ((x - centerX) / centerX) * 4;

        setNavTransform(`perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
        setNavLight({
            x: (x / rect.width) * 100,
            opacity: 0.35
        });
    };

    const handleNavMouseLeave = () => {
        setNavTransform("perspective(1200px) rotateX(0deg) rotateY(0deg)");
        setNavLight({ x: 50, opacity: 0 });
    };

    const navLinks = [
        { name: "Services", href: "#services", icon: Layers },
        { name: "Work", href: "#work", icon: Code2 },
        { name: "Process", href: "#process", icon: Cpu },
        { name: "About", href: "#about", icon: Users },
    ];

    return (
        <>
            <nav className="fixed left-0 right-0 top-0 z-50 px-3 sm:px-6">
                <div
                    ref={navBarRef}
                    onMouseMove={handleNavMouseMove}
                    onMouseLeave={handleNavMouseLeave}
                    className="group/nav relative mx-auto mt-4 flex w-full max-w-7xl items-center justify-between rounded-full border border-white/20 bg-gradient-to-b from-white/10 via-black/60 to-black/80 px-4 py-2.5 backdrop-blur-2xl transition-transform duration-200 ease-out shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.05)] hover:border-white/35"
                    style={{
                        transform: navTransform,
                        transformStyle: "preserve-3d"
                    }}
                >
                    {/* Top 3D Bevel Highlight Rim */}
                    <div className="pointer-events-none absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                    
                    {/* Dynamic Lighting Reflection on 3D Navbar */}
                    <div
                        className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300"
                        style={{
                            background: `radial-gradient(circle at ${navLight.x}% 0%, rgba(255, 255, 255, 0.25) 0%, transparent 60%)`,
                            opacity: navLight.opacity
                        }}
                    />

                    {/* 3D ReactBits Interactive Logo */}
                    <div style={{ transform: "translateZ(15px)" }}>
                        <ReactBits3DLogo />
                    </div>

                    {/* Desktop Nav Links with 3D Pill Floating Effects */}
                    <div
                        className="hidden items-center gap-2 text-sm text-white/70 md:flex font-medium"
                        style={{ transform: "translateZ(10px)" }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative rounded-full px-4 py-2 text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_12px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA & Mobile Toggle with 3D Elevation */}
                    <div
                        className="flex items-center gap-3"
                        style={{ transform: "translateZ(18px)" }}
                    >
                        {/* 3D Push Button CTA */}
                        <a
                            href="#contact"
                            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-white via-slate-100 to-slate-200 px-5 py-2.5 text-sm font-extrabold text-black transition-all duration-200 shadow-[0_5px_0_#94a3b8,0_10px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[0_7px_0_#94a3b8,0_15px_25px_rgba(255,255,255,0.3)] active:translate-y-1 active:shadow-[0_1px_0_#94a3b8,0_5px_10px_rgba(0,0,0,0.4)]"
                        >
                            <span>Start a Project</span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </a>

                        {/* Mobile Hamburger Button with 3D Elevation */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-gradient-to-b from-white/20 to-white/5 text-white backdrop-blur-md transition-all duration-200 shadow-[0_4px_0_rgba(255,255,255,0.2),0_8px_16px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_rgba(255,255,255,0.2)] md:hidden"
                        >
                            {isMenuOpen ? (
                                <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
                            ) : (
                                <Menu className="h-5 w-5 transition-transform duration-300" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* 3D Mobile Sidebar Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/75 backdrop-blur-md transition-opacity duration-500 md:hidden ${
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* 3D Sliding Side Menu Drawer */}
            <div
                className="fixed right-0 top-0 bottom-0 z-50 w-[85vw] max-w-sm md:hidden pointer-events-none"
                style={{
                    perspective: "1200px"
                }}
            >
                <div
                    className={`h-full w-full bg-gradient-to-b from-zinc-950 via-black to-zinc-900 border-l border-white/20 p-6 pt-24 shadow-[-15px_0_50px_rgba(0,0,0,0.9)] flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isMenuOpen
                            ? "pointer-events-auto translate-x-0 rotate-y-0 opacity-100"
                            : "pointer-events-none translate-x-full rotate-y-45 opacity-0"
                    }`}
                    style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "right center",
                        transform: isMenuOpen
                            ? "perspective(1200px) rotateY(0deg) translateX(0) translateZ(0)"
                            : "perspective(1200px) rotateY(35deg) translateX(100%) translateZ(-100px)"
                    }}
                >
                    {/* Top Glow & Decorative 3D Elements */}
                    <div className="absolute top-0 right-0 left-0 h-40 bg-gradient-to-b from-cyan-500/15 via-indigo-500/10 to-transparent pointer-events-none" />
                    
                    {/* Navigation Items with 3D Depth Cards */}
                    <div className="relative z-10 space-y-3">
                        <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4 px-2">
                            Navigation
                        </div>
                        {navLinks.map((link, idx) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-gradient-to-r from-white/10 to-white/5 p-4 text-base font-semibold text-white transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:border-cyan-400/60 hover:bg-white/15 hover:translate-x-1.5 hover:shadow-[0_8px_25px_rgba(34,211,238,0.25)] active:scale-95"
                                    style={{
                                        transitionDelay: isMenuOpen ? `${idx * 70}ms` : "0ms",
                                        transform: isMenuOpen ? "translateZ(25px)" : "translateZ(0px)"
                                    }}
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan-400 transition-colors group-hover:bg-cyan-400 group-hover:text-black shadow-md">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <span>{link.name}</span>
                                    <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                                </a>
                            );
                        })}
                    </div>

                    {/* Bottom CTA Card inside 3D Side Menu */}
                    <div className="relative z-10 pt-6 border-t border-white/10">
                        <div className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-4 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.3)]">
                            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-1">
                                <Sparkles className="h-3.5 w-3.5 animate-spin" />
                                <span>Ready to innovate?</span>
                            </div>
                            <p className="text-xs text-white/70 mb-3">
                                Transform your digital presence with Pravora Studio.
                            </p>
                            <a
                                href="#contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 px-4 py-3 text-sm font-bold text-black shadow-[0_6px_0_#38bdf8,0_10px_20px_rgba(0,0,0,0.4)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_1px_0_#38bdf8]"
                            >
                                <PhoneCall className="h-4 w-4" />
                                <span>Start a Project</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;

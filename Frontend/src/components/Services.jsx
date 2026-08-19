import React, { useState, useRef } from "react";
import {
    ArrowUpRight,
    Sparkles,
    Code,
    Layout,
    Globe,
    Server,
} from "lucide-react";

const services = [
    {
        number: "01",
        title: "Startup Websites",
        description:
            "Modern, high-impact websites engineered for startups to establish credibility, convert visitors, and scale fast.",
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=90",
        icon: Globe,
        tags: ["Modern UI", "Fast Loading", "SEO Optimized"],
    },
    {
        number: "02",
        title: "Business Websites",
        description:
            "Professional enterprise-grade websites crafted to captivate audiences, showcase services, and generate premium leads.",
        image:
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=90",
        icon: Layout,
        tags: ["Custom Design", "CMS Integration", "Brand Identity"],
    },
    {
        number: "03",
        title: "Landing Pages",
        description:
            "Conversion-focused landing pages designed with persuasive copy, interactive visuals, and optimized funnel flows.",
        image:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=90",
        icon: Code,
        tags: ["High Converting", "A/B Testing Ready", "Micro-Animations"],
    },
    {
        number: "04",
        title: "Web Applications",
        description:
            "Full-stack web applications built with modern frameworks, secure authentication, real-time data, and robust cloud APIs.",
        image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=90",
        icon: Server,
        tags: ["React & Node", "Database Architecture", "Cloud APIs"],
    },
];

function Service3DCard({ service }) {
    const cardRef = useRef(null);

    const [transform, setTransform] = useState(
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );

    const [glare, setGlare] = useState({
        x: 50,
        y: 50,
        opacity: 0,
    });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        setTransform(
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`
        );

        setGlare({
            x: (x / rect.width) * 100,
            y: (y / rect.height) * 100,
            opacity: 0.3,
        });
    };

    const handleMouseLeave = () => {
        setTransform(
            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
        );

        setGlare({
            x: 50,
            y: 50,
            opacity: 0,
        });
    };

    const Icon = service.icon;

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="
                group
                relative
                flex
                flex-col
                justify-between
                overflow-hidden
                rounded-3xl
                border
                border-white/15
                bg-gradient-to-b
                from-white/[0.08]
                via-black/90
                to-zinc-950
                p-6
                sm:p-8
                backdrop-blur-xl
                transition-all
                duration-300
                shadow-[0_15px_40px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)]
                hover:border-cyan-400/50
                hover:shadow-[0_20px_50px_rgba(34,211,238,0.18)]
            "
            style={{
                transform,
                transformStyle: "preserve-3d",
            }}
        >
            {/* Ambient Card Glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-48
                    w-48
                    rounded-full
                    bg-cyan-500/10
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                "
            />

            {/* Dynamic 3D Glare */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(
                        circle at ${glare.x}% ${glare.y}%,
                        rgba(255,255,255,0.22) 0%,
                        transparent 55%
                    )`,
                    opacity: glare.opacity,
                }}
            />

            {/* Main Content */}
            <div>
                {/* Card Header */}
                <div
                    className="flex items-center justify-between"
                    style={{
                        transform: "translateZ(25px)",
                    }}
                >
                    <div className="flex items-center gap-3">
                        {/* Number */}
                        <span
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-white/15
                                bg-gradient-to-tr
                                from-cyan-500/20
                                to-indigo-500/20
                                font-mono
                                text-sm
                                font-bold
                                text-cyan-400
                                shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]
                            "
                        >
                            {service.number}
                        </span>

                        {/* Service Icon */}
                        <div
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                text-white/80
                                transition-all
                                duration-300
                                group-hover:border-cyan-400/30
                                group-hover:bg-cyan-400/10
                                group-hover:text-cyan-400
                            "
                        >
                            <Icon className="h-5 w-5" />
                        </div>
                    </div>

                    {/* Arrow Button */}
                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            text-white/50
                            shadow-sm
                            transition-all
                            duration-300
                            group-hover:border-cyan-400/40
                            group-hover:bg-cyan-400
                            group-hover:text-black
                            group-hover:rotate-45
                        "
                    >
                        <ArrowUpRight className="h-5 w-5" />
                    </div>
                </div>

                {/* Image */}
                <div
                    className="
                        relative
                        mt-6
                        mb-6
                        h-48
                        w-full
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/60
                        shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]
                        transition-all
                        duration-300
                        group-hover:border-cyan-400/30
                    "
                    style={{
                        transform: "translateZ(30px)",
                    }}
                >
                    <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-110
                        "
                    />

                    {/* Dark Image Overlay */}
                    <div
                        className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/90
                            via-black/20
                            to-transparent
                            opacity-70
                            transition-opacity
                            duration-300
                            group-hover:opacity-45
                        "
                    />

                    {/* Subtle Cyan Image Glow */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-tr
                            from-cyan-500/10
                            via-transparent
                            to-indigo-500/10
                            opacity-0
                            transition-opacity
                            duration-500
                            group-hover:opacity-100
                        "
                    />

                    {/* Tags */}
                    <div
                        className="
                            absolute
                            bottom-3
                            left-3
                            z-10
                            flex
                            flex-wrap
                            gap-1.5
                        "
                    >
                        {service.tags.map((tag) => (
                            <span
                                key={tag}
                                className="
                                    rounded-full
                                    border
                                    border-white/20
                                    bg-black/70
                                    px-3
                                    py-1
                                    text-[11px]
                                    font-medium
                                    text-cyan-300
                                    shadow-sm
                                    backdrop-blur-md
                                    transition-all
                                    duration-300
                                    group-hover:border-cyan-400/30
                                "
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Title & Description */}
                <div
                    style={{
                        transform: "translateZ(20px)",
                    }}
                >
                    <h3
                        className="
                            text-xl
                            font-bold
                            tracking-tight
                            text-white
                            transition-colors
                            duration-300
                            sm:text-2xl
                            group-hover:text-cyan-300
                        "
                    >
                        {service.title}
                    </h3>

                    <p
                        className="
                            mt-3
                            text-sm
                            leading-relaxed
                            text-white/60
                            sm:text-base
                        "
                    >
                        {service.description}
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div
                className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/10
                    pt-4
                "
                style={{
                    transform: "translateZ(15px)",
                }}
            >
                <span
                    className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-white/40
                        transition-colors
                        duration-300
                        group-hover:text-cyan-400
                    "
                >
                    Explore Solution
                </span>

                <span
                    className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-cyan-400
                        opacity-0
                        shadow-[0_0_8px_#22d3ee]
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                        animate-pulse
                    "
                />
            </div>
        </div>
    );
}

function Services() {
    return (
        <section
            id="services"
            className="
                relative
                overflow-hidden
                py-20
                sm:py-28
            "
        >
            {/* Background Ambient Glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[500px]
                    w-[500px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-cyan-500/5
                    blur-[120px]
                "
            />

            {/* Additional Background Glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    left-0
                    top-1/3
                    h-[300px]
                    w-[300px]
                    rounded-full
                    bg-indigo-500/5
                    blur-[100px]
                "
            />

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    w-[92%]
                    max-w-7xl
                "
            >
                {/* Section Header */}
                <div className="mb-16 max-w-2xl">
                    {/* Badge */}
                    <div
                        className="
                            mb-4
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-cyan-500/30
                            bg-cyan-500/10
                            px-3.5
                            py-1
                            text-xs
                            font-semibold
                            uppercase
                            tracking-widest
                            text-cyan-300
                            backdrop-blur-md
                        "
                    >
                        <Sparkles className="h-3.5 w-3.5" />

                        <span>Services & Capabilities</span>
                    </div>

                    {/* Heading */}
                    <h2
                        className="
                            text-3xl
                            font-extrabold
                            leading-[1.15]
                            tracking-tight
                            text-white
                            sm:text-5xl
                        "
                    >
                        Digital experiences built around your business.
                    </h2>

                    {/* Description */}
                    <p
                        className="
                            mt-5
                            text-base
                            leading-relaxed
                            text-white/60
                            sm:text-lg
                        "
                    >
                        From startup websites to complete web applications,
                        PRAVORA helps businesses build a stronger digital
                        presence with cutting-edge design & robust code.
                    </p>
                </div>

                {/* Services Grid */}
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-6
                        sm:gap-8
                        md:grid-cols-2
                    "
                >
                    {services.map((service) => (
                        <Service3DCard
                            key={service.number}
                            service={service}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
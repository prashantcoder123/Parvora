import Lightfall from "./Lightfall";

function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

            {/* Lightfall */}
            <div className="absolute inset-0">
                <Lightfall
                    colors={["#A6C8FF", "#5227FF", "#FF9FFC"]}
                    backgroundColor="#050018"
                    speed={0.55}
                    streakCount={5}
                    streakWidth={1.2}
                    streakLength={1}
                    glow={2}
                    density={0.6}
                    twinkle={1}
                    zoom={3}
                    backgroundGlow={1}
                    opacity={1}
                    mouseInteraction={true}
                    mouseStrength={0.5}
                    mouseRadius={1}
                />
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050507_80%)]" />

            {/* Hero Content */}
            <div className="relative z-10 mx-auto w-[92%] max-w-5xl pt-20 text-center">

                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-md">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
                    Available for freelance projects
                </div>

                <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-purple-300">
                    PRAVORA — Digital Studio
                </p>

                <h1 className="mx-auto max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                    Build something
                    <span className="hero-gradient block">
                        people remember.
                    </span>
                </h1>

                <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
                    We design and develop modern websites and digital experiences
                    for startups, businesses and ambitious founders.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                    <a
                        href="#contact"
                        className="rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:scale-105"
                    >
                        Start a Project →
                    </a>

                    <a
                        href="#work"
                        className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold backdrop-blur-md transition hover:bg-white/10"
                    >
                        View Our Work
                    </a>

                </div>

                <div className="mt-16 flex justify-center gap-6 text-xs uppercase tracking-[0.2em] text-white/35">
                    <span>Design</span>
                    <span>•</span>
                    <span>Development</span>
                    <span>•</span>
                    <span>Launch</span>
                </div>

            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/30">
                Scroll to explore
            </div>

        </section>
    );
}

export default Hero;
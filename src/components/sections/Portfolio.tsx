"use client";

import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const projects = [
    { title: "Vayusut Edit", client: "@vayusut", location: "Lifestyle", url: "https://www.instagram.com/reel/DMwwLfPppRN/", category: "lifestyle" },
    { title: "The Content Walas", client: "@thecontentwalas", location: "Lifestyle", url: "https://www.instagram.com/reel/DMz-C8Npto4/", category: "lifestyle" },
    { title: "Zouk Online", client: "@zoukonline", location: "Fashion", url: "https://www.instagram.com/p/DOQ1U2_iAf6/", category: "fashion" },
    { title: "Bikers Cafe Edit", client: "@thebikerscafe", location: "F&B", url: "https://www.instagram.com/reel/DXMuxgjjpaq/", category: "fnb" },
    { title: "Bikers Cafe Signature", client: "@thebikerscafe", location: "F&B", url: "https://www.instagram.com/reel/DScGmn8kefB/", category: "fnb" },
    { title: "Revivo Visuals", client: "@revivofbd", location: "Lifestyle", url: "https://www.instagram.com/p/DWq9VpaCQ-S/", category: "lifestyle" },
    { title: "Bikers Cafe Vintage", client: "@thebikerscafe", location: "F&B", url: "https://www.instagram.com/reel/DUFTsZzCcKN/", category: "fnb" },
    { title: "Mekaco Campaign", client: "@mekaco.in", location: "Fashion", url: "https://www.instagram.com/reel/DQzDPRgCfJ1/", category: "fashion" },
    { title: "Ellorah Visuals", client: "@ellorah", location: "Fashion", url: "https://www.instagram.com/reel/DYRNLoLS_Fd/", category: "fashion" },
    { title: "Kath & Benz Edit", client: "@kathnbenz.in", location: "Fashion", url: "https://www.instagram.com/reel/DM2FGgwpG3K/", category: "fashion" },
    { title: "Model Aesthetic", client: "@bhavyaaryaa_", location: "Lifestyle", url: "https://www.instagram.com/reel/DPG2YBlCZed/", category: "lifestyle" },
    { title: "Bikers Cafe Brand", client: "@thebikerscafe", location: "F&B", url: "https://www.instagram.com/p/DUGLxOvCbXb/", category: "fnb" },
    { title: "Cascades Lounge Vibe", client: "Cascades Lounge", location: "F&B", url: "https://www.instagram.com/reel/DPWqPnHiYG6/", category: "fnb" },
];

export function PortfolioSection() {
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
    const [reloadKeys, setReloadKeys] = useState<Record<string, number>>({});

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const getEmbedUrl = (url: string) => {
        const match = url.match(/\/(reel|p)\/([^/]+)/);
        const id = match ? match[2] : "";
        return `https://www.instagram.com/reel/${id}/embed/`;
    };

    // Filter Groups
    const filterGroups = [
        { name: "All Work", key: "all", count: projects.length },
        { name: "Fashion & Lifestyle", key: "lifestyle", count: projects.filter(p => p.category === "fashion" || p.category === "lifestyle").length },
        { name: "F&B & Hospitality", key: "fnb", count: projects.filter(p => p.category === "fnb").length },
    ];

    const filteredProjects = projects.filter(project => {
        if (selectedFilter === "all") return true;
        if (selectedFilter === "lifestyle") return project.category === "fashion" || project.category === "lifestyle";
        if (selectedFilter === "fnb") return project.category === "fnb";
        return true;
    });

    return (
        <section id="projects" className="pt-8 pb-12 text-white overflow-hidden relative">
            <div className="container mx-auto px-6 relative">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black font-serif uppercase tracking-tight pb-2 mb-1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300">Featured Projects</h2>
                        <p className="text-white/95 text-sm md:text-base max-w-lg font-medium font-sans">
                            A curated selection of our high-end fashion campaigns, F&B cinematography, and premium lifestyle visuals.
                        </p>
                    </div>
                </div>

                {/* Location Filter Tabs with refined counter badges */}
                <div className="flex flex-wrap items-center gap-2 mb-10 pb-3 border-b border-white/[0.04]">
                    {filterGroups.map((group) => {
                        const isActive = selectedFilter === group.key;
                        return (
                            <button
                                key={group.key}
                                onClick={() => setSelectedFilter(group.key)}
                                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider font-sans transition-all duration-300 flex items-center gap-2 border cursor-pointer ${
                                    isActive
                                        ? "bg-[#ee6767] border-[#ee6767] text-black shadow-[0_4px_12px_rgba(238,103,103,0.3)]"
                                        : "bg-white/[0.04] border-white/10 text-white hover:text-white/60 hover:border-white/[0.05] hover:bg-white/[0.02]"
                                }`}
                            >
                                <span>{group.name}</span>
                                <span className={`text-[10px] font-bold font-mono px-1.5 py-0.5 rounded-full ${
                                    isActive ? "bg-black/10 text-black" : "bg-white/10 text-white/90"
                                }`}>
                                    {group.count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                 <div className="relative px-2 md:px-6">
                    {/* Navigation Buttons positioned on left and right sides of the carousel */}
                    <button 
                        onClick={scrollPrev} 
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 p-2.5 bg-[#ee6767]/90 text-black border border-[#ee6767]/50 shadow-[0_0_15px_rgba(238,103,103,0.25)] rounded-full hover:bg-[#ee6767] hover:shadow-[0_0_20px_rgba(238,103,103,0.4)] transition-all duration-300 pointer-events-auto hidden sm:flex items-center justify-center"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    
                    <button 
                        onClick={scrollNext} 
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 p-2.5 bg-[#ee6767]/90 text-black border border-[#ee6767]/50 shadow-[0_0_15px_rgba(238,103,103,0.25)] rounded-full hover:bg-[#ee6767] hover:shadow-[0_0_20px_rgba(238,103,103,0.4)] transition-all duration-300 pointer-events-auto hidden sm:flex items-center justify-center"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={18} />
                    </button>
 
                    <div className="overflow-hidden" ref={emblaRef} key={selectedFilter}>
                        <div className="flex gap-6 md:gap-8">
                            {filteredProjects.map((project, idx) => (
                                <div
                                    key={project.url}
                                    className="group relative flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_28%] aspect-[9/13] overflow-hidden rounded-2xl border border-white/[0.04] backdrop-blur-md hover:border-[#ee6767]/[0.5] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(238,103,103,0.15)] bg-black"
                                >
                                    <div className="relative w-full h-full overflow-hidden pointer-events-auto">
                                        <iframe
                                            key={reloadKeys[project.url] || 0}
                                            src={getEmbedUrl(project.url)}
                                            className="absolute bg-black"
                                            style={{ 
                                                border: 'none',
                                                width: '135%',
                                                height: '164%',
                                                top: '-24%',
                                                left: '-17.5%'
                                             }}
                                            scrolling="no"
                                            allowtransparency="true"
                                            allow="autoplay; encrypted-media; picture-in-picture; web-share"
                                            allowFullScreen
                                            title={project.title}
                                        />
                                    </div>
 
                                    {/* Action Button: Play Again / Restart in upper status layer */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setReloadKeys(prev => ({
                                                ...prev,
                                                [project.url]: (prev[project.url] || 0) + 1
                                            }));
                                        }}
                                        className="absolute top-4 right-4 z-30 px-3 py-1.5 bg-[#ee6767] text-black border border-[#ee6767]/40 rounded-full transition-all duration-300 flex items-center gap-1.5 shadow-lg group/replay backdrop-blur-md cursor-pointer hover:bg-black/85 hover:text-white/90 hover:border-white/15"
                                        title="Restart Video / Play Again"
                                        style={{ pointerEvents: 'auto' }}
                                    >
                                        <RotateCcw size={13} className="group-hover/replay:rotate-180 transition-transform duration-500 ease-out" />
                                        <span className="text-[11px] font-bold tracking-wide font-sans select-none">Play Again</span>
                                    </button>
 
                                    {/* Premium layout: elegant details overlay */}
                                    <div className="absolute inset-x-0 bottom-0 p-5 z-10 bg-gradient-to-t from-black via-black/90 to-transparent pt-16 pointer-events-none transition-transform duration-300 group-hover:translate-y-[-2px]">
                                        <p className="text-[#ee6767] text-[10px] tracking-widest uppercase mb-1 font-bold font-mono">
                                            {project.location}
                                        </p>
                                        <h3 className="text-lg md:text-xl font-bold leading-tight text-white font-serif uppercase group-hover:text-[#ee6767] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-white text-xs font-light mt-1 font-sans">
                                            Client: {project.client}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
 
                    {/* Mobile control fallback buttons */}
                    <div className="flex gap-4 mt-8 sm:hidden justify-center">
                        <button onClick={scrollPrev} className="p-2 bg-[#ee6767]/90 text-black rounded-full border border-[#ee6767]/50 shadow-[0_0_15px_rgba(238,103,103,0.3)] transition-colors hover:bg-[#ee6767]">
                            <ChevronLeft size={16} />
                        </button>
                        <button onClick={scrollNext} className="p-2 bg-[#ee6767]/90 text-black rounded-full border border-[#ee6767]/50 shadow-[0_0_15px_rgba(238,103,103,0.3)] transition-colors hover:bg-[#ee6767]">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

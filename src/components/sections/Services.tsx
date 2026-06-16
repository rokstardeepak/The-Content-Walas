"use client";

import { motion } from "framer-motion";
import { Camera, Film, Sparkles, Compass, Utensils } from "lucide-react";
import { InteractivePlanner } from "./InteractivePlanner";

// List of brand shoot services The Content Walas offers
const servicesList = [
    {
        id: "01",
        title: "Fashion & Editorial Shoots",
        description: "Lookbooks that sell, not just pose. Studio or street, we direct models, styling and light to make your collection feel global. From moodboard to final selects in 72 hours.",
        icon: Camera,
        glowColor: "rgba(238,103,103,0.15)", // Coral glow
    },
    {
        id: "02",
        title: "Product & E-commerce Visuals",
        description: "Premium product visuals designed for conversion. Cinematic unboxing, ghost mannequin, and detail macros that elevate your PDP and Amazon listing.",
        icon: Sparkles,
        glowColor: "rgba(168,85,247,0.15)", // Purple glow
    },
    {
        id: "03",
        title: "Restaurant, Cafe & Hospitality",
        description: "Tasteful content for menus that actually get ordered. We shot the sushi, quinoa bowls and Cherry Whisper cocktail at Bikers Cafe — food that looks as good as it tastes.",
        icon: Utensils,
        glowColor: "rgba(59,130,246,0.15)", // Blue glow
    },
    {
        id: "04",
        title: "Brand Reels & UGC Campaigns",
        description: "Reels engineered for saves and shares. Ideation, scripting, shooting and editing in-house — no freelancers, no delays.",
        icon: Film,
        glowColor: "rgba(238,103,103,0.15)", // Coral glow
    }
];

// Content Creation Process - 5 stages
const processSteps = [
    {
        step: "01",
        title: "Brief",
        desc: "30-min call. Goals, audience, platforms."
    },
    {
        step: "02",
        title: "Moodboard",
        desc: "We show you the look before we shoot."
    },
    {
        step: "03",
        title: "Shoot",
        desc: "Delhi NCR studio or on-location."
    },
    {
        step: "04",
        title: "Edit",
        desc: "Color-graded, retouched, captioned."
    },
    {
        step: "05",
        title: "Deliver",
        desc: "Drive-ready files in 72 hours."
    }
];

export function ServicesSection() {
    return (
        <section id="services" className="pt-8 pb-24 text-white border-y border-white/[0.03]">
            <div className="container mx-auto px-6">
                
                {/* Header Section */}
                <div className="max-w-3xl mb-20 p-2">
                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[#ee6767] text-xs tracking-[0.2em] uppercase font-bold font-mono mb-3"
                    >
                        CREATIVE EXPERTISE
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold font-serif uppercase tracking-tight mb-6 leading-tight"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300">
                            High-Converting Content &
                        </span>
                        <br />
                        <span className="text-[#ee6767] italic font-medium tracking-tight">
                            Cinematic Masterpieces
                        </span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/70 text-base md:text-lg font-light leading-relaxed"
                    >
                        Providing premium creative visual directions and viral production solutions for lifestyle, 
                        fashion, and F&B brands across Delhi NCR. Crafting scroll-stopping assets that command attention.
                    </motion.p>
                </div>

                {/* Services Bento Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
                    {servicesList.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                                className="group relative p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.04] backdrop-blur-md hover:border-[#ee6767]/[0.4] hover:bg-white/[0.03] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(238,103,103,0.08)] active:scale-[0.99] overflow-hidden"
                            >
                                {/* Glow element in background on hover */}
                                <div 
                                    className="absolute -right-16 -top-16 w-36 h-36 rounded-full opacity-5 hover:opacity-10 transition-opacity duration-500 blur-2xl"
                                    style={{ backgroundColor: service.glowColor }}
                                />

                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-[#ee6767] group-hover:text-black group-hover:bg-[#ee6767] group-hover:border-[#ee6767]/30 transition-all duration-500">
                                        <IconComponent size={24} className="stroke-[1.5]" />
                                    </div>
                                    <span className="font-mono text-3xl font-extrabold text-white/[0.06] group-hover:text-[#ee6767]/20 transition-colors duration-500">
                                        {service.id}
                                    </span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-black mb-3 tracking-tight font-serif uppercase bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 group-hover:from-white group-hover:to-[#ee6767] transition-all duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Workflow Timeline Block */}
                <div className="border border-white/[0.04] bg-white/[0.01] backdrop-blur-md hover:border-[#ee6767]/[0.4] hover:bg-white/[0.03] p-6 md:p-10 rounded-2xl relative overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_15px_40px_rgba(238,103,103,0.08)] active:scale-[0.99]" id="architectural-pipeline-parent">
                    <div className="absolute top-0 right-0 p-8 text-[#ee6767]/10 pointer-events-none hidden md:block">
                        <Compass size={140} className="stroke-[0.5]" />
                    </div>

                    <div className="max-w-xl mb-8 text-left">
                        <h3 className="text-xl md:text-2xl font-bold pb-1 mb-1 font-serif uppercase bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">The Content Pipeline</h3>
                        <p className="text-white/60 text-xs md:text-sm font-light">
                            How we maintain stunning story aesthetics and scroll-stopping loops from raw ideas to post-production.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
                        {processSteps.map((step, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className="relative flex flex-col group/process"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="font-mono text-xs font-bold px-2 py-1 bg-[#ee6767]/10 rounded-md border border-[#ee6767]/20 text-[#ee6767]/70">
                                        STAGE {step.step}
                                    </span>
                                    {idx !== 4 && (
                                        <div className="hidden lg:block h-[1px] bg-white/[0.05] flex-1 translate-y-0.5 group-hover/process:bg-[#ee6767]/10 transition-colors" />
                                    )}
                                </div>
                                <h4 className="font-serif font-bold text-lg uppercase bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-2 group-hover/process:from-[#ee6767]/80 group-hover/process:to-[#ee6767]/80 transition-all duration-300">
                                    {step.title}
                                </h4>
                                <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Stateful Interactive Vision Planner */}
                <InteractivePlanner />

            </div>
        </section>
    );
}

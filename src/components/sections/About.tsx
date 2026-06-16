"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Users, Eye, Award } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button"
// @ts-ignore
import agencyLogo from "@/527914263_17850629772519785_6525334527680286419_n.jpg";

export function AboutSection() {
    return (
        <section id="about" className="py-0 md:py-0 text-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-tight font-serif uppercase [word-spacing:0.15em]">
                            <span className="text-white">
                                Artistic Visuals,
                            </span>
                            <br />
                            <span className="text-[#ee6767]">Brought to Life.</span>
                        </h2>
                        <p className="text-white/95 text-lg leading-relaxed mb-4 font-normal tracking-wide [word-spacing:0.1em]">
                            The Content Walas is an elite creative agency transforming brands into social sensations. We create cinematic visual narratives and scroll-stopping reels designed to drive high-converting results.
                        </p>
                        <div className="border-l-2 border-[#ee6767] pl-5 my-4 relative">
                            <p className="text-white text-lg font-bold leading-relaxed italic tracking-wide [word-spacing:0.05em]">
                                "We don't just shoot; we create narratives that stop the scroll and elevate your brand."
                            </p>
                        </div>
                        <p className="text-white/95 text-lg leading-relaxed font-normal tracking-wide [word-spacing:0.1em]">
                            By fusing technical precision with dynamic social strategy, we elevate presence across Delhi NCR and beyond.
                        </p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#ee6767]/[0.4] transition-all duration-500 hover:shadow-[0_0_40px_-5px_rgba(238,103,103,0.15)] aspect-video md:h-[450px] md:aspect-auto group"
                    >
                        <video
                            src="/showreel.mp4"
                            className="w-full h-full object-cover scale-[1.01] opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        {/* Elegant vignette overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Premium edge highlights */}
                        <div className="absolute inset-0 border border-white/[0.05] rounded-2xl pointer-events-none" />
                    </motion.div>
                </div>

                {/* Collaboration & Team Section */}
                <div className="mt-2 pt-2 border-t border-white/[0.06]">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/[0.015] border border-white/[0.05] rounded-3xl p-8 md:p-12 mb-0 backdrop-blur-md relative overflow-hidden"
                    >
                        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-start">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-black mb-6 [word-spacing:0.15em] font-serif uppercase">
                                    <span className="text-[#ee6767]">Collaborate</span> with us.
                                </h3>
                                <p className="text-white/90 text-lg leading-relaxed font-normal mb-6 tracking-wide [word-spacing:0.1em]">
                                    Looking to collaborate with fashion, FnB, lifestyle & event brands for 🎥 videography, 📸 photography & 📈 marketing.
                                </p>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                                    <p className="text-white text-lg font-bold">
                                        Let’s create something visually powerful ✨
                                    </p>
                                    <a href="#contact" className="inline-block">
                                        <LiquidButton className="text-white border border-[#ee6767]/30 hover:border-[#ee6767] rounded-full font-sans text-xs font-bold tracking-widest px-8 py-4 bg-black/40 hover:bg-black/60 transition-all uppercase flex items-center gap-2 group" size="xl">
                                            <span>Book A Session</span>
                                        </LiquidButton>
                                    </a>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                                        In-House Strategic Team
                                    </p>
                                    <p className="text-white/70 text-base font-light italic">
                                        Videographers, Photographers, Editors & Models ready for:
                                    </p>
                                </div>
                                <ul className="grid grid-cols-1 gap-3">
                                    {[
                                        "Brand campaigns",
                                        "Reels & social media content",
                                        "Event coverage",
                                        "Fashion/editorial shoots",
                                        "Product & restaurant shoots"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-white/80 group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#ee6767]/40 group-hover:bg-[#ee6767] transition-all duration-300" />
                                            <span className="text-base font-light group-hover:text-white transition-colors tracking-wide">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        {/* Subtle background glow */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#ee6767]/5 blur-[80px] rounded-full pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

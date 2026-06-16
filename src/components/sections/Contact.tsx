"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { ThreadsIcon, InstagramIcon } from "@/components/ui/brand-icons";

export function ContactSection() {
    return (
        <section className="py-16 text-white relative overflow-hidden" id="contact">
            <div className="container mx-auto px-6 relative z-10 text-center">
                
                {/* Minimalist Spacing / Social Footnote Anchor */}
                <div className="flex flex-col items-center justify-center gap-6">
                    <p className="text-[11px] font-mono tracking-[0.3em] text-[#ee6767]/70 font-semibold uppercase">
                        CONNECT PHYSICALLY & DIGITALLY
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 relative z-10">
                        <a 
                            href="tel:+919818706544" 
                            className="text-white/80 hover:text-[#ee6767] hover:scale-105 font-mono text-sm tracking-widest uppercase flex items-center gap-2.5 transition-all duration-300 group"
                        >
                            <Phone size={16} className="text-[#ee6767] transition-transform group-hover:rotate-12" />
                            <span>+91 9818706544</span>
                        </a>

                        <div className="flex items-center gap-6">
                            <a 
                                href="https://www.instagram.com/thecontentwalas/" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="text-white/80 hover:text-[#ee6767] hover:scale-105 font-mono text-xs tracking-widest uppercase flex items-center gap-1.5 transition-all duration-300"
                            >
                                <InstagramIcon size={18} className="opacity-90 hover:opacity-100 transition-opacity" />
                                <span>Instagram</span>
                            </a>
                            <span className="text-white/10 select-none">|</span>
                            <a 
                                href="https://www.threads.net/@thecontentwalas" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="text-white/80 hover:text-[#ee6767] hover:scale-105 font-mono text-xs tracking-widest uppercase flex items-center gap-1.5 transition-all duration-300 group"
                            >
                                <ThreadsIcon 
                                    size={24}
                                    className="opacity-90 group-hover:opacity-100 group-hover:text-[#ee6767] transition-all duration-300" 
                                    aria-hidden="true"
                                />
                                <span className="text-white/80 group-hover:text-[#ee6767] transition-all duration-300">Threads</span>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

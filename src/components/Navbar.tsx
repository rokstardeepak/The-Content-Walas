"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/brand-icons";
// @ts-ignore
import logoImg from "@/527914263_17850629772519785_6525334527680286419_n.jpg";

const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // Change background style when user scrolls down
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Detect if we are at the very bottom of the page
            const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
            if (isBottom) {
                setActiveSection(navLinks[navLinks.length - 1].id);
                return;
            }

            // Using bounding client rect for robust active section detection
            let currentActive = "home";
            const triggerPoint = 160;

            for (const link of navLinks) {
                const element = document.getElementById(link.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the section top has crossed/is close to triggerPoint, and it is still visible
                    if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
                        currentActive = link.id;
                    }
                }
            }
            setActiveSection(currentActive);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Call once on mount to set accurate starting active state
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            // Calculate height offset of navbar
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            <motion.header
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
                    scrolled 
                        ? "py-4 bg-[#030303]/80 backdrop-blur-xl border-b border-white/[0.04] shadow-[0_10px_30px_-15px_rgba(3,3,3,0.9)]" 
                        : "py-6 bg-transparent"
                }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    
                    {/* Logo - Flex 1 to push nav to center */}
                    <div className="flex-1 flex items-center">
                        <div 
                            onClick={() => scrollToSection("home")}
                            className="cursor-pointer flex items-center gap-3 group opacity-80 hover:opacity-100 transition-opacity"
                        >
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-[#ee6767]/40 transition-colors">
                                <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-brand-serif font-black tracking-[0.05em] text-white text-xl md:text-2xl uppercase select-none flex items-center gap-1">
                                THE <span className="font-brand-script normal-case text-[#ee6767] text-2xl md:text-3xl mx-0.5 tracking-normal drop-shadow-[0_0_10px_rgba(238,103,103,0.4)]">Content</span> WALAS<span className="text-[#ee6767]">.</span>
                            </span>
                        </div>
                    </div>

                    {/* Standard Desktop Navlinks - Centered */}
                    <nav className="hidden md:flex items-center gap-1.5 bg-white/[0.015] border border-white/[0.05] px-1 py-1 rounded-full backdrop-blur-md">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;
                            return (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`relative px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase font-sans transition-colors duration-300 cursor-pointer ${
                                        isActive ? "text-white" : "text-white/60 hover:text-white"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeGlow"
                                            className="absolute inset-0 bg-white/[0.05] border border-white/[0.1] rounded-full"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    {link.name}
                                </button>
                            );
                        })}
                    </nav>

                    {/* Right-most CTAs - Flex 1 to push nav to center */}
                    <div className="flex-1 hidden md:flex items-center justify-end gap-4">
                        <a 
                            href="https://www.instagram.com/thecontentwalas/" 
                            target="_blank" 
                            rel="noreferrer"
                            className="p-2 border border-[#ee6767]/20 rounded-full bg-white/[0.01] text-[#ee6767] scale-105 hover:text-white/60 hover:border-white/[0.05] hover:scale-100 transition-all duration-300"
                        >
                            <InstagramIcon size={15} />
                        </a>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="flex items-center gap-2 px-5 py-2.5 bg-[#ee6767] hover:bg-[#ee6767] active:bg-[#ee6767] text-white font-sans text-xs font-bold tracking-wider rounded-full shadow-[0_0_25px_rgba(238,103,103,0.35)] hover:shadow-[0_0_20px_rgba(238,103,103,0.2)] transition-all duration-300 cursor-pointer"
                        >
                            <span>Book Your Shoot</span>
                            <ArrowUpRight size={13} className="opacity-80" />
                        </button>
                    </div>

                    {/* Hamburger Button (Mobile Only) */}
                    <div className="flex md:hidden items-center gap-3">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 border border-white/10 rounded-lg bg-white/[0.02] text-white/80 active:text-white"
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                </div>
            </motion.header>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-x-0 top-[70px] z-40 bg-[#030303]/98 backdrop-blur-2xl border-b border-white/[0.08] py-8 px-6 md:hidden shadow-2xl flex flex-col gap-8 overflow-y-auto max-h-[calc(100vh-80px)]"
                    >
                        <div className="flex flex-col gap-5">
                            {navLinks.map((link, index) => {
                                const isActive = activeSection === link.id;
                                return (
                                    <motion.button
                                        key={link.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => scrollToSection(link.id)}
                                        className={`w-full text-left py-2 font-sans font-bold tracking-[0.1em] text-sm uppercase transition-colors flex items-center justify-between ${
                                            isActive ? "text-[#ee6767]" : "text-white/60 hover:text-white"
                                        }`}
                                    >
                                        <span>{link.name}</span>
                                        {isActive && <div className="w-1.5 h-1.5 bg-[#ee6767] rounded-full" />}
                                    </motion.button>
                                );
                            })}
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col gap-6"
                        >
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="w-full flex items-center justify-between gap-2 px-6 py-4 bg-[#ee6767] text-white font-sans text-xs font-black tracking-[0.15em] rounded-full shadow-[0_10px_20px_-10px_rgba(238,103,103,0.5)] active:scale-[0.98] transition-all uppercase"
                            >
                                <span>Book Your Shoot</span>
                                <ArrowUpRight size={16} />
                            </button>

                            <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
                                <span className="text-white/40 font-light text-[10px] font-sans tracking-widest uppercase">© The Content Walas</span>
                                <div className="flex items-center gap-3">
                                    <a 
                                        href="https://www.instagram.com/thecontentwalas/" 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="p-3 border border-white/10 rounded-full text-[#ee6767]"
                                    >
                                        <InstagramIcon size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

"use client"

import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { Sparkle } from "lucide-react"
import { WhatsAppIcon } from "@/components/ui/brand-icons"

export function HeroSpline() {
  return (
    <div id="home" className="relative flex min-h-[95vh] md:min-h-screen w-full flex-col items-center justify-center py-16 md:py-24 px-4 overflow-hidden">
      {/* Transparent black grid screen overlay for beautiful texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />
      
      {/* Centered content block directly over shader layout (no restricting panels) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center opacity-90">
        
        {/* Upper Brand Pill Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-black/80 px-4 py-1.5 backdrop-blur-md mb-8 animate-fade-in">
          <Sparkle className="w-3.5 h-3.5 text-[#ee6767]/80 fill-[#ee6767]/10 animate-pulse" />
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.18em] text-white/70 uppercase">
            ELEVATING BRANDS DELHI NCR • GURGAON
          </span>
        </div>

        {/* Massive Serif Main Headline with custom italic coral styling */}
        <h1 className="mb-6 text-white text-center text-3xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[1.1] sm:leading-[1.05] font-serif max-w-5xl mx-auto uppercase select-none">
          We don't just shoot.<br />
          We craft <span className="text-[#ee6767] italic font-medium tracking-tight">SCROLL-</span><br className="sm:hidden" />
          <span className="text-[#ee6767] italic font-medium tracking-tight">STOPPING</span> brands.
        </h1>

        {/* Copywritten high-converting description */}
        <p className="text-white/95 px-4 text-center text-sm md:text-base lg:text-[17px] max-w-2xl mx-auto font-medium leading-relaxed mb-10 tracking-wide">
          From luxury lookbooks to cinematic restaurant stories — we execute hyper-converting raw photography and reels designed strictly to make your D2C brand dominate social media.
        </p>
        
        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"> 
          <a href="#contact" className="inline-block z-10">
            <LiquidButton className="text-white border border-[#ee6767]/30 hover:border-[#ee6767] rounded-full font-sans text-xs font-bold tracking-widest px-8 py-4 bg-black/40 hover:bg-black/60 transition-all uppercase flex items-center gap-2 group" size="xl">
              <span>Book A Campaign Shoot</span>
              <span className="group-hover:translate-x-1.5 transition-transform inline-block duration-300">→</span>
            </LiquidButton>
          </a>
          <a href="#projects" className="inline-block z-10">
            <LiquidButton className="text-white border border-[#ee6767]/30 hover:border-[#ee6767] rounded-full font-sans text-xs font-bold tracking-widest px-8 py-4 bg-black/40 hover:bg-black/60 transition-all uppercase flex items-center gap-2 group" size="xl">
              <span>Explore Portfolio</span>
              <span className="group-hover:translate-x-1.5 transition-transform inline-block duration-300">→</span>
            </LiquidButton>
          </a>
        </div> 
      </div>

      <a 
        href="https://wa.me/919818706544?text=Hi!%20I'm%20interested%20in%20The%20Content%20Walas%20cinematic%20services.%20Can%20we%20have%20a%20chat?" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#25D366]/90 text-white p-4 rounded-full shadow-[0_5px_15px_rgba(37,211,102,0.3)] transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center" 
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={24} />
      </a>
    </div>
  )
}

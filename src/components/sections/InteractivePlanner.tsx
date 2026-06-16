"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, Check, User, Phone, Mail, MessageSquare, ChevronDown, RefreshCw } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/brand-icons";
import { Component as FluidDropdown, Category, categories as serviceCategories } from "@/components/ui/fluid-dropdown";

export function InteractivePlanner() {
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [selectedService, setSelectedService] = useState<Category>(serviceCategories[0]);
    const [message, setMessage] = useState<string>("");
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const service = selectedService.label;

    // Calculate completeness metric
    let completeness = 0;
    if (name.trim()) completeness += 34;
    if (phone.trim()) completeness += 33;
    if (message.trim()) completeness += 33;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!name.trim() || !phone.trim()) {
            setError("Name and Phone are required to submit an enquiry.");
            return;
        }

        setError("");
        
        const whatsappMessage = encodeURIComponent(
            `New Campaign Booking Inquiry\n` +
            `---------------------------------------\n` +
            `• Name: ${name}\n` +
            `• Phone: ${phone}\n` +
            `• Service: ${service}\n` +
            `• Campaign Vision: ${message || "No custom message provided."}`
        );

        // Open in new tab to avoid breaking the app session
        window.open(`https://wa.me/919818706544?text=${whatsappMessage}`, "_blank");
        
        setSubmitted(true);
    };

    const resetForm = () => {
        setName("");
        setPhone("");
        setSelectedService(serviceCategories[0]);
        setMessage("");
        setSubmitted(false);
        setError("");
    };

    return (
        <div id="contact" className="mt-10 mb-12 relative z-10 w-full text-center">
            {/* Heading Layer */}
            <div className="max-w-xl mx-auto mb-12">
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-[#ee6767] text-xs tracking-[0.2em] uppercase font-bold font-mono mb-3"
                >
                    Contact & Inquiry
                </motion.p>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold font-serif uppercase tracking-tight pb-2 mb-2 text-white/90 leading-tight"
                >
                    Configure Your Shoot
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-white/60 text-xs md:text-sm font-light leading-relaxed px-4"
                >
                    Let's discuss your next brand shoot. Fill out our interactive campaign planner and preview your live manifest before submitting.
                </motion.p>
            </div>

            {/* Configurator Enquiry Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="rounded-3xl max-w-4xl mx-auto p-5 md:p-7 relative overflow-hidden transition-all duration-500 hover:scale-[1.03] active:scale-[0.99] bg-white/[0.015] border border-white/[0.05] backdrop-blur-md"
            >
                {/* Glowing gold line effect inside card */}
                <div className="absolute top-0 left-1/4 w-96 h-[1px] bg-gradient-to-r from-transparent via-[#ee6767]/40 to-transparent blur-sm opacity-75" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* Form Left Column */}
                    <div className="lg:col-span-8 flex flex-col justify-between text-left">
                        
                        <div className="space-y-3 flex-1">
                            <div>
                                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ee6767] font-bold">
                                    CREATIVE DISCOVERY
                                </span>
                                <h3 className="font-bold text-lg md:text-xl font-serif uppercase tracking-tight text-white/90 mt-1">
                                    Submit Design Enquiry
                                </h3>
                            </div>

                            <AnimatePresence mode="wait">
                                {!submitted ? (
                                    <motion.form
                                        key="enquiry-form"
                                        onSubmit={handleSubmit}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="space-y-5"
                                    >
                                        {/* Name and Phone details in a 2-column grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {/* Client Name Input */}
                                            <div className="space-y-1.5">
                                                <label className="block text-[10px] font-mono tracking-wider text-white/80 uppercase">
                                                    Full Name *
                                                </label>
                                                <div className="relative">
                                                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30">
                                                        <User size={14} />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        placeholder="e.g. Johnathan Creed"
                                                        required
                                                        className="w-full bg-black/20 border border-white/[0.08] hover:border-[#ee6767] hover:ring-1 hover:ring-[#ee6767]/30 focus:border-[#ee6767] rounded-xl pl-9 pr-4 py-3 text-white text-sm outline-none transition-all duration-300 placeholder:text-white/20 focus:ring-1 focus:ring-[#ee6767]/30 font-light"
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone Number Input */}
                                            <div className="space-y-1.5">
                                                <label className="block text-[10px] font-mono tracking-wider text-white/80 uppercase">
                                                    Phone Number *
                                                </label>
                                                <div className="relative">
                                                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30">
                                                        <Phone size={14} />
                                                    </span>
                                                    <input
                                                        type="tel"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        placeholder="e.g. +91 99999-00000"
                                                        required
                                                        className="w-full bg-black/20 border border-white/[0.08] hover:border-[#ee6767] hover:ring-1 hover:ring-[#ee6767]/30 focus:border-[#ee6767] rounded-xl pl-9 pr-4 py-3 text-white text-sm outline-none transition-all duration-300 placeholder:text-white/20 focus:ring-1 focus:ring-[#ee6767]/30 font-light"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Dropdown for Services */}
                                        <div className="space-y-1.5 text-left">
                                            <label className="block text-[10px] font-mono tracking-wider text-white/80 uppercase">
                                                Select Architectural Service *
                                            </label>
                                            <FluidDropdown onSelect={setSelectedService} selected={selectedService} />
                                        </div>

                                        {/* Customized Message Box */}
                                        <div className="space-y-1.5">
                                            <label className="block text-[10px] font-mono tracking-wider text-white/80 uppercase">
                                                Customize Message / Spatial Vision
                                            </label>
                                            <div className="relative">
                                                <span className="absolute left-3.5 top-4 text-white/30">
                                                    <MessageSquare size={14} />
                                                </span>
                                                <textarea
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    placeholder="Specify design requirements, local context, timeline preference, or property parameters..."
                                                    rows={4}
                                                    className="w-full bg-black/20 border border-white/[0.08] hover:border-[#ee6767] hover:ring-1 hover:ring-[#ee6767]/30 focus:border-[#ee6767] rounded-xl pl-9 pr-4 py-3 text-white text-sm outline-none transition-all duration-300 placeholder:text-white/20 focus:ring-1 focus:ring-[#ee6767]/30 font-light min-h-[110px] resize-none"
                                                />
                                            </div>
                                        </div>

                                        {error && (
                                            <p className="text-red-400 text-xs font-mono tracking-wide">{error}</p>
                                        )}

                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                className="w-full px-8 py-4 bg-[#ee6767]/90 text-white scale-[1.02] shadow-[0_0_40px_rgba(238,103,103,0.4)] hover:bg-[#ee6767] hover:scale-100 hover:shadow-[0_0_35px_rgba(238,103,103,0.25)] active:scale-98 active:bg-[#ee6767] font-bold text-sm rounded-full tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                                            >
                                                <Send size={14} className="mr-1" />
                                                <span>Send Design Inquiry</span>
                                            </button>
                                        </div>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success-card"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8 px-4 space-y-4"
                                    >
                                        <div className="w-16 h-16 bg-[#ee6767]/10 border border-[#ee6767]/30 rounded-full flex items-center justify-center text-[#ee6767] mx-auto mb-2 shadow-[0_0_20px_rgba(238,103,103,0.2)]">
                                            <Check size={28} className="stroke-[2.5]" />
                                        </div>
                                        <h4 className="text-xl md:text-2xl font-bold text-white font-serif uppercase tracking-tight">Inquiry Prepared!</h4>
                                        <p className="text-white text-sm font-light max-w-sm mx-auto leading-relaxed">
                                            Your request has been formatted. Click below to chat with us on WhatsApp and confirm your booking.
                                        </p>
                                        <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 justify-center max-w-sm mx-auto">
                                            <a
                                                href={`https://wa.me/919818706544?text=${encodeURIComponent("New Campaign Booking Inquiry\n---------------------------------------\nName: " + name + "\nPhone: " + phone + "\nService: " + service)}`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-full sm:w-auto px-6 py-3 bg-[#0bd28e] text-white hover:bg-[#0bd28e]/80 hover:scale-[1.02] active:scale-[0.98] font-bold text-xs rounded-full tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_20px_-10px_rgba(11,210,142,0.3)]"
                                            >
                                                <WhatsAppIcon size={16} />
                                                <span className="whitespace-nowrap">Open WhatsApp Chat</span>
                                            </a>
                                            <button
                                                onClick={resetForm}
                                                className="w-full sm:w-auto px-6 py-3 border border-white/20 bg-white/[0.02] text-white/80 hover:border-white/[0.08] hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] font-bold text-xs rounded-full tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                                            >
                                                <RefreshCw size={12} />
                                                <span className="whitespace-nowrap">Restart</span>
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Persistent Right Column (Studio Manifest Board) */}
                    <div className="lg:col-span-4 bg-white/[0.01] border-t lg:border-t-0 lg:border-l border-white/[0.06] pt-8 lg:pt-0 lg:pl-8 flex flex-col justify-between text-left space-y-6">
                        
                        {/* Manifest Title */}
                        <div className="space-y-1 text-left">
                            <div className="flex items-center gap-2 text-[#ee6767]/70">
                                <Sparkles size={14} className="animate-pulse" />
                                <span className="font-mono text-[10px] tracking-[0.25em] font-black uppercase">LIVE PREVIEW</span>
                            </div>
                            <h4 className="font-bold font-serif uppercase text-white/90 text-base tracking-tight">Studio Manifest</h4>
                            <p className="text-[11px] text-white/50 font-light">As you type, your details are mapped dynamically onto our manifest below.</p>
                        </div>

                        {/* Manifest Spec Fields */}
                        <div className="flex-1 space-y-4 pt-2">
                            {/* Client Name Spec Card */}
                            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] transition-all">
                                <span className="block font-mono text-[9px] text-white/80 tracking-widest uppercase mb-1">Client Name</span>
                                <div className="flex items-center gap-2">
                                    <div className={`w-1.5 h-1.5 rounded-full ${name.trim() ? "bg-[#ee6767] animate-pulse" : "bg-white/10"}`} />
                                    <span className={`text-xs ${name.trim() ? "text-white font-medium" : "text-white/30 font-light italic"}`}>
                                        {name.trim() ? name : "Awaiting Name..."}
                                    </span>
                                </div>
                            </div>

                            {/* Contact Details Card */}
                            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] transition-all">
                                <span className="block font-mono text-[9px] text-white/80 tracking-widest uppercase mb-1">Contact Reference</span>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-1.5 h-1.5 rounded-full ${phone.trim() ? "bg-[#ee6767]" : "bg-white/10"}`} />
                                        <span className={`text-xs ${phone.trim() ? "text-white" : "text-white/30 font-light italic"}`}>
                                            {phone.trim() ? phone : "Awaiting Phone..."}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Service Design Selection Card */}
                            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] transition-all">
                                <span className="block font-mono text-[9px] text-white/80 tracking-widest uppercase mb-1">Requested Service</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: selectedService.color }} />
                                    <span className="text-xs font-semibold tracking-wide text-white/90">
                                        {service}
                                    </span>
                                </div>
                            </div>

                            {/* Custom Message Snippet Card */}
                            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] transition-all">
                                <span className="block font-mono text-[9px] text-white/80 tracking-widest uppercase mb-1">Campaign Details</span>
                                <div className="flex items-start gap-2">
                                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${message.trim() ? "bg-[#ee6767]" : "bg-white/10"}`} />
                                    <p className={`text-xs ${message.trim() ? "text-white/80 line-clamp-2" : "text-white/30 font-light italic"}`}>
                                        {message.trim() ? message : "Awaiting details..."}
                                    </p>
                                </div>
                            </div>

                            {/* Manifest Form Completeness Rate */}
                            <div className="p-4 rounded-xl bg-gradient-to-r from-[#ee6767]/10 to-transparent border border-[#ee6767]/20 space-y-2">
                                <div className="flex justify-between items-center text-[10px] font-mono">
                                    <span className="text-white/40 uppercase tracking-widest">Inquiry Completeness</span>
                                    <span className="text-[#ee6767] font-bold">
                                        {completeness >= 100 ? "100" : completeness}% {completeness >= 100 ? "Ready to Send" : "Awaiting Info"}
                                    </span>
                                </div>
                                <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                                    <motion.div 
                                        className="h-full bg-[#ee6767]"
                                        animate={{ 
                                            width: `${completeness > 0 ? (completeness >= 100 ? 100 : completeness) : 5}%` 
                                        }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </motion.div>
        </div>
    );
}

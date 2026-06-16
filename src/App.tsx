/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "@/components/Navbar";
import { HeroSpline } from "@/components/HeroSpline";
import { AboutSection } from "@/components/sections/About";
import { ServicesSection } from "@/components/sections/Services";
import { PortfolioSection } from "@/components/sections/Portfolio";
import { ContactSection } from "@/components/sections/Contact";
import Footer4Col from "@/components/ui/footer-column";
import { WebGLShader } from "@/components/ui/web-gl-shader";

export default function App() {
  return (
    <main className="min-h-screen text-white relative font-sans overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <WebGLShader />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>
      <Navbar />
      <div className="relative z-10">
        <div className="pt-20 md:pt-0">
          <HeroSpline />
          <AboutSection />
          <PortfolioSection />
          <ServicesSection />
          <ContactSection />
          <Footer4Col />
        </div>
      </div>
    </main>
  );
}

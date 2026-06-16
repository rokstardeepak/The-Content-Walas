import {
  Facebook,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from 'lucide-react';
import { WhatsAppIcon, ThreadsIcon, InstagramIcon } from './brand-icons';
// @ts-ignore
import logoImg from "@/527914263_17850629772519785_6525334527680286419_n.jpg";

const data = {
  facebookLink: '#',
  instaLink: 'https://instagram.com/thecontentwalas/',
  twitterLink: '#',
  githubLink: '#',
  threadsLink: 'https://www.threads.net/@thecontentwalas',
  whatsappLink: 'https://wa.me/919818706544',
  services: {
    videography: '#services',
    photography: '#services',
    marketing: '#services',
    cinematography: '#services',
  },
  about: {
    history: '#about',
    team: '#about',
    handbook: '#',
    careers: '#',
  },
  help: {
    faqs: '#',
    support: '#',
    livechat: '#',
  },
  contact: {
    phone: '+91 9818706544',
    address: 'Delhi NCR, India',
  },
  company: {
    name: 'The Content Walas',
    description:
      'We create cinematic visual narratives and scroll-stopping reels designed to drive high-converting results for fashion, F&B, and lifestyle brands.',
    logo: logoImg,
  },
};

const socialLinks = [
  { icon: InstagramIcon, label: 'Instagram', href: data.instaLink },
  { icon: ThreadsIcon, label: 'Threads', href: data.threadsLink },
  { icon: WhatsAppIcon, label: 'WhatsApp', href: data.whatsappLink },
];

const aboutLinks = [
  { text: 'Our Philosophy', href: data.about.history },
  { text: 'Meet the Team', href: data.about.team },
  { text: 'Workflow', href: '#services' },
  { text: 'Collaborate', href: '#contact' },
];

const serviceLinks = [
  { text: 'Fashion Campaigns', href: data.services.videography },
  { text: 'F&B Cinematography', href: data.services.photography },
  { text: 'Social Media Strategy', href: data.services.marketing },
  { text: 'Premium Edits', href: data.services.cinematography },
];

const helpfulLinks = [
  { text: 'FAQs', href: data.help.faqs },
  { text: 'Support', href: data.help.support },
  { text: 'Inquiry Manifest', href: '#contact', hasIndicator: true },
];

const contactInfo = [
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer className="bg-transparent w-full">
      <div className="mx-auto max-w-screen-xl px-6 pt-10 pb-12 lg:pt-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-[#ee6767]/40 transition-colors">
                <img
                  src={data.company.logo}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-black font-brand-serif uppercase tracking-tight">
                THE <span className="font-brand-script normal-case text-[#ee6767] mx-0.5">Content</span> WALAS
              </span>
            </div>

            <p className="text-white/50 mt-6 max-w-md leading-relaxed font-light">
              {data.company.description}
            </p>

            <ul className="mt-8 flex gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/60 hover:text-[#ee6767] hover:border-[#ee6767]/40 transition-all duration-300"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-2">
            <div className="text-left">
              <p className="text-sm font-bold uppercase tracking-widest text-white/90 mb-8">About Us</p>
              <ul className="space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-white/50 hover:text-[#ee6767] transition-colors duration-300 font-light flex items-center gap-1 group"
                      href={href}
                    >
                      {text}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-y-0.5 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <p className="text-sm font-bold uppercase tracking-widest text-white/90 mb-8">Services</p>
              <ul className="space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-white/50 hover:text-[#ee6767] transition-colors duration-300 font-light"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <p className="text-sm font-bold uppercase tracking-widest text-white/90 mb-8">Helpful</p>
              <ul className="space-y-4 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className={`${
                        hasIndicator
                          ? 'group flex items-center gap-1.5'
                          : 'text-white/50 hover:text-[#ee6767] transition-colors duration-300 font-light'
                      }`}
                    >
                      <span className={`${hasIndicator ? 'text-white/90 font-medium' : 'text-white/50 hover:text-[#ee6767]'}`}>
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="bg-[#ee6767] absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-[#ee6767] relative inline-flex size-2 rounded-full" />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <p className="text-sm font-bold uppercase tracking-widest text-white/90 mb-8">Contact</p>
              <ul className="space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-start gap-3 group"
                      href={isAddress ? "#" : `tel:${text}`}
                    >
                      <Icon className="text-[#ee6767] size-4 shrink-0 transition-transform group-hover:scale-110" />
                      {isAddress ? (
                        <address className="text-white/50 -mt-0.5 flex-1 not-italic transition-colors group-hover:text-white/80 font-light">
                          {text}
                        </address>
                      ) : (
                        <span className="text-white/50 flex-1 transition-colors group-hover:text-white/80 font-light">
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-mono tracking-widest uppercase">
            © 2026 {data.company.name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 pt-2 group">
             <span className="text-white/60 text-xs uppercase tracking-widest">Designed with</span>
             <span className="text-[#ee6767] text-lg mx-1 animate-pulse">❤</span>
             <span className="text-white/60 text-xs uppercase tracking-widest mr-1">by</span>
             <a href="https://deepakkumaragency.netlify.app" target="_blank" rel="noopener noreferrer" className="text-[#ee6767] font-black text-sm hover:scale-110 transition-transform cursor-pointer">Deepak</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

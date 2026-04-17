"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B1F3A] pt-32 pb-12 overflow-hidden">
      {/* 🏛️ Subtle Architectural Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C59D2A]/40 to-transparent" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#C59D2A]/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 🔹 Top Section: Newsletter (Premium Overlay Style) */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24 p-10 md:p-16 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-md">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#C59D2A]" />
              <span className="text-[#C59D2A] text-[10px] font-black uppercase tracking-[0.4em]">Stay Informed</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 italic">
              Join the ICT Cambridge <span className="text-[#C59D2A] not-italic">Network</span>
            </h3>
            <p className="text-gray-400 max-w-xl font-medium text-sm leading-relaxed">
              Receive academic updates, institutional news, and priority admission notifications directly to your inbox.
            </p>
          </div>
          <div className="lg:col-span-5 flex items-center">
            <div className="relative w-full group">
              <input 
                type="email" 
                placeholder="Institutional Email" 
                className="w-full bg-transparent border-b border-white/20 py-4 px-2 text-white outline-none focus:border-[#C59D2A] transition-all placeholder:text-white/20 font-medium"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#C59D2A] font-black text-xs uppercase tracking-[0.2em] hover:text-white transition-colors duration-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* 🔹 Middle Section: Navigation & Identity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex flex-col">
              <span className="font-serif font-bold tracking-tighter text-3xl text-white">
                ICT <span className="text-[#C59D2A]">CAMBRIDGE</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-gray-500 mt-1">
                International School
              </span>
            </div>
            <p className="text-gray-400 text-sm font-medium leading-relaxed pr-8">
              An institution dedicated to the holistic development of students through 
              the gold-standard Cambridge curriculum and modern digital innovation.
            </p>
            <div className="flex gap-6">
              {['FB', 'LN', 'IG', 'TW'].map((social) => (
                <Link key={social} href="#" className="text-[#C59D2A] text-[10px] font-black tracking-widest hover:text-white transition-colors">
                  {social}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Sets */}
          {[
            {
              title: "Pathways",
              links: ["Primary Years", "O Levels / IGCSE", "A Levels", "Hybrid Classes", "LMS Portal"]
            },
            {
              title: "Institution",
              links: ["About Us", "Academics", "Trial / Demo Classes", "Policies", "Contact"]
            }
          ].map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-white font-black mb-8 uppercase tracking-[0.3em] text-[10px] flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59D2A]" />
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-all text-[13px] font-medium tracking-wide block hover:translate-x-1 duration-300">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Details Card */}
          <div className="lg:col-span-4 bg-white/[0.02] p-8 rounded-3xl border border-white/5 self-start">
            <h4 className="text-white font-black mb-8 text-[10px] uppercase tracking-[0.3em]">Global Support</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-[#C59D2A] text-sm">📍</span>
                <p className="text-gray-400 text-[13px] font-medium leading-relaxed italic">Sector H-8, Islamabad, Pakistan</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#C59D2A] text-sm">📞</span>
                <p className="text-gray-400 text-[13px] font-medium tracking-wider">+92 51 123 4567</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#C59D2A] text-sm">✉️</span>
                <p className="text-gray-400 text-[13px] font-medium tracking-wide">info@ictcambridge.edu.pk</p>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Bottom Bar: Compliance */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-[9px] uppercase tracking-[0.4em] font-black">
            © {currentYear} ICT Cambridge International. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            {["Privacy", "Terms", "Legal"].map((item) => (
              <Link key={item} href="#" className="text-gray-600 hover:text-[#C59D2A] text-[9px] uppercase tracking-[0.4em] font-black transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-white overflow-hidden">
      {/* 🏛️ Background Architectural Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-[#C59D2A]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-[#0B1F3A]/[0.01] skew-x-12 translate-x-20" />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          {/* 🔹 LEFT: THE IMAGE COMPOSITION (Premium Frame Style) */}
          <div className="lg:col-span-6 relative">
            {/* Main Image with thick editorial border */}
            <div className="relative z-10 w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(11,31,58,0.2)] border-[12px] border-white group">
              <div className="absolute inset-0 bg-[#0B1F3A]/10 group-hover:bg-transparent transition-all duration-700" />
              <img 
                src="/thomas-park-w9i7wMaM3EE-unsplash.jpg" 
                alt="ICT Cambridge Main Campus"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            {/* Floating Secondary Image Card */}
            <div className="absolute -bottom-12 -right-6 z-20 w-72 h-72 rounded-[2rem] overflow-hidden shadow-2xl border-[10px] border-white hidden md:block group">
              <div className="absolute inset-0 bg-[#C59D2A]/10 group-hover:bg-transparent transition-all duration-500 z-10" />
              <img 
                src="/stem-t4l--PnSpCHYKsw-unsplash.jpg" 
                alt="AI Lab Learning"
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-0 inset-x-0 bg-[#0B1F3A] p-4 text-center z-20">
                <span className="text-[#C59D2A] font-black text-[10px] uppercase tracking-[0.3em]">
                  The Innovation Hub
                </span>
              </div>
            </div>

            {/* Experience Year Badge */}
            <div className="absolute top-12 -left-10 z-30 bg-[#C59D2A] text-white p-8 rounded-2xl shadow-xl -rotate-6">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">Established</p>
              <p className="text-4xl font-serif font-bold italic leading-none">2001</p>
            </div>
          </div>

          {/* 🔹 RIGHT: EDITORIAL CONTENT */}
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4">
                <span className="w-12 h-[2px] bg-[#C59D2A]" />
                <span className="text-[#C59D2A] text-[11px] font-black uppercase tracking-[0.5em]">
                  The Institution
                </span>
              </div>
              
              <h2 className="text-5xl md:text-8xl font-serif font-bold text-[#0B1F3A] leading-[0.9] tracking-tighter">
                Nurturing <br />
                <span className="italic font-medium text-gray-400">Global Leaders.</span>
              </h2>

              <p className="text-gray-500 text-xl font-medium leading-relaxed max-w-xl">
                ICT Cambridge School is more than an institution; it is a 
                <span className="text-[#0B1F3A] font-bold"> premier launchpad </span> 
                for future leaders. We blend a century of British tradition with 
                <span className="text-[#C59D2A] font-bold italic"> AI-ready pedagogy </span>
                to sculpt minds for the 21st century.
              </p>
            </div>

            {/* Featured Accolades Grid */}
            <div className="grid sm:grid-cols-2 gap-10 border-t border-gray-100 pt-10">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C59D2A]" />
                  <h4 className="font-black text-[11px] uppercase tracking-widest text-[#0B1F3A]">Cambridge Certified</h4>
                </div>
                <p className="text-sm text-gray-400 font-medium pl-5 border-l border-gray-100">Official Partner for IGCSE and International A-Levels.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C59D2A]" />
                  <h4 className="font-black text-[11px] uppercase tracking-widest text-[#0B1F3A]">Futuristic Infrastructure</h4>
                </div>
                <p className="text-sm text-gray-400 font-medium pl-5 border-l border-gray-100">Equipped with state-of-the-art Robotics and AI Research Labs.</p>
              </div>
            </div>

            {/* Performance Stats & CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12 pt-10 border-t border-gray-100">
              <div className="group">
                <span className="block text-5xl font-serif font-bold text-[#0B1F3A] group-hover:text-[#C59D2A] transition-colors">25+</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-black">Years of Legacy</span>
              </div>
              
              <div className="group">
                <span className="block text-5xl font-serif font-bold text-[#0B1F3A] group-hover:text-[#C59D2A] transition-colors">100%</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-black">Academic Results</span>
              </div>

              <Link 
                href="/history" 
                className="inline-flex items-center gap-3 text-[#0B1F3A] font-black text-[11px] uppercase tracking-[0.2em] group hover:text-[#C59D2A] transition-colors"
              >
                Our Full History 
                <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#C59D2A] group-hover:bg-[#C59D2A] group-hover:text-white transition-all">
                  →
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
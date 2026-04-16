"use client";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[3.5rem] bg-[#0B1F3A] shadow-[0_50px_100px_-20px_rgba(11,31,58,0.3)]">
          
          {/* 🏛️ Editorial Watermark */}
          <div className="absolute top-0 right-0 text-[15rem] font-black text-white/5 select-none pointer-events-none tracking-tighter leading-none translate-x-10 -translate-y-10">
            2026
          </div>

          {/* Background Decorative Accents */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C59D2A]/5 skew-x-12 translate-x-20 hidden lg:block" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#C59D2A]/10 rounded-full blur-[100px]" />

          <div className="relative z-10 grid lg:grid-cols-12 items-stretch">
            
            {/* 🔹 MAIN CONTENT SECTION */}
            <div className="lg:col-span-7 p-10 md:p-20">
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="w-8 h-[1px] bg-[#C59D2A]" />
                <span className="text-[#C59D2A] text-[10px] font-black uppercase tracking-[0.5em]">
                  Enrollment Phase I
                </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[0.9] tracking-tighter mb-8">
                Secure Your Child’s <br />
                <span className="italic font-medium text-gray-400">Future Today.</span>
              </h2>
              
              <p className="text-gray-400 text-xl font-medium mb-12 max-w-lg leading-relaxed">
                Join an elite community of scholars and leaders. 
                Applications for the <span className="text-white">2026 Academic Session</span> are now being prioritized for early review.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-12 py-6 bg-[#C59D2A] text-white font-black text-xs uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-[#0B1F3A] transition-all duration-500 shadow-xl">
                  Begin Application
                </button>
                <button className="px-12 py-6 border border-white/10 text-white font-black text-xs uppercase tracking-[0.3em] rounded-full hover:bg-white/5 transition-all duration-500">
                  Request Prospectus
                </button>
              </div>
            </div>

            {/* 🔹 SUPPORT & DETAILS (Bento-Style Sidebar) */}
            <div className="lg:col-span-5 bg-white/[0.03] backdrop-blur-md p-10 md:p-20 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center">
              <h3 className="text-white font-serif font-bold text-3xl mb-10 italic">Consultation Hub</h3>
              
              <div className="space-y-10">
                <div className="group flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-[#C59D2A]/30 flex items-center justify-center text-[#C59D2A] text-xl group-hover:bg-[#C59D2A] group-hover:text-white transition-all duration-500">
                    🏛️
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase font-black tracking-[0.3em] mb-1">Admissions Helpline</p>
                    <p className="text-white text-lg font-bold tracking-tight">+92 51 123 4567</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-[#C59D2A]/30 flex items-center justify-center text-[#C59D2A] text-xl group-hover:bg-[#C59D2A] group-hover:text-white transition-all duration-500">
                    📅
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase font-black tracking-[0.3em] mb-1">Campus Tour</p>
                    <p className="text-white text-lg font-bold tracking-tight">Mon — Fri | 09:00 - 14:00</p>
                  </div>
                </div>

                <div className="pt-10 border-t border-white/5">
                  <div className="bg-[#C59D2A]/10 border border-[#C59D2A]/20 p-6 rounded-2xl">
                    <p className="text-[#C59D2A] text-xs leading-relaxed font-bold italic">
                      * Note: Limited seats remain for the O/A Level high-achiever scholarship programs. 
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
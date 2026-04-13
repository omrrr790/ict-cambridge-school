"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#001529] shadow-2xl shadow-blue-900/20"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#8EE8D8]/10 skew-x-12 translate-x-10 hidden lg:block" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />

          <div className="relative z-10 grid lg:grid-cols-5 items-center">
            
            {/* Content Section */}
            <div className="lg:col-span-3 p-10 md:p-16">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#8EE8D8] uppercase border border-[#8EE8D8]/30 rounded-full"
              >
                Enrollment Phase I
              </motion.span>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-6">
                Secure Your Child’s <br />
                <span className="italic text-[#8EE8D8]">Future Today.</span>
              </h2>
              
              <p className="text-slate-400 text-lg mb-10 max-w-md">
                Join a community of scholars, innovators, and leaders. 
                Applications for the 2026 Academic Session are now being prioritized.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-10 py-4 bg-[#8EE8D8] text-[#001529] font-bold rounded-full hover:shadow-[0_0_20px_rgba(142,232,216,0.4)] transition-all transform hover:-translate-y-1 active:scale-95">
                  Start Online Application
                </button>
                <button className="px-10 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all">
                  Download Prospectus
                </button>
              </div>
            </div>

            {/* Support / Help Section (The "Bento" Side) */}
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm h-full p-10 md:p-16 border-l border-white/10 flex flex-col justify-center">
              <h3 className="text-white font-bold text-xl mb-6">Need Assistance?</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#8EE8D8]/20 flex items-center justify-center text-[#8EE8D8] text-xl">
                    📞
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">Admissions Helpline</p>
                    <p className="text-white font-semibold">+92 51 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#8EE8D8]/20 flex items-center justify-center text-[#8EE8D8] text-xl">
                    📅
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase font-bold tracking-widest">Campus Tour</p>
                    <p className="text-white font-semibold">Monday — Friday</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-slate-500 text-xs leading-relaxed italic">
                    * Limited seats available for O/A Level scholarship programs.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-white pt-32 md:pt-40 pb-24 px-6 overflow-hidden">
      
      {/* 🔥 Architectural Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[#0B1F3A]/[0.02] skew-x-0 lg:skew-x-[-12deg] lg:translate-x-20" />
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-[#C59D2A]/5 blur-[100px] md:blur-[150px] rounded-full -top-40 -left-40" 
        />
        <div className="absolute inset-0" 
          style={{
            backgroundImage: "radial-gradient(#0B1F3A 0.5px, transparent 0.5px)",
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>

      <div className="container mx-auto">
        {/* Changed items-start to items-center on mobile for better balance */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center lg:items-start">

          {/* 🔹 LEFT CONTENT */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full border border-[#C59D2A]/20 bg-[#C59D2A]/5 text-[#0B1F3A] text-[10px] font-black tracking-[0.3em] uppercase"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C59D2A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C59D2A]"></span>
              </span>
              Online + Hybrid Cambridge Hub
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif font-bold text-[#0B1F3A] leading-[1.1] lg:leading-[0.9] tracking-tighter">
              Legacy of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59D2A] to-[#A8841F]">
                Excellence.
              </span>
            </h1>

            <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
              Cambridge-focused academics with flexible 
              <span className="text-[#0B1F3A] font-bold"> online, on-campus, and hybrid </span> 
              learning support for modern families.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <button className="px-10 py-5 bg-[#0B1F3A] text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-full shadow-2xl shadow-[#0B1F3A]/30 hover:bg-[#C59D2A] transition-all duration-500">
                Start Trial Class
              </button>
              <button className="px-10 py-5 border-2 border-gray-100 text-[#0B1F3A] font-black text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-gray-50 transition-all">
                Download Prospectus
              </button>
            </div>

            {/* Core Values / Stats Grid */}
            <div className="pt-12 grid grid-cols-2 gap-y-10 border-t border-gray-100">
              {[
                { label: "A* - B Grade Ratio", val: "98%" },
                { label: "Student-Teacher Ratio", val: "1:12" },
                { label: "Digital Integration", val: "100%" },
                { label: "Global Rankings", val: "Top 10" },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <h4 className="text-3xl md:text-4xl font-serif font-bold text-[#0B1F3A] group-hover:text-[#C59D2A] transition-colors">{stat.val}</h4>
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 🔹 RIGHT CONTENT: MASONRY IMAGE SYSTEM */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[500px] lg:min-h-[700px] mt-16 lg:mt-0">
            
            {/* Main Center Image */}
            <motion.div 
              style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? y1 : 0 }}
              className="relative w-[280px] md:w-[350px] aspect-[3/4] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[8px] lg:border-[10px] border-white z-20"
            >
              <Image src="/image 11.webp" fill className="object-cover" alt="Education" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
              <div className="absolute bottom-6 lg:bottom-8 left-6 lg:left-8 text-white">
                <p className="text-[8px] uppercase tracking-[0.3em] font-bold text-[#C59D2A]">Primary Wing</p>
                <h5 className="text-lg lg:text-xl font-serif font-bold italic">Curious Minds.</h5>
              </div>
            </motion.div>

            {/* Secondary Floating Image - Repositioned for mobile */}
            <motion.div 
              style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? y2 : 0 }}
              className="absolute -top-10 -right-4 lg:top-0 lg:right-10 w-[160px] md:w-[240px] aspect-square rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-2xl border-[6px] lg:border-[8px] border-white z-10"
            >
              <Image src="/image 12.avif" fill className="object-cover brightness-90" alt="Lab" />
            </motion.div>

            {/* Third Vertical Image - Adjusted for mobile overlap */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -bottom-10 -right-4 lg:bottom-0 lg:right-0 w-[140px] md:w-[200px] h-[200px] md:h-[300px] rounded-[1.5rem] overflow-hidden shadow-2xl border-[5px] lg:border-[6px] border-white z-30"
            >
              <Image src="/stem-t4l--PnSpCHYKsw-unsplash.jpg" fill className="object-cover" alt="Sports" />
            </motion.div>

            {/* Floating Glass Data Card - Hidden on very small screens or made smaller */}
            <motion.div 
              whileHover={{ y: -15, scale: 1.02 }}
              className="absolute top-1/4 -left-6 lg:-left-12 p-5 lg:p-10 bg-white/80 backdrop-blur-2xl rounded-[1.5rem] lg:rounded-[2.5rem] shadow-xl border border-white/50 z-50 max-w-[160px] lg:max-w-[260px]"
            >
              <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-[#C59D2A] flex items-center justify-center text-white mb-4 lg:mb-6">
                <span className="text-lg">★</span>
              </div>
              <div className="space-y-1">
                <p className="text-[#C59D2A] text-[8px] font-black uppercase tracking-[0.4em] mb-1">Accreditation</p>
                <p className="text-[#0B1F3A] text-[10px] lg:text-xs font-black leading-tight uppercase tracking-[0.1em]">
                  Official Cambridge Partner
                </p>
              </div>
            </motion.div>

            {/* Success Rate Badge */}
            <motion.div 
              className="absolute -bottom-16 left-0 lg:-bottom-12 lg:left-12 p-5 lg:p-8 bg-[#0B1F3A] text-white rounded-[1.5rem] lg:rounded-[2rem] shadow-2xl z-40 lg:-rotate-3 border border-white/10"
            >
              <div className="flex items-center gap-4 lg:gap-5">
                <div className="relative flex items-center justify-center">
                  <svg className="w-10 h-10 lg:w-14 lg:h-14 transform -rotate-90">
                    <circle cx="50%" cy="50%" r="40%" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-white/10" />
                    <circle cx="50%" cy="50%" r="40%" stroke="#C59D2A" strokeWidth="2" fill="transparent" strokeDasharray="100" strokeDashoffset="30" />
                  </svg>
                  <span className="absolute text-[8px] lg:text-[10px] font-black text-[#C59D2A]">94%</span>
                </div>
                <div>
                  <p className="text-[7px] lg:text-[9px] font-black uppercase tracking-[0.3em] text-[#C59D2A]">Success Rate</p>
                  <p className="text-sm lg:text-xl font-serif font-bold tracking-tighter leading-tight">Top-Tier Placements</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
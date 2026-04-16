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
    <section ref={containerRef} className="relative min-h-screen bg-white pt-40 pb-24 px-6 overflow-hidden">
      
      {/* 🔥 Architectural Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0B1F3A]/[0.02] skew-x-[-12deg] translate-x-20" />
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute w-[800px] h-[800px] bg-[#C59D2A]/5 blur-[150px] rounded-full -top-40 -left-40" 
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
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* 🔹 LEFT CONTENT: Information Rich */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full border border-[#C59D2A]/20 bg-[#C59D2A]/5 text-[#0B1F3A] text-[10px] font-black tracking-[0.3em] uppercase"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C59D2A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C59D2A]"></span>
              </span>
              Cambridge International Hub
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#0B1F3A] leading-[0.9] tracking-tighter">
              Legacy of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59D2A] to-[#A8841F]">
                Excellence.
              </span>
            </h1>

            <p className="text-gray-500 text-xl font-medium leading-relaxed max-w-md">
              Combining a century of British academic tradition with cutting-edge 
              <span className="text-[#0B1F3A] font-bold"> AI-integrated </span> 
              learning ecosystems for tomorrow's leaders.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="px-10 py-5 bg-[#0B1F3A] text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-full shadow-2xl shadow-[#0B1F3A]/30 hover:bg-[#C59D2A] transition-all duration-500">
                Enroll Online
              </button>
              <button className="px-10 py-5 border-2 border-gray-100 text-[#0B1F3A] font-black text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-gray-50 transition-all">
                Download Prospectus
              </button>
            </div>

            {/* Core Values / Stats Grid */}
            <div className="pt-12 grid grid-cols-2 gap-y-10 border-t border-gray-100">
              <div className="group">
                <h4 className="text-4xl font-serif font-bold text-[#0B1F3A] group-hover:text-[#C59D2A] transition-colors">98%</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">A* - B Grade Ratio</p>
              </div>
              <div className="group">
                <h4 className="text-4xl font-serif font-bold text-[#0B1F3A] group-hover:text-[#C59D2A] transition-colors">1:12</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">Student-Teacher Ratio</p>
              </div>
              <div className="group">
                <h4 className="text-4xl font-serif font-bold text-[#0B1F3A] group-hover:text-[#C59D2A] transition-colors">100%</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">Digital Integration</p>
              </div>
              <div className="group">
                <h4 className="text-4xl font-serif font-bold text-[#0B1F3A] group-hover:text-[#C59D2A] transition-colors">Top 10</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">Global Rankings</p>
              </div>
            </div>
          </div>

          {/* 🔹 RIGHT CONTENT: UNIQUE MASONRY IMAGE SYSTEM */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[700px]">
            
            {/* Main Center Image (The Anchor) */}
            <motion.div 
              style={{ y: y1 }}
              className="relative w-[350px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[10px] border-white z-20"
            >
              <Image 
                src="/stem-t4l--PnSpCHYKsw-unsplash.jpg" 
                fill 
                className="object-cover" 
                alt="Education" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-[8px] uppercase tracking-[0.3em] font-bold text-[#C59D2A]">Primary Wing</p>
                <h5 className="text-xl font-serif font-bold italic">Curious Minds.</h5>
              </div>
            </motion.div>

            {/* Secondary Floating Image */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute top-0 right-10 w-[240px] aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-white z-10"
            >
              <Image 
                src="/stem-t4l--PnSpCHYKsw-unsplash.jpg" 
                fill 
                className="object-cover brightness-90" 
                alt="Lab" 
              />
            </motion.div>

            {/* Third Vertical Image */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="absolute bottom-0 right-0 w-[200px] h-[300px] rounded-[1.5rem] overflow-hidden shadow-2xl border-[6px] border-white z-30"
            >
              <Image 
                src="/stem-t4l--PnSpCHYKsw-unsplash.jpg" 
                fill 
                className="object-cover" 
                alt="Sports" 
              />
            </motion.div>

            {/* Floating Glass Data Card */}
            <motion.div 
  whileHover={{ y: -15, scale: 1.02 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="absolute top-1/4 -left-12 p-10 bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50 z-50 max-w-[260px]"
>
  {/* Gold Emblem */}
  <div className="w-12 h-12 rounded-full bg-[#C59D2A] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#C59D2A]/30">
    <span className="text-xl">★</span>
  </div>

  {/* Typography */}
  <div className="space-y-1">
    <p className="text-[#C59D2A] text-[9px] font-black uppercase tracking-[0.4em] mb-2">
      Accreditation
    </p>
    <p className="text-[#0B1F3A] text-xs font-black leading-[1.8] uppercase tracking-[0.2em]">
      Official Cambridge <br /> 
      Partner <span className="text-gray-400">Institute</span>
    </p>
  </div>
  
  {/* Bottom Decorative Line */}
  <div className="mt-6 w-8 h-[2px] bg-[#C59D2A]/30" />
</motion.div>

            <motion.div 
  whileHover={{ rotate: 0, scale: 1.05 }}
  className="absolute -bottom-12 left-12 p-8 bg-[#0B1F3A] text-white rounded-[2rem] shadow-[0_40px_80px_-15px_rgba(11,31,58,0.5)] z-40 -rotate-3 border border-white/10"
>
  <div className="flex items-center gap-5">
    <div className="relative flex items-center justify-center">
      {/* Visual Ring */}
      <svg className="w-14 h-14 transform -rotate-90">
        <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-white/10" />
        <circle cx="28" cy="28" r="24" stroke="#C59D2A" strokeWidth="2" fill="transparent" strokeDasharray="150" strokeDashoffset="40" />
      </svg>
      <span className="absolute text-[10px] font-black text-[#C59D2A]">94%</span>
    </div>
    <div>
      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#C59D2A] mb-1">Success Rate</p>
      <p className="text-xl font-serif font-bold tracking-tighter">Top-Tier <br/> Placements</p>
    </div>
  </div>
</motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
"use client";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  // 1. Add Type to Ref
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 2. Use MotionValues for high-performance tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3. Apply Smooth Springs to those values
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate distance from center for a natural parallax feel
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((e.clientX - centerX) / 25);
    mouseY.set((e.clientY - centerY) / 25);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center bg-[#001529] py-10 px-6 pt-26 overflow-hidden"
    >
      
      {/* --- ADVANCED BACKGROUND SYSTEM --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/30 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#8EE8D8]/20 blur-[150px] rounded-full" 
        />

        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT COLUMN: CONTENT --- */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[#8EE8D8] text-xs font-bold tracking-[0.2em] uppercase mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8EE8D8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8EE8D8]"></span>
              </span>
              Session 2026 Admissions Open
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-serif font-bold text-white leading-[0.95] tracking-tighter"
            >
              Architects of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8EE8D8] via-white to-blue-400">
                Future Leaders
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 max-w-lg text-slate-400 text-lg md:text-xl font-light leading-relaxed border-l-2 border-white/10 pl-6"
            >
              Empowering students through the prestigious Cambridge curriculum and 
              AI-driven technological integration in a premium educational ecosystem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-col sm:flex-row gap-6 items-center"
            >
              <button className="w-full sm:w-auto px-10 py-5 bg-[#8EE8D8] text-[#001529] font-black rounded-full shadow-[0_0_30px_rgba(142,232,216,0.3)] hover:shadow-[0_0_50px_rgba(142,232,216,0.5)] hover:-translate-y-1 transition-all active:scale-95 uppercase text-sm tracking-widest">
                Start Enrollment
              </button>
              <button className="w-full sm:w-auto flex items-center gap-3 text-white font-bold group bg-transparent border-none cursor-pointer">
                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
                  ▶
                </span>
                Virtual Campus Tour
              </button>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: 3D INTERACTIVE --- */}
          <motion.div 
            style={{ x: springX, y: springY, rotateY: 10 }}
            className="relative hidden lg:block perspective-2000"
          >
            <motion.div 
              whileHover={{ rotateY: -15, rotateX: 5 }}
              className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-[3rem] overflow-hidden border border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] group"
            >
              <img 
                src="/stem-t4l--PnSpCHYKsw-unsplash.jpg" 
                alt="ICT Cambridge" 
                className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001529] via-transparent to-[#001529]/30 opacity-80" />
              
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-[#8EE8D8] font-bold text-xs tracking-widest uppercase mb-2">Cambridge Partner</p>
                <h3 className="text-white text-2xl font-serif font-bold italic">Where Technology meets tradition.</h3>
              </div>
            </motion.div>

            {/* Floating Widgets */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-10 -left-10 p-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl"
            >
              <div className="text-4xl font-bold text-white mb-1 tracking-tighter">100%</div>
              <div className="text-[#8EE8D8] text-[10px] font-black uppercase tracking-widest">A-Grade Track Record</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute top-1/2 -right-12 p-5 bg-[#8EE8D8] text-[#001529] rounded-2xl shadow-2xl rotate-12"
            >
              <div className="font-black text-xl leading-none italic">AI + STEM</div>
              <div className="text-[9px] uppercase font-bold mt-1">Integrated Learning</div>
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect to change header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-lg py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 bg-[#001529] rounded-xl flex items-center justify-center text-[#8EE8D8] font-bold text-xl group-hover:rotate-12 transition-transform">
            I
          </div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold tracking-tighter text-xl leading-none ${isScrolled ? "text-[#001529]" : "text-white"}`}>
              ICT <span className="text-[#8EE8D8]">CAMBRIDGE</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
              Global School
            </span>
          </div>
        </Link>

        {/* Navigation - Centered Desktop */}
        <nav className="hidden lg:flex items-center gap-10">
          {["Home", "About", "Programs", "Admissions", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-bold uppercase tracking-widest transition-colors relative group ${
                isScrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8EE8D8] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <button className={`hidden sm:block text-sm font-bold uppercase tracking-widest ${isScrolled ? "text-[#001529]" : "text-white"}`}>
           LMS Login
          </button>
         <Link href="/Form">
  <motion.button 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-[#8EE8D8] text-[#001529] px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-tight shadow-lg shadow-[#8EE8D8]/20"
  >
    Apply Now
  </motion.button>
</Link>
        </div>

      </div>
    </header>
  );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Trial / Demo", href: "/trial-demo-classes" },
    { name: "Student Life", href: "/student-life" },
    { name: "Policies", href: "/policies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b flex items-center ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md h-16 border-gray-100"
            : "bg-white h-24 border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* LOGO - Adjusted for better visual balance */}
          <Link href="/" className="relative z-[110] shrink-0">
            <div className="relative transition-transform hover:scale-105 duration-300">
              <Image
                src="/ICT Cambridge Logo.jpeg"
                alt="ICT Cambridge"
                width={160}
                height={50}
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? "w-[120px] md:w-[140px]" : "w-[150px] md:w-[180px]"
                }`}
                priority
              />
            </div>
          </Link>

          {/* DESKTOP NAV - Spacing and Typography optimized */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[13px] font-semibold text-[#0B1F3A] hover:text-[#C59D2A] transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3 md:gap-6">
            <button className="hidden lg:block text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]/70 hover:text-[#0B1F3A] transition-colors">
              LMS Login
            </button>

            <Link href="/Form">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#C59D2A] text-white px-5 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-widest shadow-lg shadow-[#C59D2A]/20"
              >
                Apply Now
              </motion.button>
            </Link>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="xl:hidden p-2 text-[#0B1F3A]"
              aria-label="Open Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[120] lg:hidden"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[280px] sm:w-[350px] bg-white z-[130] shadow-2xl lg:hidden flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-gray-100">
                <span className="font-bold text-[#0B1F3A] tracking-tighter text-xl">MENU</span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-black transition-colors"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-8 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-[#0B1F3A] hover:text-[#C59D2A] transition-colors border-b border-gray-50 pb-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="p-8 space-y-4 bg-gray-50">
                <button className="w-full text-center text-sm font-bold text-[#0B1F3A] uppercase tracking-widest border border-[#0B1F3A]/20 py-3 rounded-lg">
                  LMS Login
                </button>
                <Link href="/Form" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-[#C59D2A] text-white py-4 rounded-lg font-bold uppercase text-sm shadow-md">
                    Apply Now
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
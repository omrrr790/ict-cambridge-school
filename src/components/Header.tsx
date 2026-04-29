"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react"; // Install lucide-react or use SVGs

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Grouped Navigation for better UX
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Education", 
      submenu: [
        { name: "Academics", href: "/academics" },
        { name: "STEM ", href: "/stem" },
        { name: "Trial / Demo", href: "/trial-demo-classes" },
      ] 
    },
    { 
      name: "Admissions", 
      submenu: [
        { name: "How to Apply", href: "/admissions" },
        { name: "Policies", href: "/policies" },
      ] 
    },
    { name: "Student Life", href: "/student-life" },
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
          
          {/* LOGO */}
          <Link href="/" className="relative z-[110] shrink-0">
            <Image
              src="/ICT Cambridge Logo.jpeg"
              alt="ICT Cambridge"
              width={160}
              height={50}
              className={`object-contain transition-all duration-300 ${
                isScrolled ? "w-[120px] md:w-[130px]" : "w-[140px] md:w-[160px]"
              }`}
              priority
            />
          </Link>

          {/* DESKTOP NAV - Grouped & Clean */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-2">
                {link.submenu ? (
                  <button className="flex items-center gap-1 text-[13px] font-bold text-[#0B1F3A] group-hover:text-[#C59D2A] transition-colors uppercase tracking-wider">
                    {link.name}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                  </button>
                ) : (
                  <Link 
                    href={link.href!} 
                    className="text-[13px] font-bold text-[#0B1F3A] hover:text-[#C59D2A] transition-colors uppercase tracking-wider"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Submenu Dropdown */}
                {link.submenu && (
                  <div className="absolute top-full left-0 w-52 bg-white shadow-xl rounded-xl border border-gray-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-4">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block py-2 px-3 text-[12px] font-semibold text-gray-600 hover:text-[#C59D2A] hover:bg-gray-50 rounded-lg transition-all"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:block text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A]/60 hover:text-[#0B1F3A] transition-colors">
              LMS Login
            </button>

            <Link href="/Form">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#C59D2A] text-white px-6 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-widest shadow-lg shadow-[#C59D2A]/20"
              >
                Apply Now
              </motion.button>
            </Link>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="xl:hidden p-2 text-[#0B1F3A]"
            >
              <Menu size={32} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[120] lg:hidden backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[300px] bg-white z-[130] shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b">
                <span className="font-bold text-[#0B1F3A] text-lg">MENU</span>
                <button onClick={() => setIsMenuOpen(false)} className="p-2">
                  <X size={28} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {/* Mobile version remains flat for easier tapping */}
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Academics", href: "/academics" },
                  { name: "STEM", href: "/stem" },
                  { name: "Admissions", href: "/admissions" },
                  { name: "Trial Classes", href: "/trial-demo-classes" },
                  { name: "Student Life", href: "/student-life" },
                  { name: "Policies", href: "/policies" },
                  { name: "Contact", href: "/contact" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-base font-bold text-[#0B1F3A] hover:text-[#C59D2A] border-b border-gray-50 pb-3"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="p-6 bg-gray-50 space-y-3">
                <button className="w-full bg-[#0B1F3A] text-white py-3 rounded-xl font-bold uppercase text-[12px]">LMS LOGIN</button>
                <Link href="/Form" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full bg-[#C59D2A] text-white py-4 rounded-xl font-bold uppercase text-[12px] shadow-lg">Apply Now</button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
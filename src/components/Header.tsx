"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white shadow-lg py-2 border-gray-100"
            : "bg-white py-4 border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-10 flex justify-between items-center">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center transition-transform hover:scale-105 active:scale-95"
          >
            <Image
              src="/ICT Cambridge Logo.jpeg"
              alt="ICT Cambridge"
              width={180}
              height={60}
              className={`object-contain transition-all duration-300 ${
                isScrolled ? "h-[50px] md:h-[60px]" : "h-[65px] md:h-[80px]"
              }`}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">

            <Link href="#home" className="nav-link">Home</Link>
            <Link href="#about" className="nav-link">About</Link>

            {/* PROGRAMS DROPDOWN */}
            <div className="relative group">
              <button className="nav-link">
                Programs ▾
              </button>

              <div className="absolute top-full left-0 mt-4 w-64 bg-white shadow-xl border border-gray-100 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-3 space-y-2">

                  <Link href="#primary" className="dropdown-item">
                    Primary Education
                  </Link>

                  <Link href="#secondary" className="dropdown-item">
                    Secondary (O Levels)
                  </Link>

                  <Link href="#igcse" className="dropdown-item">
                    IGCSE Program
                  </Link>

                  <Link href="#stem" className="dropdown-item">
                    STEM & Innovation
                  </Link>

                  <Link href="#lms" className="dropdown-item">
                    Online Learning (LMS)
                  </Link>

                </div>
              </div>
            </div>

            <Link href="#admissions" className="nav-link">Admissions</Link>
            <Link href="#contact" className="nav-link">Contact</Link>

          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">

            <button className="hidden sm:block text-[10px] font-bold uppercase tracking-widest text-[#0B1F3A]/60 hover:text-[#0B1F3A]">
              LMS Login
            </button>

            <Link href="/Form">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#C59D2A] text-white px-6 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-md"
              >
                Apply Now
              </motion.button>
            </Link>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[#0B1F3A] text-2xl"
            >
              ☰
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-[70px] left-0 w-full bg-white border-t border-gray-100 shadow-lg z-[99]">
          <div className="px-6 py-6 space-y-4">

            <Link onClick={() => setIsMenuOpen(false)} href="#home" className="mobile-link">
              Home
            </Link>

            <Link onClick={() => setIsMenuOpen(false)} href="#about" className="mobile-link">
              About
            </Link>

            <Link onClick={() => setIsMenuOpen(false)} href="#programs" className="mobile-link">
              Programs
            </Link>

            <Link onClick={() => setIsMenuOpen(false)} href="#admissions" className="mobile-link">
              Admissions
            </Link>

            <Link onClick={() => setIsMenuOpen(false)} href="#contact" className="mobile-link">
              Contact
            </Link>

            <button className="text-sm text-[#0B1F3A]/70 uppercase">
              LMS Login
            </button>

            <Link href="/Form">
              <button className="w-full bg-[#C59D2A] text-white py-3 rounded-full font-bold uppercase text-sm mt-2">
                Apply Now
              </button>
            </Link>

          </div>
        </div>
      )}
    </>
  );
}
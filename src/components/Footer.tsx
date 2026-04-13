"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#001529] pt-24 pb-12 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8EE8D8] to-transparent opacity-30" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Section: "The Overlap Action" */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-20 p-8 md:p-12 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
        >
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              Join the <span className="text-[#8EE8D8]">ICT Cambridge</span> Community
            </h3>
            <p className="text-slate-400 max-w-xl">
              Stay updated with the latest academic news, admission deadlines, and campus events. 
              Subscribe to our monthly newsletter.
            </p>
          </div>
          <div className="flex items-center">
            <div className="relative w-full">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-white outline-none focus:border-[#8EE8D8] transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#8EE8D8] text-[#001529] px-6 rounded-full font-bold text-sm hover:scale-105 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Middle Section: Main Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-serif font-bold tracking-tighter text-2xl text-white">
                ICT <span className="text-[#8EE8D8]">CAMBRIDGE</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">
                Global School
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              An institution dedicated to the holistic development of students through 
              the gold-standard Cambridge curriculum and modern digital innovation.
            </p>
            <div className="flex gap-4">
              {['fb', 'ln', 'ig', 'tw'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#8EE8D8] hover:text-[#001529] transition-all cursor-pointer group">
                  <span className="text-xs font-bold uppercase">{social}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Sets */}
          {[
            {
              title: "Pathways",
              links: ["Primary Years", "O Levels / IGCSE", "A Levels", "LMS Portal", "Scholarships"]
            },
            {
              title: "Institution",
              links: ["About Us", "Our Campus", "Career", "Latest News", "Contact"]
            }
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs border-l-2 border-[#8EE8D8] pl-4">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-slate-400 hover:text-[#8EE8D8] transition-colors text-sm font-medium">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Details Card */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Global Support</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-[#8EE8D8] mt-1">📍</span>
                <p className="text-slate-400 text-sm">Sector H-8, Islamabad, Pakistan</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#8EE8D8]">📞</span>
                <p className="text-slate-400 text-sm">+92 51 123 4567</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#8EE8D8]">✉️</span>
                <p className="text-slate-400 text-sm">info@ictcambridge.edu.pk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">
            © {currentYear} ICT Cambridge International School. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-slate-500 hover:text-white text-[10px] uppercase tracking-widest font-bold transition">Privacy</Link>
            <Link href="#" className="text-slate-500 hover:text-white text-[10px] uppercase tracking-widest font-bold transition">Terms</Link>
            <Link href="#" className="text-slate-500 hover:text-white text-[10px] uppercase tracking-widest font-bold transition">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
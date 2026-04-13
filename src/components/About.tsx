"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: The Image Composition (Visual Storytelling) */}
<div className="relative">
  {/* Main Institute Image */}
  <motion.div 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative z-10 w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
  >
    {/* Overlay for that professional deep-blue tint */}
    <div className="absolute inset-0 bg-[#001529]/10 hover:bg-transparent transition-colors duration-500 z-10" />
    
    <img 
      src="/thomas-park-w9i7wMaM3EE-unsplash.jpg" 
      alt="ICT Cambridge Main Building"
      className="w-full h-full object-cover"
    />
  </motion.div>

  {/* Floating Secondary Image (AI / Tech / Lab) */}
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3 }}
    className="absolute -bottom-10 -right-6 z-20 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-8 border-white hidden md:block group"
  >
    <div className="absolute inset-0 bg-[#8EE8D8]/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
    
    {/* You can use the same image or a different tech-focused one here */}
    <img 
      src="/stem-t4l--PnSpCHYKsw-unsplash.jpg" 
      alt="AI Lab"
      className="w-full h-full object-cover scale-150 origin-bottom-right" 
    />
    
    <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm p-3 text-center z-20">
      <span className="text-[#001529] font-bold text-xs uppercase tracking-widest">
        AI Learning Lab
      </span>
    </div>
  </motion.div>

  {/* Decorative Background Shape */}
  <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#8EE8D8]/30 rounded-full blur-3xl -z-0 animate-pulse" />
</div>

          {/* RIGHT: Content & Stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#8EE8D8] font-bold tracking-widest uppercase text-sm">
                Since 2001 — Excellence in Education
              </span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#001529] mt-4 leading-tight">
                Nurturing Minds <br />
                <span className="italic text-blue-600">for a Global Future</span>
              </h2>
              <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                ICT Cambridge School is more than just an institution; it is a 
                launchpad for future leaders. By blending the rigorous 
                <strong> Cambridge Curriculum</strong> with cutting-edge <strong>AI-integrated 
                pedagogy</strong>, we ensure our students are prepared for the 
                challenges of the 21st century.
              </p>
            </motion.div>

            {/* Feature Highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Cambridge Certified", desc: "Official IGCSE & A-Level partner." },
                { title: "AI-Ready Labs", desc: "Next-gen tech for modern learners." }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * i }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#001529] flex-shrink-0 flex items-center justify-center text-[#8EE8D8]">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-[#001529]">{feature.title}</h4>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Signature Stats */}
            <div className="flex items-center gap-8 pt-6 border-t border-slate-100">
              <div>
                <span className="block text-3xl font-bold text-[#001529]">25+</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Years Exp</span>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <span className="block text-3xl font-bold text-[#001529]">100%</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Result</span>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <button className="text-blue-600 font-bold hover:underline">
                Our History →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
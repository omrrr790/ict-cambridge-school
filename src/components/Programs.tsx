"use client";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Primary Education",
    desc: "Foundation years focusing on core literacy, numeracy, and social development.",
    icon: "🎓",
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "O Levels / IGCSE",
    desc: "Rigorous Cambridge curriculum preparing students for global academic success.",
    icon: "📜",
    color: "from-[#001529] to-[#003366]",
  },
  {
    title: "STEM & Innovation",
    desc: "Hands-on robotics, coding, and advanced science labs for the next generation.",
    icon: "🔬",
    color: "from-teal-500 to-[#8EE8D8]",
  },
  {
    title: "Digital LMS",
    desc: "24/7 access to world-class resources through our integrated learning portal.",
    icon: "💻",
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Art & Creativity",
    desc: "Nurturing self-expression through music, visual arts, and drama workshops.",
    icon: "🎨",
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Global Citizenship",
    desc: "Leadership programs and extracurriculars that build character and empathy.",
    icon: "🌍",
    color: "from-emerald-500 to-teal-700",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-10 left-0 text-[12rem] font-bold text-slate-200/50 select-none pointer-events-none -z-0">
        ACADEMICS
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#8EE8D8] font-bold tracking-[0.2em] uppercase text-sm bg-[#001529] px-4 py-1 rounded-full"
            >
              Academic Pathways
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#001529] mt-6 leading-tight">
              A Curriculum Designed <br /> 
              <span className="text-blue-600 italic">for Excellence</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm border-l-2 border-[#8EE8D8] pl-4">
            Following the gold standard of Cambridge International Education from foundation to graduation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-white/20 transition-colors">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#001529] mb-4 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed group-hover:text-white/80 transition-colors mb-6">
                  {item.desc}
                </p>

                <button className="flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:text-[#8EE8D8] transition-colors">
                  Learn More 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Footer for Programs */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center bg-[#001529] rounded-[3rem] p-12 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Unsure which pathway is right for your child?</h3>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">Schedule a free counseling session with our academic heads to plan the perfect future.</p>
            <button className="bg-[#8EE8D8] text-[#001529] px-10 py-4 rounded-full font-bold hover:scale-105 transition shadow-lg shadow-[#8EE8D8]/20">
              Book a Counseling Session
            </button>
          </div>
          {/* Abstract circle decoration */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 border-[40px] border-white/5 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Inquiry & Visit",
    desc: "Book a campus tour or attend an open house to experience our learning environment firsthand.",
    icon: "🏫",
    color: "from-blue-500 to-blue-700",
  },
  {
    step: "02",
    title: "Application Submission",
    desc: "Complete the online application form and upload required documents via our digital portal.",
    icon: "📝",
    color: "from-[#001529] to-[#003366]",
  },
  {
    step: "03",
    title: "Assessment & Interview",
    desc: "A friendly interaction and age-appropriate assessment to understand your child's potential.",
    icon: "🤝",
    color: "from-teal-500 to-[#8EE8D8]",
  },
  {
    step: "04",
    title: "Admission Offer",
    desc: "Successful candidates receive an official offer letter within 5 working days of assessment.",
    icon: "✉️",
    color: "from-indigo-500 to-purple-600",
  },
];

export default function Admissions() {
  return (
    <section id="admissions" className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-10 left-0 text-[12rem] font-bold text-slate-200/50 select-none pointer-events-none -z-0">
        JOIN US
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#8EE8D8] font-bold tracking-[0.2em] uppercase text-sm bg-[#001529] px-4 py-1 rounded-full"
            >
              Enrollment 2026-27
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#001529] mt-6 leading-tight">
              Begin Your Child’s <br /> 
              <span className="text-blue-600 italic">Global Journey</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm border-l-2 border-[#8EE8D8] pl-4">
            Our admission process is designed to be transparent, supportive, and focused on finding the right fit for every student.
          </p>
        </div>

        {/* Admission Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-white/20 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-4xl font-black text-slate-100 group-hover:text-white/20 transition-colors">
                    {item.step}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[#001529] mb-4 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Requirements & Deadline Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <h4 className="text-[#001529] font-bold text-xl mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    Required Documents
                </h4>
                <ul className="grid md:grid-cols-2 gap-3 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">✓ Birth Certificate / Passport copy</li>
                    <li className="flex items-center gap-2">✓ Last 2 years of school reports</li>
                    <li className="flex items-center gap-2">✓ 4 Passport sized photographs</li>
                    <li className="flex items-center gap-2">✓ Transfer certificate (if applicable)</li>
                </ul>
            </div>
            <div className="bg-gradient-to-br from-[#001529] to-[#003366] rounded-3xl p-8 text-white flex flex-col justify-center">
                <p className="text-[#8EE8D8] font-bold uppercase text-xs tracking-widest mb-2">Priority Deadline</p>
                <h4 className="text-2xl font-bold mb-1">August 15, 2026</h4>
                <p className="text-white/60 text-sm">For the upcoming Autumn intake.</p>
            </div>
        </div>

        {/* CTA Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center bg-[#001529] rounded-[3rem] p-12 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to secure your child’s spot?</h3>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">Download our digital prospectus or start your online application today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#8EE8D8] text-[#001529] px-10 py-4 rounded-full font-bold hover:scale-105 transition shadow-lg">
                    Apply Online Now
                </button>
                <button className="border border-white/20 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold transition">
                    Download Prospectus
                </button>
            </div>
          </div>
          <div className="absolute -left-20 -top-20 w-64 h-64 border-[40px] border-white/5 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
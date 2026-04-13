"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The Cambridge curriculum here is handled with such precision. My son's critical thinking skills have improved remarkably within just one session.",
    author: "Dr. Sarah Ahmed",
    role: "Parent of O-Level Student",
    image: "S", // Placeholder for initial or avatar
  },
  {
    quote: "The digital LMS and AI-integrated learning tools are far ahead of other institutions. It's truly a future-ready school for our children.",
    author: "Mr. Mansoor Khan",
    role: "Tech Entrepreneur & Parent",
    image: "M",
  },
  {
    quote: "What impressed me most was the focus on character building alongside academics. The mentors are genuinely invested in student growth.",
    author: "Mrs. Zainab Ali",
    role: "Educationist",
    image: "Z",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-0 opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs"
          >
            Voice of our Community
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#001529] mt-4">
            Trusted by <span className="italic text-blue-600">Families</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group"
            >
              {/* Quote Icon */}
              <div className="text-4xl text-[#8EE8D8] font-serif absolute top-6 right-8 opacity-40 group-hover:opacity-100 transition-opacity">
                “
              </div>

              <div className="relative z-10">
                <p className="text-slate-600 italic leading-relaxed mb-8 text-lg">
                  "{t.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#001529] flex items-center justify-center text-[#8EE8D8] font-bold">
                    {t.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#001529] text-sm">{t.author}</h4>
                    <p className="text-slate-400 text-xs uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-col items-center justify-center gap-2"
        >
          <div className="flex text-yellow-400 text-xl tracking-widest">
            ★★★★★
          </div>
          <p className="text-slate-500 text-sm font-medium">
            Rated 4.9/5 by 200+ Verified Parents
          </p>
        </motion.div>
      </div>
    </section>
  );
}
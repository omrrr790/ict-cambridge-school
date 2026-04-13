"use client";
import { motion } from "framer-motion";

const contactInfo = [
  {
    title: "Visit Us",
    details: ["123 Education Lane,", "Academic District, City 54000"],
    icon: "📍",
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Call Us",
    details: ["+1 (234) 567-890", "+1 (234) 987-654"],
    icon: "📞",
    color: "from-[#001529] to-[#003366]",
  },
  {
    title: "Email Us",
    details: ["admissions@school.edu", "info@school.edu"],
    icon: "📧",
    color: "from-teal-500 to-[#8EE8D8]",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-10 left-0 text-[12rem] font-bold text-slate-200/50 select-none pointer-events-none -z-0">
        REACH OUT
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#8EE8D8] font-bold tracking-[0.2em] uppercase text-sm bg-[#001529] px-4 py-1 rounded-full"
            >
              Contact Us
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#001529] mt-6 leading-tight">
              We’re Here to <br /> 
              <span className="text-blue-600 italic">Support You</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs text-sm border-l-2 border-[#8EE8D8] pl-4">
            Have questions about enrollment or our programs? Our team is ready to provide the answers you need.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Details Cards */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group relative bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex items-center gap-5">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-white/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001529] group-hover:text-white transition-colors">{item.title}</h3>
                    {item.details.map((line, i) => (
                      <p key={i} className="text-slate-500 text-sm group-hover:text-white/80 transition-colors">{line}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/60 border border-slate-100"
          >
            <form className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-2">Full Name</label>
                <input type="text" placeholder="John Doe" className="bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#8EE8D8] outline-none transition" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-2">Email Address</label>
                <input type="email" placeholder="john@example.com" className="bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#8EE8D8] outline-none transition" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-2">Subject</label>
                <select className="bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#8EE8D8] outline-none transition appearance-none">
                  <option>General Inquiry</option>
                  <option>Admissions Question</option>
                  <option>Campus Tour Request</option>
                  <option>Media & Press</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-2">Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#8EE8D8] outline-none transition resize-none"></textarea>
              </div>
              <button className="md:col-span-2 bg-[#001529] text-white font-bold py-4 rounded-2xl hover:bg-blue-600 transition duration-300 shadow-lg shadow-blue-900/20">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Google Maps Placeholder */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 h-[400px] w-full bg-slate-200 rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border-8 border-white shadow-xl"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.551346452317!2d74.3023612763261!3d31.48152114901344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI4JzUzLjUiTiA3NMKwMTgnMTYuNCJF!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
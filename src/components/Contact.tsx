"use client";
import Link from "next/link";

const contactInfo = [
  {
    title: "The Campus",
    details: ["123 Education Lane,", "Academic District, City 54000"],
    label: "Visit Us",
  },
  {
    title: "Direct Lines",
    details: ["+1 (234) 567-890", "+1 (234) 987-654"],
    label: "Call Us",
  },
  {
    title: "Digital Inquiries",
    details: ["admissions@school.edu", "info@school.edu"],
    label: "Email Us",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* 🏛️ Large Editorial Watermark */}
      <div className="absolute top-0 right-0 text-[18rem] font-black text-gray-50/80 select-none pointer-events-none tracking-tighter leading-none">
        CONNECT
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 🔹 Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-[#C59D2A]" />
              <span className="text-[#C59D2A] text-[11px] font-black uppercase tracking-[0.5em]">
                Get In Touch
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-serif font-bold text-[#0B1F3A] leading-[0.9] tracking-tighter">
              Begin the <br />
              <span className="italic font-medium text-gray-400 text-6xl md:text-7xl">Dialogue.</span>
            </h2>
          </div>
          <div className="max-w-xs border-l-4 border-[#C59D2A] pl-8 py-2">
            <p className="text-gray-500 text-sm font-medium leading-relaxed uppercase tracking-wider">
              Our administrative team is available for personalized consultations.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* 🔹 LEFT: Contact Details (Executive Minimalist) */}
          <div className="lg:col-span-4 space-y-12">
            {contactInfo.map((item, index) => (
              <div key={index} className="group border-l border-gray-100 pl-8 hover:border-[#C59D2A] transition-colors duration-500">
                <span className="text-[#C59D2A] text-[10px] font-black uppercase tracking-[0.3em] block mb-4">
                  {item.label}
                </span>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{item.title}</h3>
                <div className="space-y-1">
                  {item.details.map((line, i) => (
                    <p key={i} className="text-gray-500 font-medium text-sm leading-relaxed tracking-wide">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 🔹 RIGHT: Editorial Form (Sharp & Professional) */}
          <div className="lg:col-span-8">
            <div className="bg-[#0B1F3A] p-10 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <form className="grid md:grid-cols-2 gap-x-10 gap-y-8 relative z-10">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C59D2A]">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="E.g. Muhammad Omar" 
                    className="bg-transparent border-b border-white/10 text-white py-3 focus:border-[#C59D2A] outline-none transition-all placeholder:text-white/20 font-medium" 
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C59D2A]">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="omrrr790@gmail.com" 
                    className="bg-transparent border-b border-white/10 text-white py-3 focus:border-[#C59D2A] outline-none transition-all placeholder:text-white/20 font-medium" 
                  />
                </div>
                <div className="flex flex-col gap-3 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C59D2A]">Inquiry Department</label>
                  <select className="bg-transparent border-b border-white/10 text-white py-3 focus:border-[#C59D2A] outline-none transition appearance-none cursor-pointer font-medium">
                    <option className="bg-[#0B1F3A]">General Admissions</option>
                    <option className="bg-[#0B1F3A]">Academic Counseling</option>
                    <option className="bg-[#0B1F3A]">Media & Press</option>
                  </select>
                </div>
                <div className="flex flex-col gap-3 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C59D2A]">Your Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your child's educational goals..." 
                    className="bg-transparent border-b border-white/10 text-white py-3 focus:border-[#C59D2A] outline-none transition resize-none placeholder:text-white/20 font-medium"
                  ></textarea>
                </div>
                <button className="md:col-span-2 bg-[#C59D2A] text-white font-black py-5 rounded-full hover:bg-white hover:text-[#0B1F3A] transition-all duration-500 uppercase tracking-[0.3em] text-xs shadow-xl shadow-black/20">
                  Submit Inquiry
                </button>
              </form>
              
              {/* Subtle Gold Pulse Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C59D2A]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </div>
          </div>
        </div>

        {/* 🔹 MAP SECTION: High-Performance Grayscale Container */}
        <div className="mt-24 relative group">
          <div className="absolute inset-0 border-[12px] border-white z-10 pointer-events-none rounded-[3rem] shadow-inner" />
          <div className="h-[500px] w-full bg-gray-100 rounded-[3rem] overflow-hidden grayscale contrast-125 transition-all duration-1000 group-hover:grayscale-0">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.4321!2d73.0!3d33.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQyJzAwLjAiTiA3M8KwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1625000000000" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
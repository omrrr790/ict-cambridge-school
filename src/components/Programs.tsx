"use client";
import Link from "next/link";

const programs = [
  {
    title: "Primary Education",
    desc: "A prestigious foundation focusing on core literacy and cognitive development within the Cambridge framework.",
    index: "01",
    category: "Foundation"
  },
  {
    title: "O Levels / IGCSE",
    desc: "A globally recognized curriculum designed for rigorous academic excellence and analytical thinking.",
    index: "02",
    category: "Secondary"
  },
  {
    title: "STEM & Robotics",
    desc: "Advanced laboratories and coding modules integrated to prepare students for a tech-driven future.",
    index: "03",
    category: "Innovation"
  },
  {
    title: "Digital Ecosystem",
    desc: "Seamless 24/7 access to international resources through our high-performance LMS portal.",
    index: "04",
    category: "Technology"
  },
  {
    title: "Arts & Rhetoric",
    desc: "Cultivating leadership through public speaking, visual arts, and sophisticated creative expression.",
    index: "05",
    category: "Creative"
  },
  {
    title: "Global Leadership",
    desc: "Extracurricular programs aimed at character building and developing a truly international perspective.",
    index: "06",
    category: "Leadership"
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-white relative overflow-hidden">
      {/* 🏛️ Editorial Watermark Background */}
      <div className="absolute top-0 right-0 text-[18rem] font-black text-gray-50/80 select-none pointer-events-none tracking-tighter leading-none">
        ICT
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 🔹 Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-[#C59D2A]" />
              <span className="text-[#C59D2A] text-[10px] font-black uppercase tracking-[0.5em]">
                Academic Departments
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-serif font-bold text-[#0B1F3A] leading-[0.9] tracking-tighter">
              World Class <br />
              <span className="italic font-medium text-gray-400">Curriculum Pathways</span>
            </h2>
          </div>
          <div className="max-w-xs border-l-4 border-[#C59D2A] pl-8 py-2">
            <p className="text-[#0B1F3A] text-sm font-bold leading-relaxed uppercase tracking-wider">
              Adhering to the Gold Standard of British Education.
            </p>
          </div>
        </div>

        {/* 🔹 Programs Structural Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-100">
          {programs.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white p-12 md:p-16 border-r border-b border-gray-100 transition-all duration-500 hover:bg-[#0B1F3A]"
            >
              {/* Card Meta: Index and Category */}
              <div className="flex justify-between items-center mb-12">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C59D2A]">
                  {item.category}
                </span>
                <span className="text-5xl font-serif italic text-gray-100 group-hover:text-white/10 transition-colors duration-500">
                  {item.index}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] group-hover:text-white transition-colors duration-500 mb-6">
                {item.title}
              </h3>
              
              <p className="text-gray-500 font-medium text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-500 mb-10">
                {item.desc}
              </p>

              {/* Action Indicator */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-[#C59D2A] group-hover:w-20 transition-all duration-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0B1F3A] group-hover:text-[#C59D2A] transition-colors">
                  View Detail
                </span>
              </div>

              {/* Full Card Link */}
              <Link href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="absolute inset-0 z-20" />
            </div>
          ))}
        </div>

        {/* 🔹 Executive Call to Action (The "Gold" Footer) */}
        <div className="mt-24 bg-[#0B1F3A] rounded-[3rem] p-10 md:p-24 text-center relative overflow-hidden group shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
              Tailored Academic <br />
              <span className="text-[#C59D2A]">Consultation</span>
            </h3>
            <p className="text-gray-400 text-xl mb-12 font-medium max-w-xl mx-auto">
              Join us for a campus walkthrough and roadmap session with our academic heads.
            </p>
            <button className="bg-[#C59D2A] text-white hover:bg-white hover:text-[#0B1F3A] px-14 py-6 rounded-full font-black text-xs uppercase tracking-[0.3em] transition-all duration-500 shadow-xl">
              Book Appointment
            </button>
          </div>
          
          {/* Subtle Branded Background Shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59D2A]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        </div>

      </div>
    </section>
  );
}
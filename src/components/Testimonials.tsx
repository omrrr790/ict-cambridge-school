"use client";

const testimonials = [
  {
    quote: "The Cambridge curriculum here is handled with such precision. My son's critical thinking skills have improved remarkably within just one session.",
    author: "Dr. Sarah Ahmed",
    role: "Parent of O-Level Student",
    initials: "SA",
  },
  {
    quote: "The digital LMS and AI-integrated learning tools are far ahead of other institutions. It's truly a future-ready school for our children.",
    author: "Mr. Mansoor Khan",
    role: "Tech Entrepreneur & Parent",
    initials: "MK",
  },
  {
    quote: "What impressed me most was the focus on character building alongside academics. The mentors are genuinely invested in student growth.",
    author: "Mrs. Zainab Ali",
    role: "Educationist",
    initials: "ZA",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-[#F9FAFB] relative overflow-hidden">
      {/* 🏛️ Background Large Lettering */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25rem] font-black text-gray-200/20 select-none tracking-tighter uppercase">
          TRUST
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* 🔹 Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-10 h-[1px] bg-[#C59D2A]" />
            <span className="text-[#C59D2A] text-[11px] font-black uppercase tracking-[0.5em]">
              Community Voices
            </span>
            <span className="w-10 h-[1px] bg-[#C59D2A]" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#0B1F3A] leading-[0.9] tracking-tighter">
            Trusted by <br />
            <span className="italic font-medium text-gray-400">Leading Families.</span>
          </h2>
        </div>

        {/* 🔹 Testimonial Grid (Zero Gap Editorial Style) */}
        <div className="grid md:grid-cols-3 border-t border-l border-gray-200 shadow-2xl">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-12 bg-white border-r border-b border-gray-200 group transition-all duration-700 hover:bg-[#0B1F3A]"
            >
              {/* Gold Quote Mark Icon */}
              <div className="mb-10 text-[#C59D2A] group-hover:text-white transition-colors duration-500">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                   <path d="M11.25 0C5.03 0 0 5.03 0 11.25V30H15V11.25H7.5C7.5 8.12 10.12 5.5 13.25 5.5V0H11.25ZM36.25 0C30.03 0 25 5.03 25 11.25V30H40V11.25H32.5C32.5 8.12 35.12 5.5 38.25 5.5V0H36.25Z" />
                </svg>
              </div>

              <div className="relative z-10">
                <p className="text-gray-500 italic text-lg leading-relaxed mb-12 group-hover:text-gray-200 transition-colors duration-500">
                  "{t.quote}"
                </p>
                
                <div className="flex items-center gap-5 pt-8 border-t border-gray-100 group-hover:border-white/10 transition-all duration-500">
                  {/* Initials Avatar */}
                  <div className="w-14 h-14 rounded-full border-2 border-[#C59D2A] flex items-center justify-center text-[#0B1F3A] font-black group-hover:bg-[#C59D2A] group-hover:text-white transition-all duration-500">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3A] text-sm group-hover:text-white transition-colors duration-500 uppercase tracking-widest">{t.author}</h4>
                    <p className="text-[#C59D2A] text-[10px] font-black uppercase tracking-[0.2em]">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Performance Metric */}
        <div className="mt-20 flex flex-col items-center justify-center space-y-4">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#C59D2A] text-xl">★</span>
            ))}
          </div>
          <p className="text-[#0B1F3A] text-[11px] font-black uppercase tracking-[0.4em]">
            Rated 4.9/5 by 200+ Verified Parents
          </p>
        </div>
      </div>
    </section>
  );
}
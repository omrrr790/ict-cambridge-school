"use client";
import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Inquiry & Visit",
    desc: "Experience our elite learning environment firsthand through a private campus tour.",
    category: "Introduction"
  },
  {
    step: "02",
    title: "Application",
    desc: "Submit your formal credentials and documentation via our secure digital portal.",
    category: "Documentation"
  },
  {
    step: "03",
    title: "Assessment",
    desc: "A personalized interaction to evaluate the student's potential and academic fit.",
    category: "Evaluation"
  },
  {
    step: "04",
    title: "Admittance",
    desc: "Successful candidates receive a formal offer of admission within 5 business days.",
    category: "Confirmation"
  },
];

export default function Admissions() {
  return (
    <section id="admissions" className="py-32 bg-[#F9FAFB] relative overflow-hidden">
      {/* 🏛️ Background Branding */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-[-5%] text-[20rem] font-black text-gray-200/20 select-none tracking-tighter uppercase">
          JOIN
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 🔹 Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-[#C59D2A]" />
              <span className="text-[#C59D2A] text-[11px] font-black uppercase tracking-[0.5em]">
                Admission Cycle 2026
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-serif font-bold text-[#0B1F3A] leading-[0.9] tracking-tighter">
              The Path to <br />
              <span className="italic font-medium text-gray-400 text-6xl md:text-7xl">Academic Distinction</span>
            </h2>
          </div>
          <div className="max-w-xs border-l-4 border-[#0B1F3A] pl-8 py-2">
            <p className="text-gray-500 text-sm font-medium leading-relaxed uppercase tracking-wider">
              A transparent and supportive journey toward global success.
            </p>
          </div>
        </div>

        {/* 🔹 Admission Steps: Grid with Executive Styling */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-gray-200">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white p-12 border-r border-b border-gray-200 transition-all duration-500 hover:bg-[#0B1F3A]"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C59D2A]">
                  {item.category}
                </span>
                <span className="text-5xl font-serif italic text-gray-100 group-hover:text-white/10 transition-colors duration-500">
                  {item.step}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0B1F3A] group-hover:text-white transition-colors duration-500 mb-6">
                {item.title}
              </h3>
              
              <p className="text-gray-500 font-medium text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                {item.desc}
              </p>

              {/* Decorative Step Indicator */}
              <div className="mt-10 flex items-center gap-2">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i < index + 1 ? "w-6 bg-[#C59D2A]" : "w-2 bg-gray-100 group-hover:bg-white/10"
                    }`} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Secondary Info: Documents & Deadlines */}
        <div className="mt-16 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 bg-white p-10 md:p-16 border border-gray-100 shadow-sm rounded-3xl">
                <h4 className="text-[#0B1F3A] font-serif font-bold text-3xl mb-8">Essential Documentation</h4>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                    {[
                      "Original Birth Certificate / B-Form",
                      "Academic Reports (Last 2 Years)",
                      "Passport Sized Photographs (x4)",
                      "School Leaving Certificate"
                    ].map((doc, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                            <span className="w-5 h-5 rounded-full border border-[#C59D2A] flex items-center justify-center text-[#C59D2A] text-[10px] group-hover:bg-[#C59D2A] group-hover:text-white transition-all">
                              ✓
                            </span>
                            <span className="text-gray-500 font-medium text-sm">{doc}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="lg:col-span-4 bg-[#0B1F3A] p-10 md:p-16 rounded-3xl text-white flex flex-col justify-center relative overflow-hidden group">
                <div className="relative z-10">
                  <p className="text-[#C59D2A] font-black uppercase text-[10px] tracking-[0.4em] mb-4">Final Intake 2026</p>
                  <h4 className="text-4xl font-serif font-bold mb-2 italic">August 15</h4>
                  <p className="text-gray-400 text-sm font-medium">Standard Application Deadline</p>
                </div>
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C59D2A]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
            </div>
        </div>

        {/* 🔹 Call to Action (The "Gold" Footer) */}
        <div className="mt-24 bg-white border border-gray-100 rounded-[3rem] p-10 md:p-24 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)]">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-[#0B1F3A] mb-8">
              Initiate Your <br />
              <span className="text-[#C59D2A]">Application.</span>
            </h3>
            <p className="text-gray-400 text-lg mb-12 font-medium max-w-lg mx-auto uppercase tracking-widest">
              Secure your place in our upcoming academic session.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-[#0B1F3A] text-white hover:bg-[#C59D2A] px-14 py-6 rounded-full font-black text-xs uppercase tracking-[0.3em] transition-all duration-500 shadow-xl">
                    Apply Online
                </button>
                <button className="border-2 border-gray-100 text-[#0B1F3A] hover:bg-gray-50 px-14 py-6 rounded-full font-black text-xs uppercase tracking-[0.3em] transition-all duration-500">
                    Get Prospectus
                </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
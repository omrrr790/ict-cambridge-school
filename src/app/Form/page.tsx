"use client";
import { useState } from "react";

export default function AdmissionForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitted(true);
};

  return (
    <main className="min-h-screen bg-white py-24 relative overflow-hidden">
      {/* 🏛️ Large Editorial Watermark */}
      <div className="absolute top-0 right-0 text-[18rem] font-black text-gray-50/80 select-none pointer-events-none tracking-tighter leading-none">
        ENROLL
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* 🔹 Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-[#C59D2A]" />
              <span className="text-[#C59D2A] text-[11px] font-black uppercase tracking-[0.5em]">
                Academic Session 2026
              </span>
              <span className="w-12 h-[1px] bg-[#C59D2A]" />
            </div>
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#0B1F3A] leading-[0.9] tracking-tighter mb-6">
              Institutional <br />
              <span className="italic font-medium text-gray-400 text-6xl md:text-7xl">Enrollment.</span>
            </h1>
            <p className="text-gray-500 font-medium max-w-lg mx-auto text-sm leading-relaxed uppercase tracking-wider">
              Formal registration for prospective students. Please ensure all 
              documentation is accurate for our review board.
            </p>
          </div>

          {!isSubmitted ? (
            <div className="bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden relative">
              {/* Form Sidebar Accent */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#0B1F3A]" />
              
              <form onSubmit={handleSubmit} className="p-10 md:p-20">
                
                {/* Section 1: Student Information */}
                <div className="mb-20">
                  <div className="flex items-center gap-6 mb-12">
                    <span className="text-[#C59D2A] text-2xl font-serif italic">01.</span>
                    <h3 className="text-2xl font-bold text-[#0B1F3A] uppercase tracking-tighter">Student Profile</h3>
                    <div className="flex-1 h-[1px] bg-gray-100" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="flex flex-col gap-2 group">
                      <label className="text-[10px] font-black text-[#C59D2A] uppercase tracking-[0.2em] ml-1">Full Name</label>
                      <input required type="text" className="bg-transparent border-b border-gray-200 py-3 text-[#0B1F3A] focus:border-[#C59D2A] outline-none transition-all placeholder:text-gray-300 font-medium" placeholder="First & Last Name" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black text-[#C59D2A] uppercase tracking-[0.2em] ml-1">Date of Birth</label>
                      <input required type="date" className="bg-transparent border-b border-gray-200 py-3 text-[#0B1F3A] focus:border-[#C59D2A] outline-none transition-all font-medium" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black text-[#C59D2A] uppercase tracking-[0.2em] ml-1">Academic Grade</label>
                      <select className="bg-transparent border-b border-gray-200 py-3 text-[#0B1F3A] focus:border-[#C59D2A] outline-none transition appearance-none cursor-pointer font-medium">
                        <option>Primary Year (1-6)</option>
                        <option>O Levels / IGCSE</option>
                        <option>A Levels</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black text-[#C59D2A] uppercase tracking-[0.2em] ml-1">Gender Identification</label>
                      <div className="flex gap-8 py-3">
                        {["Male", "Female"].map((gender) => (
                          <label key={gender} className="flex items-center gap-3 cursor-pointer text-[#0B1F3A] font-bold text-sm group">
                            <input type="radio" name="gender" className="w-4 h-4 accent-[#0B1F3A]" /> 
                            {gender}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Guardian Details */}
                <div className="mb-20">
                  <div className="flex items-center gap-6 mb-12">
                    <span className="text-[#C59D2A] text-2xl font-serif italic">02.</span>
                    <h3 className="text-2xl font-bold text-[#0B1F3A] uppercase tracking-tighter">Parental Authority</h3>
                    <div className="flex-1 h-[1px] bg-gray-100" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black text-[#C59D2A] uppercase tracking-[0.2em] ml-1">Guardian Name</label>
                      <input required type="text" className="bg-transparent border-b border-gray-200 py-3 text-[#0B1F3A] focus:border-[#C59D2A] outline-none transition-all placeholder:text-gray-300 font-medium" placeholder="Primary Contact" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black text-[#C59D2A] uppercase tracking-[0.2em] ml-1">Primary Phone</label>
                      <input required type="tel" className="bg-transparent border-b border-gray-200 py-3 text-[#0B1F3A] focus:border-[#C59D2A] outline-none transition-all placeholder:text-gray-300 font-medium" placeholder="+92 XXX XXXXXXX" />
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-2">
                      <label className="text-[10px] font-black text-[#C59D2A] uppercase tracking-[0.2em] ml-1">Residential Address</label>
                      <textarea rows={2} className="bg-transparent border-b border-gray-200 py-3 text-[#0B1F3A] focus:border-[#C59D2A] outline-none transition-all resize-none placeholder:text-gray-300 font-medium" placeholder="Physical street address for institutional records"></textarea>
                    </div>
                  </div>
                </div>

                {/* Submit Button Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-12 border-t border-gray-50">
                  <p className="text-[10px] text-gray-400 max-w-sm font-bold uppercase tracking-widest leading-relaxed">
                    Submission confirms adherence to institutional policy and the digital code of conduct for ICT Cambridge.
                  </p>
                  <button 
                    type="submit"
                    className="w-full md:w-auto bg-[#0B1F3A] text-white font-black px-16 py-6 rounded-full hover:bg-[#C59D2A] transition-all duration-700 uppercase tracking-[0.3em] text-xs shadow-2xl active:scale-95"
                  >
                    Transmit Application
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-[#0B1F3A] rounded-[3.5rem] p-20 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C59D2A]/10 rounded-full blur-3xl" />
              <div className="w-24 h-24 border-2 border-[#C59D2A] text-[#C59D2A] rounded-full flex items-center justify-center text-4xl mx-auto mb-10">
                ✓
              </div>
              <h2 className="text-4xl font-serif font-bold text-white mb-6 italic tracking-tighter">Transmission Successful.</h2>
              <p className="text-gray-400 max-w-md mx-auto font-medium text-lg leading-relaxed mb-12">
                Your credentials have been logged. Our admissions council will initiate contact within <span className="text-[#C59D2A]">48 hours</span>.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-[#C59D2A] text-[10px] font-black uppercase tracking-[0.4em] hover:text-white transition-colors"
              >
                Return to Registrar
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
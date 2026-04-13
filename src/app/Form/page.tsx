"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AdmissionForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 text-[15rem] font-bold text-slate-200/40 select-none pointer-events-none -z-0">
        APPLY
      </div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#8EE8D8] font-bold tracking-[0.3em] uppercase text-xs bg-[#001529] px-6 py-2 rounded-full inline-block mb-6"
            >
              Online Registration
            </motion.span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#001529]">
              Student <span className="text-blue-600 italic">Enrollment Form</span>
            </h1>
            <p className="text-slate-500 mt-4 max-w-lg mx-auto text-sm">
              Please provide accurate details to help us process your child's application for the upcoming academic session.
            </p>
          </div>

          {!isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="p-8 md:p-12">
                {/* Section 1: Student Information */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-8 h-8 rounded-full bg-[#001529] text-[#8EE8D8] flex items-center justify-center font-bold text-sm">1</span>
                    <h3 className="text-xl font-bold text-[#001529]">Student Information</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase ml-1">Full Name</label>
                      <input required type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#8EE8D8] transition outline-none" placeholder="Student's Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase ml-1">Date of Birth</label>
                      <input required type="date" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#8EE8D8] transition outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase ml-1">Applying for Grade</label>
                      <select className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#8EE8D8] transition outline-none appearance-none">
                        <option>Primary Year 1-6</option>
                        <option>O Levels / IGCSE</option>
                        <option>A Levels</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase ml-1">Gender</label>
                      <div className="flex gap-4 p-2">
                        <label className="flex items-center gap-2 cursor-pointer text-slate-600"><input type="radio" name="gender" className="accent-[#001529]" /> Male</label>
                        <label className="flex items-center gap-2 cursor-pointer text-slate-600"><input type="radio" name="gender" className="accent-[#001529]" /> Female</label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Parent/Guardian Details */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-8 h-8 rounded-full bg-[#001529] text-[#8EE8D8] flex items-center justify-center font-bold text-sm">2</span>
                    <h3 className="text-xl font-bold text-[#001529]">Guardian Details</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase ml-1">Parent Name</label>
                      <input required type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#8EE8D8] transition outline-none" placeholder="Primary Guardian" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase ml-1">Phone Number</label>
                      <input required type="tel" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#8EE8D8] transition outline-none" placeholder="+1 (000) 000-0000" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase ml-1">Residential Address</label>
                      <textarea rows={3} className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#8EE8D8] transition outline-none resize-none" placeholder="Full street address"></textarea>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-100">
                  <p className="text-xs text-slate-400 max-w-xs italic">
                    By submitting this form, you agree to our terms of enrollment and data privacy policy.
                  </p>
                  <button 
                    type="submit"
                    className="w-full md:w-auto bg-[#001529] text-white font-bold px-12 py-5 rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-blue-900/20 active:scale-95"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] p-16 text-center shadow-2xl border border-slate-100"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                ✓
              </div>
              <h2 className="text-3xl font-bold text-[#001529] mb-4">Application Received!</h2>
              <p className="text-slate-500 mb-8">
                Thank you for choosing us. Our admissions officer will contact you within **24-48 hours** to schedule an interview.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-blue-600 font-bold hover:underline"
              >
                Submit another application
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
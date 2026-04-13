"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  const phoneNumber = "1234567890";
  const message = "Hello! I would like to inquire about admissions.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    // Adjusted bottom and right spacing for mobile (bottom-6 right-6 vs bottom-8 right-8)
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] flex flex-col items-end gap-4">
      
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        // Added responsive width/height and responsive text size
        className="w-12 h-12 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center text-2xl md:text-3xl shadow-xl shadow-[#25D366]/30 cursor-pointer"
      >
        <FaWhatsapp />
        
        {/* Radar Ping Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></span>
      </motion.a>
    </div>
  );
}
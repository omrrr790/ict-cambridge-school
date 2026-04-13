import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ICT Cambridge | Sovereign Global Education",
  description: "Experience the pinnacle of British education. ICT Cambridge combines academic rigor with AI-driven innovation to shape the leaders of 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.variable} ${playfair.variable} antialiased font-sans bg-[#000D1A] text-white`}
      >
        {/* The 'bg-[#000D1A]' ensures that your dark Hero 
            and global sections feel unified from the moment the DOM paints.
        */}
        <main className="relative min-h-screen">
          {children}
          <WhatsAppWidget />
        </main>
      </body>
    </html>
  );
}
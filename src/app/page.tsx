import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Admissions from "@/components/Admissions";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Programs />
      <Admissions />
      <Contact />
      <CTA />
      <Testimonials />
      <Footer />
    </>
  );
}
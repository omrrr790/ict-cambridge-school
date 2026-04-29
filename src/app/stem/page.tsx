import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export default function StemPage() {
  return (
    <>
      <Header />
      <PageHero
        label="Junior Innovators"
        title="Where Play Meets Purpose."
        subtitle="Nurturing the natural curiosity of young minds through hands-on exploration in Science, Technology, Engineering, and Math."
      />

      {/* Intro Section - Child-Friendly Tone */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center max-w-3xl mb-16">
          <h2 className="text-4xl font-bold text-[#0B1F3A] mb-6">Building Thinkers, One Block at a Time</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            At ICT Cambridge, we believe children are natural scientists. Our Early-Years STEM program 
            replaces boring lectures with **interactive play**, encouraging kids to ask "Why?" and 
            "How?" while developing essential problem-solving skills for life.
          </p>
        </div>

        {/* Core Pillars - Simplified for Kids */}
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              heading: "Junior Robotics",
              text: "Using LEGO Education and simple kits to teach kids how to build their first moving machines and understand basic logic.",
            },
            {
              heading: "Nature Explorers",
              text: "Science isn't just in books! Kids explore plants, weather, and the environment through fun outdoor experiments.",
            },
            {
              heading: "Logic & Puzzles",
              text: "Foundation math through play. We use patterns, shapes, and games to make numbers feel like a fun adventure.",
            },
            {
              heading: "Little Engineers",
              text: "Building bridges with craft sticks and towers with blocks to learn how things stay up and why they fall down.",
            },
            {
              heading: "Creative Coding",
              text: "Screen-free coding games and block-based tools like Scratch Jr. that turn logic into colorful animations.",
            },
            {
              heading: "The Idea Lab",
              text: "A safe space where 'mistakes' are just new ways of learning. We encourage every child to try, fail, and try again.",
            },
          ].map((item) => (
            <div key={item.heading} className="p-10 border border-[#C59D2A]/10 rounded-3xl hover:bg-[#C59D2A]/5 transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4 group-hover:text-[#C59D2A]">{item.heading}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW SECTION: How We Teach (The 3C Method) */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0B1F3A] mb-4">Our Teaching Philosophy</h2>
            <p className="text-gray-500">We don't teach subjects; we spark wonder.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Curiosity", 
                desc: "We start with a question. Every lesson begins by letting children explore a mystery or a new toy." 
              },
              { 
                title: "Construction", 
                desc: "Kids learn by doing. They build, draw, and create physical models of what they are learning." 
              },
              { 
                title: "Confidence", 
                desc: "By solving small challenges, children build the 'I can do it' attitude needed for future success." 
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl text-center border-b-4 border-[#C59D2A]">
                <div className="w-12 h-12 bg-[#0B1F3A] text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold">
                  {index + 1}
                </div>
                <h4 className="text-xl font-bold text-[#0B1F3A] mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section - Soft Tech */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-[#0B1F3A] mb-6">Kid-Friendly Learning Tools</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Our STEM lab is designed specifically for smaller hands. We use safe, colorful, and 
              engaging tools that make complex ideas feel like second nature.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "LEGO Education Kits", 
                "Scratch Jr. Coding", 
                "Magnetic Building Tiles", 
                "Interactive Science Kits", 
                "Mathematical Storytelling", 
                "Digital Art Tablets"
              ].map((tool) => (
                <li key={tool} className="flex items-center gap-3 text-[#0B1F3A] font-bold">
                  <span className="text-[#C59D2A]">★</span> {tool}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 w-full aspect-square bg-[#FDF8E7] rounded-[4rem] flex items-center justify-center border-2 border-dashed border-[#C59D2A]/30">
             <div className="text-center p-10">
                <p className="text-[#C59D2A] font-bold italic mb-2">Visualizing the Space</p>
                <p className="text-gray-400 text-sm uppercase tracking-widest">[Image: Happy kids playing with LEGO Robotics]</p>
             </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
     

      <Footer />
    </>
  );
}
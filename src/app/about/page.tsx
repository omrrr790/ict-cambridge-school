import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageHero
        label="About ICT Cambridge"
        title="Future-Focused Education."
        subtitle="We deliver Cambridge-inspired learning for modern families through online, on-campus, and hybrid classes designed around student success."
      />
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto grid lg:grid-cols-3 gap-8">
          {[
            {
              heading: "Our Mission",
              text: "Build confident learners with strong academics, digital fluency, and ethical leadership.",
            },
            {
              heading: "Hybrid Model",
              text: "Students can learn in class, online live sessions, and through LMS recordings with flexible weekly plans.",
            },
            {
              heading: "Cambridge Pathway",
              text: "Primary to O/A Level progression with assessment support, mentoring, and structured test preparation.",
            },
          ].map((item) => (
            <div key={item.heading} className="p-10 border border-gray-100 rounded-3xl">
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">{item.heading}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

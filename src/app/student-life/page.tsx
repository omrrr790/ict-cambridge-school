import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function StudentLifePage() {
  return (
    <>
      <Header />
      <PageHero
        label="Student Life"
        title="Beyond the Classroom."
        subtitle="From debates and robotics to mentoring and community projects, students build confidence and leadership with balanced development."
      />
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          {[
            "Debate, MUN, and Public Speaking",
            "Coding, Robotics, and STEM Clubs",
            "Sports and Fitness Programs",
            "Career and University Counseling",
          ].map((item) => (
            <div key={item} className="p-10 rounded-3xl border border-gray-100 bg-[#F9FAFB]">
              <p className="text-[#0B1F3A] font-bold text-2xl">{item}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

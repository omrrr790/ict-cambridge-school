import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function PoliciesPage() {
  return (
    <>
      <Header />
      <PageHero
        label="School Policies"
        title="Safe and Structured Standards."
        subtitle="Clear policies for attendance, online classes, assessments, conduct, and parent communication to ensure quality learning for every student."
      />
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="container mx-auto bg-white border border-gray-100 rounded-3xl p-10 md:p-14">
          <ul className="grid md:grid-cols-2 gap-6">
            {[
              "Code of Conduct",
              "Online Class Etiquette",
              "Attendance and Punctuality",
              "Assessment and Academic Integrity",
              "Digital Safety and Device Use",
              "Parent-School Communication Policy",
            ].map((policy) => (
              <li key={policy} className="text-[#0B1F3A] font-bold text-lg border border-gray-100 rounded-2xl p-6">
                {policy}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}

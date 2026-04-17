import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const tracks = [
  "Early Years (Play Group, Nursery, KG)",
  "Primary (Classes 1-5)",
  "Lower Secondary (Classes 6-8)",
  "IGCSE / O Level Track",
  "AS & A Level Streams",
  "Online + Hybrid Learning Support",
];

export default function AcademicsPage() {
  return (
    <>
      <Header />
      <PageHero
        label="Academic Programs"
        title="Structured Learning Tracks."
        subtitle="A clear, stage-wise Cambridge pathway with strong teacher support, assessments, and digital class delivery."
      />
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {tracks.map((track, i) => (
            <div key={track} className="bg-white p-10 border-r border-b border-gray-200">
              <p className="text-[#C59D2A] text-[11px] font-black tracking-[0.3em] mb-3">0{i + 1}</p>
              <h3 className="text-2xl text-[#0B1F3A] font-bold">{track}</h3>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

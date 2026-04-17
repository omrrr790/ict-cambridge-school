import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export default function TrialDemoClassesPage() {
  return (
    <>
      <Header />
      <PageHero
        label="Trial / Demo Classes"
        title="Try Before You Enroll."
        subtitle="Book a trial class for online, on-campus, or hybrid learning and experience our teaching style before formal admission."
      />
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="container mx-auto grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-white border border-gray-100 rounded-3xl p-10 md:p-14">
            <h2 className="text-4xl font-serif font-bold text-[#0B1F3A] mb-8">How Trial Classes Work</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Select Class Level and Subject",
                "Choose Online or Campus Option",
                "Attend 40-Minute Demo Session",
                "Receive Learning Feedback",
              ].map((step, index) => (
                <div key={step} className="border border-gray-100 rounded-2xl p-6">
                  <p className="text-[#C59D2A] font-black text-[10px] tracking-[0.3em] mb-2">STEP 0{index + 1}</p>
                  <p className="text-[#0B1F3A] font-bold text-lg">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 bg-[#0B1F3A] rounded-3xl p-10 text-white">
            <p className="text-[#C59D2A] text-[10px] uppercase font-black tracking-[0.4em] mb-5">
              Trial Availability
            </p>
            <h3 className="text-3xl font-serif font-bold mb-6">Monday - Saturday</h3>
            <p className="text-gray-300 text-sm mb-8">
              Morning and evening slots available for school-going and private candidates.
            </p>
            <Link
              href="/Form"
              className="inline-block bg-[#C59D2A] text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.25em]"
            >
              Book Trial
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Admissions from "@/components/Admissions";

export default function AdmissionsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Admissions />
      </main>
      <Footer />
    </>
  );
}

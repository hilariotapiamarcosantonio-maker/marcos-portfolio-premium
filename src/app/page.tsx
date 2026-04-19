import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Cases from "@/components/Cases";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Manifesto />
      <Cases />
    </main>
  );
}

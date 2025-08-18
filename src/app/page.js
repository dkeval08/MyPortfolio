import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

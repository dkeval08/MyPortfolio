import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* <Header /> */}
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

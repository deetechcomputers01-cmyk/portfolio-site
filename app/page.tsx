import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Services, Achievements } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Contact, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Services />
        <Achievements />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

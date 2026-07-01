import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import BeyondScreen from "@/components/BeyondScreen";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Research />
        <Experience />
        <Projects />
        <BeyondScreen />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

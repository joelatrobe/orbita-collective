import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import HowWeWork from "@/components/HowWeWork";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BlueDivider from "@/components/BlueDivider";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TheProblem />
        <Clients />
        <Services />
        <About />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

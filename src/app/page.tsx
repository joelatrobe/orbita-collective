import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import HowWeWork from "@/components/HowWeWork";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  // Unique to the homepage. A description shared with other pages reads as
  // boilerplate, and Google swaps in its own snippet instead.
  description:
    "Service design, user research, customer experience (CX) strategy and product innovation consultancy. London & Milan. Senior experts, no big-consultancy premium.",
  alternates: { canonical: "https://www.orbitacollective.com" },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Clients />
        <TheProblem />
        <Services />
        <HowWeWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

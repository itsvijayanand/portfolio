import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Projects from "@/sections/Projects";
import CaseStudy from "@/sections/CaseStudy";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#e5e5e5] text-stone-900 selection:bg-[#f4b223] selection:text-stone-900 overflow-x-hidden">
      {/* Scroll indicator bar */}
      <ScrollProgress />

      {/* Sticky navigation header */}
      <Navbar />

      {/* Page Sections */}
      <Hero />
      <About />
      <Services />
      <Projects />
      <CaseStudy />
      <Testimonials />
      <Contact />
      
      {/* Creative signature footer */}
      <Footer />
    </main>
  );
}

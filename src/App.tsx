import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useScroll, useSpring } from "framer-motion";
import CustomCursor from "./components/ui/CustomCursor";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Presentation from "./components/Presentation";
import Gallery from "./components/Gallery";
import VideoBanner from "./components/VideoBanner";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Media query to avoid heavy animations on mobile/reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <CustomCursor />
      <Navbar />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-500 origin-left z-[9999]"
        style={{ scaleX }}
      />
      <Hero />
      <Features />
      <Presentation />
      <Gallery />
      <VideoBanner />
      <Contact />
      <footer className="py-8 text-center bg-black text-white/50 text-sm relative z-10">
        <p>© {new Date().getFullYear()} Sarıhan İnşaat. Tüm Hakları Saklıdır.</p>
        <p className="mt-2 text-white/30">Developed with Magic UI</p>
      </footer>
    </main>
  );
}

export default App;

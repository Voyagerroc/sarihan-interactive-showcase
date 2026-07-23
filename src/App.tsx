import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CustomCursor from "./components/ui/CustomCursor";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectFiles from "./pages/ProjectFiles";

gsap.registerPlugin(ScrollTrigger);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  useEffect(() => {
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

    gsap.ticker.add((time) => {
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
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proje" element={<ProjectFiles />} />
      </Routes>

      <footer className="py-8 text-center bg-black text-white/50 text-sm relative z-10">
        <p>© {new Date().getFullYear()} Sarıhan İnşaat. Tüm Hakları Saklıdır.</p>
        <p className="mt-2 text-white/30">Developed with Magic UI</p>
      </footer>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

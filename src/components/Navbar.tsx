import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Anasayfa", href: "#hero" },
  { name: "Proje", href: "#features" },
  { name: "Şantiye", href: "#presentation" },
  { name: "Galeri", href: "#gallery" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy logic
      const sections = navLinks.map(link => document.querySelector(link.href) as HTMLElement).filter(Boolean);
      
      let currentActive = "#hero";
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          currentActive = `#${section.id}`;
        }
      }
      
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    // Also set scrolled state regardless of page for styling
    const handleBasicScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleBasicScroll);
    return () => window.removeEventListener("scroll", handleBasicScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + href);
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled ? "bg-slate-900/80 backdrop-blur-md py-4 shadow-lg border-b border-white/10" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="text-white font-bold tracking-widest uppercase cursor-pointer text-xl flex items-center gap-3" onClick={() => scrollTo("#hero")}>
            <div className="bg-amber-500 p-1.5 rounded-lg text-slate-900 shadow-lg shadow-amber-500/20">
              <Building2 size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col items-start leading-none gap-1">
              <span>Sarıhan</span>
              <span className="text-amber-500 text-xs font-semibold tracking-[0.15em]">İnşaat LTD. ŞTİ.</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`text-sm tracking-wide font-medium transition-colors relative px-2 py-1 ${
                  activeSection === link.href ? "text-amber-400" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-500"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-slate-900/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`text-3xl font-bold tracking-widest uppercase transition-colors ${
                  activeSection === link.href ? "text-amber-400" : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

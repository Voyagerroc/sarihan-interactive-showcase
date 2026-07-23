import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const constructionImages = [
  "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "7.jpeg", "8.jpg", "9.jpg",
  "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpeg", "17.jpg", "18.jpg", 
  "19.jpg", "19.jpeg", "20.jpg", "20.jpeg", "21.jpeg", "22.jpg", "23.jpg", "24.jpg", "25.jpeg"
].map((img, index) => ({ type: "image", src: `/images/insaat/${img}`, title: `Şantiye Aşaması ${index + 1}` }));

const projectVideos = [
  { type: "video", src: "/videos/sarihan-deniz-cephesi.mp4", title: "Deniz Cephesinden Bakış" },
  { type: "video", src: "/videos/canva-sunum.mp4", title: "Proje Sunumu" },
  { type: "video", src: "/videos/deniz-cephe.mp4", title: "Deniz Cephesi Genel Bakış" },
  { type: "video", src: "/videos/drone-cekimi.mp4", title: "Drone Çekimi" },
  { type: "video", src: "/videos/sarihan-bulvar-cephesi-2.mp4", title: "Bulvar Cephesi" },
];

const mediaItems = [...projectVideos, ...constructionImages];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Duplicate items for infinite loop effect
  const repeatedItems = [...mediaItems, ...mediaItems];

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const slider = sliderRef.current;
    if (!slider) return;

    // Check if device is touch or screen is small
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (!isMobile) {
      // Create the infinite marquee animation only for desktop
      const marqueeTween = gsap.to(slider, {
        xPercent: -50,
        ease: "none",
        repeat: -1,
        duration: 30, // Base duration
      });

      // Hover effect to slow down
      slider.addEventListener("mouseenter", () => {
        gsap.to(marqueeTween, { timeScale: 0.2, duration: 0.5, overwrite: "auto" });
      });
      
      slider.addEventListener("mouseleave", () => {
        gsap.to(marqueeTween, { timeScale: 1, duration: 0.5, overwrite: "auto" });
      });
    }

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="gallery" className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="mb-16 text-center px-4">
        <span className="text-amber-600 font-semibold uppercase tracking-widest text-sm">Koleksiyon</span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">Proje Galerisi</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Sarıhan İnşaat 3 projesinin inşaat sürecinden bitmiş haline tüm detayları keşfedin.</p>
      </div>

      <div className="relative flex items-center overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-4">
        <div 
          ref={sliderRef} 
          className="flex gap-6 px-[5vw] flex-nowrap w-max"
          style={{ scrollbarWidth: 'none', willChange: 'transform' }}
        >
          {repeatedItems.map((item, idx) => (
            <figure key={idx} className="snap-center shrink-0 relative flex-none w-[80vw] md:w-[40vw] lg:w-[25vw] aspect-video cursor-pointer overflow-hidden rounded-2xl border border-gray-200 hover:border-amber-500 transition-colors shadow-lg bg-white p-2">
              {item.type === "image" ? (
                <img src={item.src} alt={item.title} className="w-full h-full object-cover rounded-xl" />
              ) : (
                <video src={item.src} autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl" />
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl m-2">
                <span className="text-white font-semibold tracking-wider uppercase text-sm">{item.title}</span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

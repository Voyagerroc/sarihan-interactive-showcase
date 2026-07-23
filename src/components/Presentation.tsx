import { useRef } from "react";
import { Building2, BedDouble, Waves, MapPin, GraduationCap, Building, Store } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import CraneSVG from "./ui/CraneSVG";

gsap.registerPlugin(ScrollTrigger);

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (ref.current) ref.current.textContent = value.toString();
      return;
    }
    
    gsap.fromTo(ref.current, 
      { innerHTML: 0 }, 
      {
        innerHTML: value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        }
      }
    );
  });

  return <span ref={ref}>0</span>;
}

export default function Presentation() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Morph background color from white to a very light amber when scrolling into view
    gsap.to(sectionRef.current, {
      backgroundColor: "#fffbeb", // Tailwind amber-50
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, { scope: sectionRef });

  const details = [
    { icon: Building2, text: "18 daireden oluşan özel tasarım bina" },
    { icon: BedDouble, text: "Her katta 4 adet 2+1 ve 2 adet 1+1 daire" },
    { icon: Waves, text: "Denize sadece 500 metre mesafe" },
    { icon: MapPin, text: "Bulvar yoluna komşu stratejik konum" },
    { icon: GraduationCap, text: "Okullar bölgesinde, merkezi lokasyon" },
    { icon: Building, text: "Yeni yapılacak 1000 konutluk sitelere komşu" },
  ];

  const shops = [
    { title: "Alt Kot Dükkan", desc: "Deniz Cephesindeki dükkan.", size: 441, detail: "(bodrum ile birlikte)" },
    { title: "Üst Kot Dükkan", desc: "Bulvar Cephesindeki sundurmalı dükkan.", size: 667, detail: "(sundurma ile birlikte)" }
  ];

  return (
    <section ref={sectionRef} id="presentation" className="py-24 bg-white px-4 md:px-12 border-t border-gray-100 transition-colors duration-1000 relative overflow-hidden">
      <CraneSVG />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <span className="text-amber-600 font-semibold uppercase tracking-widest text-sm">Proje Detayları</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">Sarıhan İnşaat 3 Sunumu</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Projenin detaylı analizini, teknik özelliklerini ve mimari donatılarını inceleyin.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Features List */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Proje Hakkında</h3>
            <ul className="space-y-4">
              {details.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-slate-700 bg-white p-4 rounded-xl shadow-sm border border-gray-50 hover:border-amber-200 hover:scale-[1.02] transition-all cursor-default">
                  <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
                    <item.icon size={24} />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Shops */}
          <div className="space-y-8 lg:mt-12">
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Building2 size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Store className="text-amber-500" /> Ticari Alanlar</h3>
              <div className="space-y-6 relative z-10">
                {shops.map((shop, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                    <h4 className="text-xl font-semibold text-amber-400 mb-2">{shop.title}</h4>
                    <p className="text-slate-400 mb-3">{shop.desc}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">
                        <AnimatedNumber value={shop.size} />
                      </span>
                      <span className="text-amber-500 font-medium">m²</span>
                      <span className="text-sm text-slate-500 ml-2">{shop.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { BentoCard, BentoGrid } from "./magicui/bento-grid";
import { ShieldCheck, Gem, MapPin, HardHat } from "lucide-react";

const features = [
  {
    Icon: ShieldCheck,
    name: "Güvenli Yapı",
    description: "Depreme dayanıklı, son teknoloji inşaat teknikleri ile inşa edilmiş güvenilir yapılar.",
    href: "#",
    cta: "Daha fazla bilgi",
    background: <video src="/videos/sarihan-bulvar-cephesi-2.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] transition-all group-hover:scale-105 group-hover:grayscale-0" />,
    className: "lg:col-span-2",
  },
  {
    Icon: Gem,
    name: "Lüks Malzeme",
    description: "Birinci sınıf işçilik ve kaliteli malzeme.",
    href: "#",
    cta: "Detayları Gör",
    background: <img src="/images/bina2.jpg" className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] transition-all group-hover:scale-105 group-hover:grayscale-0" />,
    className: "lg:col-span-1",
  },
  {
    Icon: MapPin,
    name: "Merkezi Konum",
    description: "Şehrin kalbinde, her yere yakın stratejik projeler.",
    href: "#",
    cta: "Haritada İncele",
    background: <img src="/images/insaat-bulvar.jpg" className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] transition-all group-hover:scale-105 group-hover:grayscale-0" />,
    className: "lg:col-span-1",
  },
  {
    Icon: HardHat,
    name: "Yılların Tecrübesi",
    description: "Sarıhan İnşaat güvencesiyle, modern mimari ve üstün mühendislik.",
    href: "#",
    cta: "Hakkımızda",
    background: <video src="/videos/drone-cekimi.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] transition-all group-hover:scale-105 group-hover:grayscale-0" />,
    className: "lg:col-span-2",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-amber-600 font-semibold uppercase tracking-widest text-sm">Güven ve Kalite</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">Yılların Tecrübesiyle</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Sarıhan İnşaat olarak, modern mimariyi ve üstün mühendislik tekniklerini harmanlayarak, güvenli ve lüks yaşam alanları inşa ediyoruz. Her projemizde kalite standartlarını yeniden belirliyoruz.</p>
        </div>
        <BentoGrid className="lg:grid-rows-2">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

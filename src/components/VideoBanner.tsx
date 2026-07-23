import { useRef, useEffect } from "react";

export default function VideoBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(console.error);
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { rootMargin: "200px" } // Start playing slightly before it comes into view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[15vh] min-h-[120px] max-h-[200px] overflow-hidden">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src="/videos/sarihan-deniz-cephesi.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
      
      <div className="absolute inset-0 flex items-center px-8 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-1">Yeni Proje</span>
          <h3 className="text-white font-semibold tracking-wide text-lg md:text-xl">
            Sarıhan İnşaat 3 • Dolunay
          </h3>
        </div>
      </div>
    </section>
  );
}

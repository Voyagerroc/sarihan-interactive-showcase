import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CraneSVG() {
  const containerRef = useRef<SVGSVGElement>(null);
  const armRef = useRef<SVGGElement>(null);

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    gsap.fromTo(armRef.current,
      { rotation: -25 },
      {
        rotation: 25,
        transformOrigin: "725px 180px",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <svg 
      ref={containerRef}
      className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none z-0" 
      preserveAspectRatio="none"
      viewBox="0 0 1000 1000" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Crane Tower */}
      <path d="M700 1000 L700 200 L750 200 L750 1000 Z" fill="#1e293b"/>
      
      {/* Crane Tower cross bracing */}
      <path d="M700 900 L750 850 M700 850 L750 900 M700 700 L750 650 M700 650 L750 700 M700 500 L750 450 M700 450 L750 500 M700 300 L750 250 M700 250 L750 300" stroke="#1e293b" strokeWidth="8"/>
      
      {/* Arm Group (Rotatable) */}
      <g ref={armRef} style={{ transformOrigin: "725px 180px", willChange: "transform" }}>
        {/* Main jib */}
        <path d="M725 180 L100 180 L100 160 L725 160 Z" fill="#1e293b"/>
        
        {/* Counter jib */}
        <path d="M725 180 L900 180 L900 160 L725 160 Z" fill="#1e293b"/>
        
        {/* Tower peak */}
        <path d="M700 200 L725 50 L750 200 Z" fill="#1e293b"/>
        
        {/* Tie rods */}
        <path d="M725 50 L200 160 M725 50 L850 160" stroke="#1e293b" strokeWidth="4"/>
        
        {/* Hook and cable */}
        <path d="M250 180 L250 700" stroke="#1e293b" strokeWidth="3"/>
        <path d="M240 700 L260 700 L260 730 C260 745 240 745 240 730" fill="none" stroke="#f59e0b" strokeWidth="8"/>

        {/* Counter weight */}
        <rect x="840" y="180" width="50" height="40" fill="#1e293b" />
      </g>
      
      {/* Crane Cabin (Static) */}
      <rect x="680" y="160" width="40" height="50" fill="#f59e0b" rx="4" />
      <rect x="685" y="165" width="20" height="25" fill="#bae6fd" />
    </svg>
  );
}

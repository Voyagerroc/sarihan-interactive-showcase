import Hero from "../components/Hero";
import Features from "../components/Features";
import Presentation from "../components/Presentation";
import Gallery from "../components/Gallery";
import VideoBanner from "../components/VideoBanner";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Presentation />
      <Gallery />
      <VideoBanner />
      <Contact />
    </>
  );
}

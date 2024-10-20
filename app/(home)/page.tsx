
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="min-h-[400vh] bg-black overflow-hidden">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-5 ">
          <Navbar />
          <HeroSection />
        </div>
        <div className="h-10 xl:h-42 bg-gradient-to-t from-black absolute -bottom-5 left-0  xl:bottom-0 w-full">
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20 relative">
        <Skills/>
        <Projects/>
      </div>
    </div>
  );
}
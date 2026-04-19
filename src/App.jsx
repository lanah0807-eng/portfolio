import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Contact from "./components/contact";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = scrollY / maxScroll;

      const startColor = [200, 230, 255];
      const endColor = [6, 24, 54];

      const r = startColor[0] + (endColor[0] - startColor[0]) * progress;
      const g = startColor[1] + (endColor[1] - startColor[1]) * progress;
      const b = startColor[2] + (endColor[2] - startColor[2]) * progress;

      document.body.style.background = `rgb(${r}, ${g}, ${b})`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-shell">
      <div className="ocean-blur blur-1"></div>
      <div className="ocean-blur blur-2"></div>
      <div className="ocean-blur blur-3"></div>

      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      <div className="bubble bubble-4"></div>
      <div className="bubble bubble-5"></div>

      <Navbar />
      <Intro />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
import "./styles/App.scss";
import React, { useEffect, useState } from 'react'
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";

import Projects from "./components/Projects";
import SkillsSection from "./components/SkillsSection";

function App() {
  const [overlay, setOverlay] = useState(false)
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const toggleNav = () => {
    setOverlay(!overlay)
  }

  if (document.getElementById('navbar') && document.body) {
    if (overlay) {
      document.getElementById('navbar').classList.add('active-nav')
      document.getElementById('navbar').classList.remove('collapsed')
    } if (!overlay) {
      document.getElementById('navbar').classList.remove('active-nav')
      document.getElementById('navbar').classList.add('collapsed')
    }
  }


  return (
    <>
    <div className={overlay ? 'overlay active' : 'overlay'}/>
    <div className="hero">
      <Navbar toggleNav={toggleNav} showNav={overlay}/>
      <Introduction scroll={scroll} />
      <SkillsSection />
      <Projects />
      <Footer />
    </div>
    </>
  );
}

export default App;

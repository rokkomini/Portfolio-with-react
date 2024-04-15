import "./styles/App.scss";
import React, { useState } from 'react'
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";

import Projects from "./components/Projects";
import SkillsSection from "./components/SkillsSection";

function App() {
  const [overlay, setOverlay] = useState(false)

  const toggleNav = () => {
    setOverlay(!overlay)
  }
 
  console.log('overlay', overlay)
  return (
    <>
    <div className={overlay ? 'overlay active' : 'overlay'}/>
    <div className="hero">
      <Navbar toggleNav={toggleNav} showNav={overlay}/>
      <Introduction />
      <SkillsSection />
      <Projects />
      <Footer />
    </div>
    </>
  );
}

export default App;

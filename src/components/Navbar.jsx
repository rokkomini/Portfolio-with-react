import React, { useEffect, useState } from 'react'
import { SiMaildotru, SiLinkedin, SiGithub } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";

import { HiMenu } from "react-icons/hi";

export default function Navbar({ toggleNav, showNav }) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  if (document.getElementById('navbar') && document.body) {
    if (showNav) {
      document.getElementById('navbar').classList.add('active-nav')
      // document.getElementById('navbar').classList.remove('collapsed')
    } if (!showNav) {
      document.getElementById('navbar').classList.remove('active-nav')
    }
  }

  return (
    <div className={scroll ? 'navbar flex collapsed' : 'navbar flex'} id='navbar'>
      <div className={showNav ? 'nav-content flex column' : 'nav-content flex row'}>
        <div className={showNav ? 'hide' : 'header'}>
          <img className='logo' src={require("./images/logo2.png")} alt="logo" />
        </div>

        <button className={showNav ? 'hide' : 'toggleBtn show-small'} id="hamburger" onClick={toggleNav}>
          <HiMenu />
        </button>
        {/* <button className={showNav ? 'toggleBtn show-small' : 'hide'} onClick={toggleNav}>
          <AiOutlineClose /> 
        </button> */}

        <div className='link-section'>
          <div className="show-large">
            <ul>
              <li><a href="mailto:mika.hagerstrom@gmail.com" rel="noreferrer"><SiMaildotru /></a></li>
              <li><a href="https://www.linkedin.com/in/mika-h%C3%A4gerstr%C3%B6m-9247b8157/" target="_blank" rel="noreferrer" ><SiLinkedin /></a></li>
              <li><a href="https://github.com/rokkomini" target="_blank" rel="noreferrer" ><SiGithub /></a></li>
            </ul>
          </div>

          <div className="show-small column end" style={showNav ? { display: 'flex', flexDirection: 'column', alignItems: 'flex-end' } : { display: 'none' }}>
            <button className={showNav ? 'toggleBtn show-small' : 'hide'} onClick={toggleNav}><AiOutlineClose /> </button>
            <div className='flex column'>
              <ul>
                <li onClick={toggleNav}><a href="#skills">Skills</a></li>
                <li onClick={toggleNav}><a href="#projects">Projects</a></li>
              </ul>
              <ul>
                <li><a href="mailto:mika.hagerstrom@gmail.com">E-mail</a></li>
                <li><a href="https://www.linkedin.com/in/mika-h%C3%A4gerstr%C3%B6m-9247b8157/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/rokkomini" target="_blank" rel="noreferrer" >Github</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

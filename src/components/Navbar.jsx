import React, { useEffect, useState } from 'react'
import { SiMaildotru, SiLinkedin, SiGithub } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";

import { HiMenu } from "react-icons/hi";

const navbar = document.getElementsByClassName('navbar')

window.scroll(function () {
  if ((this).scrollTop() > 50) {
    navbar.addClass('collapsed')
  } else {
    navbar.removeClass('collapsed')
  }
})

window.scroll(function () {
  if ((this).scrollTop() > 50) {
    navbar.style.backgroundColor = 'red'
  } else {
    navbar.style.backgroundColor = 'blue'
  }
})

export default function Navbar({ toggleNav, showNav }) {
  const [scroll, setScroll] = useState(false);
  // const [showNav, setShowNav] = useState(false);

  // const togglingHamburger = () => {
  //   setShowNav(!showNav)
  //   console.log('show naw', showNav)
  // }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  console.log('show nav', showNav)

  return (

        <div className={scroll ? 'navbar flex collapsed' : 'navbar flex'}>
          <div className={showNav ? 'nav-content flex column' : 'nav-content flex row'}>
            <div className={showNav ? 'hide' : 'header'}>
              <img className='logo' src={require("./images/logo2.png")} alt="logo" />
            </div>
            <button className={showNav ? 'hide' : 'toggleBtn show-small'} id="hamburger" onClick={toggleNav}>
              <HiMenu />
            </button>
            <button className={showNav ? 'toggleBtn show-small' : 'hide'} onClick={toggleNav}><AiOutlineClose /> </button>
            <div className='link-section'>
              <div className="show-large">
                <ul>
                  <li><a href="mailto:mika.hagerstrom@gmail.com"><SiMaildotru /></a></li>
                  <li><a href="https://www.linkedin.com/in/mika-h%C3%A4gerstr%C3%B6m-9247b8157/" target="_blank"><SiLinkedin /></a></li>
                  <li><a href="https://github.com/rokkomini" target="_blank"><SiGithub /></a></li>
                </ul>
              </div>
              <div className="show-small active-nav" style={showNav ? { display: 'flex' } : { display: 'none' }}>
                <div className='flex end column'>
                  <ul>
                      <li onClick={toggleNav}><a href="#skills">Skills</a></li>
                      <li onClick={toggleNav}><a href="#projects">Projects</a></li>
                    </ul>
                    <h3>Contact me</h3>
                    <ul>
                      <li><a href="mailto:mika.hagerstrom@gmail.com">E-mail</a></li>
                      <li><a href="https://www.linkedin.com/in/mika-h%C3%A4gerstr%C3%B6m-9247b8157/" target="_blank">LinkedIn</a></li>
                      <li><a href="https://github.com/rokkomini" target="_blank">Github</a></li>
                    </ul>
                </div>
              </div>
            </div>
            {/* <div className='flex end column link-section show-small' style={showNav ? { display: 'flex' } : { display: 'none' }}>
              {/* <div><button className='toggleBtn' onClick={toggleNav}><AiOutlineClose /> </button></div>
              <div className='flex column'>
                <ul>
                  <li onClick={toggleNav}><a href="#skills">Skills</a></li>
                  <li onClick={toggleNav}><a href="#projects">Projects</a></li>
                </ul>
                <h3>Contact me</h3>
                <ul>
                  <li><a href="mailto:mika.hagerstrom@gmail.com">E-mail</a></li>
                  <li><a href="https://www.linkedin.com/in/mika-h%C3%A4gerstr%C3%B6m-9247b8157/" target="_blank">LinkedIn</a></li>
                  <li><a href="https://github.com/rokkomini" target="_blank">Github</a></li>
                </ul>
              </div>
            </div>
            */}
                    </div>
          </div>


  )
}

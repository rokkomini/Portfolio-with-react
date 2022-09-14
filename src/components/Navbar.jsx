import React, { useState } from 'react'
import { SiMaildotru, SiLinkedin, SiGithub } from "react-icons/si";
import { HiMenu } from "react-icons/hi";



export default function Navbar() {

    const [showNav, setShowNav] = useState(false)

    function toggleHamburger(){
        setShowNav(!showNav)
        
    }
    return (

        <div className='navbar'>
            <div className="header">
                <img className='logo' src={require("./images/logo2.png")} alt="logo" />
            </div>
            <div className="link-section">
                <ul >
                    <li><a href="mailto:mika.hagerstrom@gmail.com"><SiMaildotru /></a></li>
                    <li><a href="https://www.linkedin.com/in/mika-h%C3%A4gerstr%C3%B6m-9247b8157/"><SiLinkedin /></a></li>
                    <li><a href="https://github.com/rokkomini"><SiGithub /></a></li>
                </ul>
                {/* <button class="hamburger" id="hamburger" onCLick={toggleHamburger}>
                    <HiMenu />
                </button> */}
                
            </div>
        </div>

    )
}

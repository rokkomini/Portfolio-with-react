import React from 'react'

export default function Introduction({scroll}) {
    return (
        <div className='profile'>
            <div className="image-section"><div id='bitmap'>
                <img className={scroll ? 'profile-img scroll-img' : 'profile-img' } src={require("./images/jag-igen.jpg")} alt="" /></div></div>
            <div className="intro-section">

                <h1>Hello, Mika here!</h1>
                <p>Welcome to my portfolio.
                    I am an aspiring web developer dedicated to building awesome stuff,
                    both in frontend and backend. Working mostly with the MERN-stack and frontend. 
                    Currently on parental leave, I have dedicated this time to sharpen my skills and continue to test new ways and frameworks.
                    </p>
                <ul>
                    <li>Located in Stockholm</li>
                    <li>30 years</li>
                    <li>Loves a good fika and quizzing!</li>
                </ul>
            </div>
        </div>
    )
}



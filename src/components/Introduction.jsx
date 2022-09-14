import React from 'react'

export default function Introduction() {
    return (
        <div className='profile'>
            <div className="image-section"><div id='bitmap'><img className='profileImg' src={require("./images/jag-igen.jpg")} alt="" /></div></div>
            <div className="intro-section">

                <h1>Hello, Mika here!</h1>
                <p>Welcome to my portfolio.
                    I am an aspiring web developer dedicated to building awesome stuff,
                    both in frontend and backend. Working mostly with the MERN-stack and frontend.</p>
                <ul>
                    <li>Located in Stockholm</li>
                    <li>28 years</li>
                    <li>Loves a good fika and quizzing!</li>
                </ul>
            </div>
        </div>
    )
}



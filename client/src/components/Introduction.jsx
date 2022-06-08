import React from 'react'

export default function Introduction() {
    return (
        <div className='profile'>
            <div className="image-section"><div id='bitmap'><img className='profileImg' src={require("./images/hej-jag.jpg")} alt="" /></div></div>
            <div className="intro-section">
              
                <h3>Hello, Mika here!</h3>
                <p>Welcome to my portfolio.
                    I am an aspiring web developer dedicated to building awesome stuff,
                    both in frontend and backend.</p>
            </div>
        </div>
    )
}



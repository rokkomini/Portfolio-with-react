import React from 'react'

export default function Introduction() {
    return (
        <div className='profile'>
            <div className="image-section"><img className='profileImg' src={require("./images/hej-jag.jpg")} alt="" /></div>
            <div className="intro-section">
                <h2>Hello!</h2>
                <h3>My Name is Mika</h3>
            </div>
        </div>
    )
}



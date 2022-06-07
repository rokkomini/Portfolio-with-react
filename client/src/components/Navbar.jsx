import React from 'react'


export default function Navbar() {
    return (

        <div className='navbar'>
            <div className="header">
                <img className='logo' src={require("./images/logo2.png")} alt="logo" />
            </div>
            <div className="link-section">
                <ul>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                </ul>
            </div>
        </div>

    )
}

import React from 'react'

export default function Projects() {
    return (
        <div className="project-section">
            <div className="project-container">
                <div className="header">
                    <h1>Projects</h1>
                </div>
                <div className="project1 project-card">
                    <img
                        className="project-image"
                        src={require("./images/project1.jpg")}
                        alt="project one"
                    />
                    <div className='project-link-container'>
                        <div className="project-link"><a href="#">View here</a></div>
                    </div>
                </div>
                <div className="project2 project-card">
                    <img
                        className="project-image"
                        src={require("./images/project1.jpg")}
                        alt="project two"
                    />
                     <div className='project-link-container'>
                        <div className="project-link"><a href="#">View here</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}



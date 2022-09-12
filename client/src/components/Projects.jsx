import React from 'react'
import { useState } from 'react'
import ProjectModal from './ProjectModal'

export default function Projects() {
    const [modalOpen, setModalOpen] = useState(false)
    

  
    return (
        <div className="project-section">
            <div className="project-container">
                <div className="header">
                    <h1>Selected projects</h1>
                </div>
                <div className="project1 project-card">
                    <img
                        className="project-image"
                        src={require("./images/Todos-portfolio/dashboard-small.PNG")}
                        alt="project one"
                    />
                    <div className='project-link-container'>
                        <ProjectModal />
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



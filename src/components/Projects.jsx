import React from 'react'
import { useState } from 'react'
import ProjectModal from './ProjectModal'
import { projects } from './data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
    const [modalOpen, setModalOpen] = useState(false)
    

  
    return (
        <div className="project-section">
            <div className="project-container">
                <div className="header">
                    <h1>Selected projects</h1>
                </div>
                <div className="projects-preview">{projects && projects.map(p =>  <ProjectCard project={p} key={p.name}/> )}</div>
            </div>
        </div>
    )
}



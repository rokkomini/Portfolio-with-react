import React from 'react'
import ProjectModal from './ProjectModal'

export default function ProjectCard({project}) {
  return (
    <div className="project-card">
      <p>{project.name}</p>
      <img
        className="project-image"
        src={require(`${project.mainImg.img}`)}
        alt={project.mainImg.alt}
      />
      <div className='project-link-container'>
        <ProjectModal project={project}/>
      </div>
    </div>
  )
}

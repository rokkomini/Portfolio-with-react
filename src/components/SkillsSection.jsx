import React from 'react'
import { skills } from './data/skills'
import { FiCheck } from "react-icons/fi";


console.log(skills)

export default function SkillsSection() {
    return (
      <div className='skillSection' id='skills'>
        <div>
          <h2>Skills</h2>
        </div>
        <div className='listedSkills'>
          {skills.map((s, index) => (
            <div key={index}>
              <FiCheck /> {s}
            </div>
          ))}
        </div>
      </div>
    )
}

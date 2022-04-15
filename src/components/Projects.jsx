import React, { useState, useContext } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import Project from './Project'

import projects from '../data/projects.json'
import { shuffle } from '../helpers'

import '../styles/projects.scss'

const Projects = () => {
    const [smooth] = useContext(SmoothContext)
    // const [projects] = useState(shuffle(shuffle(projectsJSON)))

    return (
        <section 
            className="projects-container"
            style={{ color: smooth.primaryColor }}
        >   
            {shuffle(projects).map((project,i ) => (
                <Project project={project} key={i} index={i} />
            ))}
        </section>
    )
}

export default Projects
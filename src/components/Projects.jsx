import React, { useContext } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import Project from './Project'

import { shuffle } from '../helpers'

import '../styles/projects.scss'

const Projects = () => {
    const [smooth] = useContext(SmoothContext)

    return (
        <section 
            className="projects-container"
            style={{ color: smooth.primaryColor }}
        >   
            {shuffle(smooth.projects).map((project,i ) => (
                <Project project={project} key={i} index={i} />
            ))}
        </section>
    )
}

export default Projects
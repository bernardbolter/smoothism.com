import React, { useEffect, useContext } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import { useWindowSize } from '../helpers/useWindowSize'
import { motion, scrollBy } from 'framer-motion'
import * as Scroll from 'react-scroll';
import Project from './Project'

import '../styles/projects.scss'

const Projects = () => {
    const [smooth, setSmooth] = useContext(SmoothContext)
    const size = useWindowSize()
    var scroll = Scroll.animateScroll;

    

    return (
        <section 
            className="projects-container"
            style={{ color: smooth.primaryColor }}
        >
            <motion.div 
                className="view-projects"
                style={{
                    left: smooth.projectBorder,
                    top: smooth.introHeight
                }}
                onClick={() => {
                    scroll.scrollTo(size.height * .8)
                }} 
            >
                <p>View</p>
                <p>projects</p>
            </motion.div>
            <Project />
        </section>
    )
}

export default Projects
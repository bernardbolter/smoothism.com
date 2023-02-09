import React, { useContext } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import { motion } from 'framer-motion'
import * as Scroll from 'react-scroll'
import { useWindowSize } from '../helpers/useWindowSize'
import Project from './Project'

const Projects = () => {
    const [smooth] = useContext(SmoothContext)
    var scroll = Scroll.animateScroll;
    const size = useWindowSize()

    return (
        <section 
            className="projects-container"
            style={{ color: smooth.primaryColor }}
        >   
            {smooth.projects.map((project,i ) => (
                <Project project={project} key={i} index={i} />
            ))}
            <motion.div 
                className="go-contact"
                onClick={() => {
                    scroll.scrollTo(smooth.introHeight + (size.height * smooth.projects.length))
                }} 
            >
                <p
                    style={{
                        left: smooth.projects.length % 2 === 0 ?smooth.projectBorder : "auto",
                        right: smooth.projects.legth % 2 === 0 ? "auto" : smooth.projectBorder,
                        top: -40,
                    }}
                >Contact Us</p>
            </motion.div>
        </section>
    )
}

export default Projects
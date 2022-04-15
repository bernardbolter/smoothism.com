import React, { useState, useEffect, useContext } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useWindowSize } from '../helpers/useWindowSize'
import * as Scroll from 'react-scroll'

import '../styles/project.scss'

const Project = ({ project, index }) => {
    const [smooth] = useContext(SmoothContext)
    const [viewWebsite, setViewWebsite] = useState(false)
    const [even] = useState(index % 2 == 0 ? true : false)
    const size = useWindowSize()
    const { scrollY } = useViewportScroll()
    var scroll = Scroll.animateScroll;
    const movingWidth = useTransform(scrollY, [index * size.height, smooth.introHeight + (size.height * index)], [size.width - 44 - smooth.projectBorder - smooth.projectBorder, smooth.projectBorder])
    const bottomHeight = useTransform(scrollY, [index * size.height, smooth.introHeight + (size.height * index)], [size.height - 44 - smooth.projectBorder - smooth.projectBorder, smooth.projectBorder])
    
    console.log(even)

    return (
        <section className="project-container">
            <motion.div 
                className="view-projects"
                style={{
                    left: even ? smooth.projectBorder : "auto",
                    right: even ? "auto" : smooth.projectBorder,
                    top: index === 0 ? 0 : -40
                }}
                onClick={() => {
                    scroll.scrollTo(size.height * .8 + (size.height * index))
                }} 
            >
                <p>{index === 0 ? "View" : "Next"}</p>
                <p>Project{index === 0 ? "s" : ""}</p>
            </motion.div>
            <div 
                className="project-mask"
                style={{
                    width: size.width - 15,
                    height: size.height
                }}    
            >
                <motion.div 
                    className="project-square left"
                    style={{
                        background: smooth.primaryLight,
                        left: 0,
                        top: 0,
                        height: "100%",
                        width: even ? smooth.projectBorder : movingWidth
                    }}
                />
                <motion.div
                    className="project-square top"
                    style={{
                        background: smooth.primaryLight,
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: smooth.projectBorder
                    }}
                />
                <motion.div
                    className="project-square right"
                    style={{
                        background: smooth.primaryLight,
                        right: 0,
                        top: 0,
                        width: even ? movingWidth : smooth.projectBorder,
                        height: "100vh"
                    }}
                />
                <motion.div
                    className="project-square bottom"
                    style={{
                        background: smooth.primaryLight,
                        left: 0,
                        bottom: 0,
                        width: "100%",
                        height: bottomHeight
                    }}
                />
                <motion.div
                    className="project-square angle"
                    style={{
                        background: smooth.primaryLight,
                        right: -20,
                        bottom: -100,
                        width: "100%",
                        height: size.height * .2,
                        transform: 'rotate(-10deg)'
                    }}
                />
                <div 
                    className="web-link"
                    onClick={() => setViewWebsite(true)}
                >
                    <p
                        style={{ color: smooth.primaryDark }}
                    >view website</p>
                </div>
            </div>
            <div 
                className="project-iframe"
                style={{
                    width: size.width - 15,
                    height: size.height
                }}    
            >
                <iframe
                    title={project.website}
                    width={size.width}
                    height={size.height}
                    scrolling="no"
                    frameBorder="0"
                    src={project.link}
                />
            </div>
        </section>
    )
}

export default Project
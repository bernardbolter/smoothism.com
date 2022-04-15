import React, { useState, useEffect, useContext } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useWindowSize } from '../helpers/useWindowSize'
import * as Scroll from 'react-scroll'

import { ReactComponent as Github } from '../svg/github.svg'

import '../styles/project.scss'

const Project = ({ project, index }) => {
    const [smooth] = useContext(SmoothContext)
    const [viewWebsite, setViewWebsite] = useState(false)
    const [even] = useState(index % 2 === 0 ? true : false)
    const size = useWindowSize()
    const { scrollY } = useViewportScroll()
    var scroll = Scroll.animateScroll;
    const movingWidth = useTransform(scrollY, [index * size.height, smooth.introHeight + (size.height * index)], [size.width - 44 - smooth.projectBorder - smooth.projectBorder, smooth.projectBorder])
    const bottomHeight = useTransform(scrollY, [index * size.height, smooth.introHeight + (size.height * index)], [size.height - 44 - smooth.projectBorder - smooth.projectBorder, smooth.projectBorder])
    const projectLinkVisible = useTransform(scrollY, [(index * size.height) + (smooth.introHeight * .1), (index * size.height) + (smooth.introHeight * .5)], [1, 0])
    const headerVisible = useTransform(scrollY, [(index * size.height) + (smooth.introHeight * .5), (index * size.height) + (smooth.introHeight * .9)], [0, 1])
    // const footerVisible = useTransform(scrollY, [], [])

    return (
        <section className="project-container">
            <motion.div 
                className="view-projects"
                style={{
                    left: even ? smooth.projectBorder : "auto",
                    right: even ? "auto" : smooth.projectBorder,
                    top: index === 0 ? 0 : -40,
                    opacity: projectLinkVisible
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
                <motion.p
                    className="project-website"
                    style={{ 
                        left: smooth.projectBorder,
                        top: smooth.projectBorder - 20,
                        opacity: headerVisible
                    }}
                >{project.website}</motion.p>
                <motion.p
                    className="project-tagline"
                    style={{ 
                        right: smooth.projectBorder,
                        top: smooth.projectBorder - 20,
                        opacity: headerVisible
                    }}
                >{project.tagline}</motion.p>
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
                <motion.p
                    className={even ? "made-with made-right" : "made-with -made-left"}
                >
                    <span>made with: </span>
                    {project.madeWith}
                </motion.p>
                <motion.a
                    className={even ? "project-github github-right" : "project-github github-left"}
                    href={project.github}
                >
                    <Github 
                        style={{ fill: smooth.primaryDark}}
                    />
                    <p>github link</p>
                </motion.a>
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
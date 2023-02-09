import React, { useState, useEffect, useContext } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useWindowSize } from '../helpers/useWindowSize'
import * as Scroll from 'react-scroll'

import Github from '../svg/github'

const Project = ({ project, index }) => {
    const [smooth, setSmooth] = useContext(SmoothContext)
    const [viewWebsite, setViewWebsite] = useState(false)
    const [websiteZ, setWebsiteZ] = useState(false)
    const [even] = useState(index % 2 === 0 ? true : false)
    const size = useWindowSize()
    const { scrollY } = useViewportScroll()
    var scroll = Scroll.animateScroll;
    const movingWidth = useTransform(scrollY, [index * size.height, smooth.introHeight + (size.height * index)], [size.width - 44 - smooth.projectBorder - smooth.projectBorder, smooth.projectBorder])
    const bottomHeight = useTransform(scrollY, [index * size.height, smooth.introHeight + (size.height * index)], [size.height - 44 - smooth.projectBorder - smooth.projectBorder, smooth.projectBorder])
    const projectLinkVisible = useTransform(scrollY, [(index * size.height) + (smooth.introHeight * .1), (index * size.height) + (smooth.introHeight * .5)], [1, 0])
    // console.log('pro link ', projectLinkVisible)
    const headerVisible = useTransform(scrollY, [(index * size.height) + (smooth.introHeight * .5), (index * size.height) + (smooth.introHeight * .9)], [0, 1])
    // console.log(headerVisible)

    useEffect(() => {
        if (viewWebsite) {
            setTimeout(() => {
                setSmooth(state => ({ ...state, viewNavigation: false }))
                setWebsiteZ(true)
                document.body.style.overflow = "hidden"
            }, 1000)
        } else {
            setSmooth(state => ({ ...state, viewNavigation: true }))
            setWebsiteZ(false)
            document.body.style.overflow = "auto"
        }
    }, [viewWebsite, setSmooth])

    return (
        <section className="project-container">
            {viewWebsite && (
                <motion.div
                    className="project-live-nav"
                    style={{
                        background: smooth.primaryLight,
                        border: `solid 1px ${smooth.primaryDark}`
                    }}
                >
                    <p
                        onClick={() => setViewWebsite(false)}
                    >back to smoothism.com</p>
                </motion.div>
            )}
            <motion.div 
                className="view-projects"
                style={{
                    left: even ? smooth.projectBorder : "auto",
                    right: even ? "auto" : smooth.projectBorder,
                    top: index === 0 ? -20 : -40,
                    opacity: projectLinkVisible
                }}
                onClick={() => {
                    scroll.scrollTo(smooth.introHeight + (size.height * index))
                }} 
            >
                <p>{index === 0 ? "View" : "Next"}</p>
                <p>Project{index === 0 ? "s" : ""}</p>
            </motion.div>
            <motion.div 
                className="project-mask"
                style={{
                    width: size.width - 15,
                    height: size.height
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: viewWebsite ? 0 : 1 }}
                transition={{ duration: 1, ease: "linear" }}  
            >
                <motion.p
                    className="project-website"
                    style={{ 
                        left: smooth.projectBorder,
                        top: smooth.projectBorder - 20,
                        opacity: headerVisible,
                        color: smooth.primaryDark
                    }}
                >
                    {project.website}
                </motion.p>
                <motion.p
                    className="project-tagline"
                    style={{ 
                        right: size.width < 550 ? 'auto' : smooth.projectBorder,
                        top: size.width < 550 ? smooth.projectBorder : smooth.projectBorder - 20,
                        left: size.width < 550 ? smooth.projectBorder : 'auto',
                        opacity: headerVisible,
                        color: smooth.primaryDark,
                        backgroundColor: smooth.primaryLight
                    }}
                >
                    {project.tagline}
                </motion.p>
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
                        height: size.width < 550 ? 25 : smooth.projectBorder
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
                        right: even ? 'auto' : smooth.projectBorder / 2,
                        left: even ? smooth.projectBorder / 2 : 'auto',
                        bottom: 0,
                        width: "110%",
                        height: size.width < 550 ? size.height * .25 : size.height * .3,
                        transform: even ? 'rotate(-10deg)' : 'rotate(10deg',
                        transformOrigin: even ? 'right bottom' : 'left bottom' 
                    }}
                >
                    <p
                        className={even ? "made-with made-right" : "made-with -made-left"}
                        style={{ 
                            right: even ? '10%' : 'auto',
                            left: even ? 'auto' : '10%',
                            textAlign: even ? 'right' : 'left'
                        }}
                    >
                        <span>made with: </span>
                        {project.madeWith}
                    </p>
                    <a
                        className={even ? "project-github github-right" : "project-github github-left"}
                        style={{
                            right: even ? '11%' : 'auto',
                            left: even ? 'auto' : '11%',
                            top: 28
                        }}
                        href={project.github}
                    >
                        <Github 
                            style={{ fill: smooth.primaryDark}}
                        />
                        <p>github link</p>
                    </a>
                </motion.div>
                <div 
                    className="web-link"
                    onClick={() => {
                        scroll.scrollTo(smooth.introHeight + (size.height * index))
                        setViewWebsite(true)
                    }}
                >
                    <p
                        style={{ color: smooth.primaryDark }}
                    >view live website</p>
                </div>
            </motion.div>
            <div 
                className="project-iframe"
                style={{
                    width: viewWebsite ? size.width : size.width - 15,
                    height: size.height,
                    zIndex: websiteZ ? 900 : 9
                }}    
            >
                <iframe
                    title={project.website}
                    width={size.width}
                    height={size.height}
                    scrolling={viewWebsite ? "yes" : "no"}
                    frameBorder="0"
                    src={project.link}
                />
            </div>
        </section>
    )
}

export default Project
import React, { useState, useEffect, useContext } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useWindowSize } from '../helpers/useWindowSize'

import '../styles/project.scss'

const Project = () => {
    const [smooth] = useContext(SmoothContext)
    const size = useWindowSize()
    const { scrollY } = useViewportScroll()
    const rightWidth = useTransform(scrollY, [0, smooth.introHeight], [size.width - 44 - smooth.projectBorder - smooth.projectBorder, smooth.projectBorder])
    const bottomHeight = useTransform(scrollY, [0, smooth.introHeight], [size.height - 44 - smooth.projectBorder - smooth.projectBorder, smooth.projectBorder])

    return (
        <section className="project-container">
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
                        height: "100%",
                        width: smooth.projectBorder
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
                        width: rightWidth,
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
                    title="megacities.world"
                    width={size.width}
                    height={size.height}
                    scrolling="no"
                    frameBorder="0"
                    src="https://manmademastering.de" 
                />
            </div>
        </section>
    )
}

export default Project
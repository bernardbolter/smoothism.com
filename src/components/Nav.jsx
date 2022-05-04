import React, { useState, useContext } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

import '../styles/nav.scss'

const Nav = () => {
    const [smooth] = useContext(SmoothContext)
    const { scrollY } = useViewportScroll()
    const navVisible = useTransform(scrollY, [smooth.introHeight, smooth.introHeight + 200], [0,1])
    const [navOpen, setNavOpen] = useState(false)

    return (
        <motion.div 
            className="nav-container"
            style={{
                opacity: navVisible
            }}
        >   <span></span>
            <span></span>
            <span></span>
            <ul className="nav-menu">
                {smooth.projects.map((project, i) => {
                    console.log(project)
                    return (
                        <p key={i}>{project.website}</p>
                    )
                })}
            </ul>
        </motion.div>
    )
}

export default Nav
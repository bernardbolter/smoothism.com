import React, { useState, useContext } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import { useWindowSize } from '../helpers/useWindowSize'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import * as Scroll from 'react-scroll'

const Nav = () => {
    const [smooth] = useContext(SmoothContext)
    const [navOpen, setNavOpen] = useState(false)
    const size = useWindowSize()

    const { scrollY } = useViewportScroll()
    // console.log(scrollY)
    const navVisible = useTransform(scrollY, [smooth.introHeight - 400, smooth.introHeight + 100], [0,1])
    // console.log(navVisible)
    var scroll = Scroll.animateScroll;

    return (
        <motion.div
            className="nav-container"
            style={{
                opacity: navVisible,
                display: smooth.viewNavigation ? "block" : "none"
            }}
        >
            <div 
                className="nav-clicker"
                onClick={() => setNavOpen(!navOpen)}    
            >
                <p style={{ color: smooth.primaryDark }}>nav</p>
                <div className="nav-hamburger">
                    <span
                        style={{
                            top: navOpen ? 10 : 0,
                            width: navOpen ? '0%' : '100%',
                            left: navOpen ? '50%' : 0,
                            backgroundColor: smooth.primaryDark
                        }}
                    ></span>
                    <span
                        style={{
                            top: 10,
                            backgroundColor: smooth.primaryDark,
                            transform: navOpen ? 'rotate(45deg)' : 'rotate(0deg)'
                        }}
                    ></span>
                    <span
                        style={{
                            top: 10,
                            backgroundColor: smooth.primaryDark,
                            transform: navOpen ? 'rotate(-45deg)' : 'rotate(0deg)'
                        }}
                    ></span>
                    <span
                        style={{
                            top: navOpen ? 10 : 20,
                            backgroundColor: smooth.primaryDark,
                            width: navOpen ? '0%' : '100%',
                            left: navOpen ? '50%' : 0,
                        }}
                    ></span>
                </div>
            </div>
            <motion.div 
                className="nav-links"
                initial={{
                    translateX: 200
                }}
                animate={{
                    translateX: navOpen ? 0 : 200
                }}
            >   
            
                <ul className="nav-menu">
                    <li
                        style={{ color: smooth.primaryDark }}
                        onClick={() => {
                            scroll.scrollTo(0)
                            setNavOpen(false)
                        }}
                    >top</li>
                    {smooth.projects.map((project, index) => {
                        return (
                            <li 
                                key={index}
                                style={{ color: smooth.primaryDark }}
                                onClick={() => {
                                    scroll.scrollTo(smooth.introHeight + (size.height * index))
                                    setNavOpen(false)
                                }}  
                            >{project.website}</li>
                        )
                    })}
                    <li
                        style={{ color: smooth.primaryDark }}
                        onClick={() => {
                            scroll.scrollTo(smooth.introHeight + (size.height * smooth.projects.length))
                            setNavOpen(false)
                        }}
                    >contact</li>
                </ul>
            </motion.div>
        </motion.div>
    )
}

export default Nav
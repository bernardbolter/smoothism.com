import React, { useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import { SmoothContext } from '../providers/SmoothProvider'
import { useWindowSize } from '../helpers/useWindowSize'

import { ReactComponent as Logo } from '../svg/logo.svg'
import { ReactComponent as Insta } from '../svg/insta.svg'
import { ReactComponent as Github } from '../svg/github.svg'

import '../styles/intro.scss'

const Intro = () => {
    const [smooth, setSmooth] = useContext(SmoothContext)
    console.log(smooth)
    const size = useWindowSize()

    useEffect(() => {
        var introHeight
        if (size.width < 500) {
            introHeight = 500
        } else {
            introHeight = size.height * .8
        }
        setSmooth(state => ({ ...state, introHeight: introHeight }))
    }, [size])

    return (
        <section 
            className="intro-container"
            style={{ 
                color: smooth.primaryDark,
                height: smooth.introHeight
            }}    
        >
            <motion.div className="logo">
                <Logo style={{ fill: smooth.primaryDark }}/>
            </motion.div>
            <motion.div className="bernard">
                <h1>Creative Solutions</h1>
                <h2><span>from</span> Bernard Bolter</h2>
                <h3>b. 1974 <span>(San Francisco)</span></h3>
                <h3>lives and codes in Berlin</h3>
            </motion.div>
            <motion.div className="into-links">
                <a href="https://www.instagram.com/bernardbolter/">
                    <Insta />
                    <h4 style={{ color: smooth.primaryDark }}>@bernardbolter</h4>
                </a>
                <a href="https://github.com/bernardbolter"  >
                    <Github 
                        style={{ fill: smooth.primaryDark}}
                    />
                    <h4 style={{ color: smooth.primaryDark }}>@bernardbolter</h4>
                </a>
            </motion.div>
            <motion.div className="lead">
                <h1>Out here, helping</h1>
                <h1>artists and companies make</h1>
                <h1>thier message smooth</h1>
            </motion.div>
            <motion.div className="pitch">
                <h2>from Contemporary Art Concepts</h2>
                <h2 className="pitch-padding">to Functional React Components</h2>
                <h3>(but also Modern Concepts,</h3>
                <h3> and we can keep them components classy, too)</h3>
            </motion.div>
        </section>
    )
}

export default Intro
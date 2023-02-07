import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { useWindowSize } from '../helpers/useWindowSize'
import { SmoothContext } from '../providers/SmoothProvider'
import * as Scroll from 'react-scroll'

import Logo from '../svg/logo'
import Insta from '../svg/insta'
import Github from '../svg/github'

const Intro = () => {
    const [smooth] = useContext(SmoothContext)
    const size = useWindowSize()
    var scroll = Scroll.animateScroll;

    return (
        <section 
            className="intro-container"
            style={{ 
                color: smooth.primaryDark,
                height: smooth.introHeight,
                background: `linear-gradient(to top, ${smooth.primaryLight},${smooth.secondaryLight})`
            }}    
        >
            <motion.div 
                className="logo"
                initial={{ translateX: -200 }}
                animate={{ translateX: 0 }}
                transition={{ duration: 1, ease: "easeIn"}}
            >
                <Logo style={{ fill: smooth.primaryDark }}/>
            </motion.div>
            <motion.div className="bernard">
                <motion.h1
                    initial={{ translateX: 200 }}
                    animate={{ translateX: 0 }}
                    transition={{ duration: 0.5, ease: 'easeIn' }}
                >Creative Solutions</motion.h1>
                <motion.h2
                    initial={{ translateX: 200 }}
                    animate={{ translateX: 0 }}
                    transition={{ duration: 0.5, ease: 'easeIn', delay: 0.2 }}
                ><span>from</span> Bernard Bolter</motion.h2>
                <motion.h3
                    initial={{ translateX: 200 }}
                    animate={{ translateX: 0 }}
                    transition={{ duration: 0.5, ease: 'easeIn', delay: 0.4 }}
                >b. 1974 <span>(San Francisco)</span></motion.h3>
                <motion.h3
                    initial={{ translateX: 200 }}
                    animate={{ translateX: 0 }}
                    transition={{ duration: 0.5, ease: 'easeIn', delay: 0.6 }}
                >lives and codes in Berlin</motion.h3>
            </motion.div>
            <motion.div
                className="box"
            >
                {
                    [1,2,3,4].map(i => (
                        <svg  viewBox="0 0 426 244" key={i}>
                            <motion.path 
                                d="M0 243.5V0.5H425.5V172.5L313.5 243.5H0Z" 
                                initial={{ fill: smooth.primaryDark, opacity: 0 }}
                                animate={{ scale: `0.${i * 2}`, opacity: `0.0${i * 2}`  }}
                                transition={{ duration: 2.0, ease: "linear", delay: `${i}` }}
                                style={{ transform:  "scale(1)" }}
                            />
                        </svg>
                    ))
                }
            </motion.div>
            <motion.div className="into-links">
                <motion.a 
                    href="https://www.instagram.com/bernardbolter/"
                    initial={{ translateX: 200 }}
                    animate={{ translateX: 0 }}
                    transition={{ duration: 0.5, ease: 'easeIn', delay: 0.8 }}    
                >
                    <Insta />
                    <h4 style={{ color: smooth.primaryDark }}>@bernardbolter</h4>
                </motion.a>
                <motion.a 
                    href="https://github.com/bernardbolter"
                    initial={{ translateX: 200 }}
                    animate={{ translateX: 0 }}
                    transition={{ duration: 0.5, ease: 'easeIn', delay: 1 }}
                >
                    <Github 
                        style={{ fill: smooth.primaryDark}}
                    />
                    <h4 style={{ color: smooth.primaryDark }}>@bernardbolter</h4>
                </motion.a>
                <motion.div
                    className="intro-contact"
                    initial={{ translateX: 200 }}
                    animate={{ translateX: 0 }}
                    transition={{ duration: 0.5, ease: 'easeIn', delay: 1.2 }}
                    onClick={() => scroll.scrollTo(size.height * .8 + (size.height * smooth.projects.length))}
                >
                    <div 
                        className="intro-arrow"
                        style={{ fill: smooth.primaryDark, color: smooth.primaryDark }}    
                    >
                        <svg viewBox="0 0 16 22">
                            <path d="M6.91401 20.6483L0.905182 13.4873C0.496645 13.0002 0.441553 12.3081 0.767887 11.7625C1.29419 10.8826 2.53142 10.7842 3.19062 11.5698L4.66811 13.3308C5.31234 14.099 6.56471 13.6429 6.56471 12.6405V2.48563C6.56471 2.2158 6.63793 1.95126 6.77611 1.71978C7.35522 0.752016 8.75755 0.752016 9.33627 1.71978C9.47462 1.95125 9.54766 2.21581 9.54766 2.48563V12.6405C9.54766 13.6433 10.7999 14.099 11.4443 13.3308L12.9218 11.5699C13.5811 10.7842 14.8182 10.8828 15.3445 11.7627C15.6708 12.3081 15.6161 13.0004 15.2072 13.4875L9.19836 20.6485C8.60234 21.3591 7.50931 21.3591 6.91401 20.6483V20.6483Z" />
                        </svg>
                    </div>
                    <p>contact</p>
                </motion.div>
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
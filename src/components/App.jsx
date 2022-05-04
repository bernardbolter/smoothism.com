import React, { useEffect, useContext } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import { useWindowSize } from '../helpers/useWindowSize'
import { motion, AnimatePresence } from 'framer-motion'

import Intro  from './Intro'
import Projects from './Projects'
import Contact from './Contact'
import Nav from './Nav'

import '../styles/app.scss'

const App = () => {
    const [smooth, setSmooth] = useContext(SmoothContext)
    const size = useWindowSize()

    useEffect(() => {
        var borderSize
        if (size.width < 769) {
            borderSize = 20
        } else {
            borderSize = 40
        }
        setSmooth(state => ({ ...state, projectBorder: borderSize }))
    }, [size, setSmooth])

    return (
        <AnimatePresence>
            <motion.main 
                className="app-container"
                style={{
                    background: smooth.primaryLight
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Intro />
                <Projects />
                <Contact />
                <Nav />
            </motion.main>
        </AnimatePresence>
    )
}

export default App
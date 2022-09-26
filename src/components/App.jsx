import React, { useEffect, useContext, useMemo } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import { useWindowSize } from '../helpers/useWindowSize'
import { motion, AnimatePresence } from 'framer-motion'
import CookieConsent from "react-cookie-consent";

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

    const theIntroHeight = useMemo(() => {
        if (size.width < 400) {
            return 560
        } else if (size.width < 500) {
            return 600
        } else {
            return size.height * .8
        }
    }, [size])

    useEffect(() => {
        setSmooth(state => ({ ...state, introHeight: theIntroHeight }))
    }, [theIntroHeight, setSmooth])

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
                <CookieConsent
                    location="bottom"
                    buttonText="Accept"
                    cookieName="smoothCookie"
                    style={{ background: smooth.primaryDark }}
                    buttonStyle={{ background: "grey", color: smooth.primaryLight, fontSize: "12px" }}
                    >
                    This website uses cookies to enhance the user experience.{" "}
                </CookieConsent>
            </motion.main>
        </AnimatePresence>
    )
}

export default App
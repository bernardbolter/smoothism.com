import React, { useContext } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import { motion } from 'framer-motion'
import * as Scroll from 'react-scroll'

const Footer = () => {
    const [smooth, setSmooth] = useContext(SmoothContext)
    var scroll = Scroll.animateScroll;

    return (
        <motion.footer
            className="footer-container"
            style={{ color: smooth.primaryDark }}
        >
            <p
                onClick={() => {
                    scroll.scrollTo(0)
                    setSmooth(state => ({ ...state, footerModal: 'none'}))
                }}
            >
                smoothism.com 
                <span className="copy">&copy;</span>
                <span>{new Date().getFullYear()}</span>
            </p>
            {/* <p
                onClick={() => setSmooth(state => ({ ...state, footerModal: state.footerModal === 'philosophy' ? 'none' : 'philosophy' }))}
            >Philosophy of Smoothism</p> */}
            <p
                onClick={() => setSmooth(state => ({ ...state, footerModal: state.footerModal === 'impressum' ? 'none' : 'impressum' }))}
            >Impressum</p>
            <p
                onClick={() => setSmooth(state => ({ ...state, footerModal: state.footerModal === 'datne' ? 'none' : 'daten' }))}
            >Datenschutzerklärung</p>
        </motion.footer>
    )
}

export default Footer
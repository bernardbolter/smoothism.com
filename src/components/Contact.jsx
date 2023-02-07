import React, { useContext} from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import { motion, AnimatePresence } from 'framer-motion'

import ContactForm from './ContactForm'
import Footer from './Footer'
import Philosophy from './Philosophy'
import Impressum from './Impressum'
import Daten from './Daten'

const Contact = () => {
    const [smooth] = useContext(SmoothContext)
    return (
        <section 
            className="contact-container"
            style={{ background: smooth.primaryLight }}    
        >
            <motion.div 
                className="contact-text"
                style={{ color: smooth.primaryDark }}
            >
                <h1>About</h1>
                <p>Smoothism is a full service creative operation run by Artist/Designer/Developer Bernard Bolter.</p>
                <p>From inovative marketing campaigns to cutting edge web apps, Bernard works with the guiding principle that making it smooth, makes its meaningful and memerable.</p>
                <p>Feel free to contact about any UX/UI design, Wordpress, or React projects you want to develop.</p>
            </motion.div>
            <motion.div className="contact-form">
                <ContactForm />
            </motion.div>
            <AnimatePresence exitBeforeEnter>
                {smooth.footerModal === 'philosophy' && <Philosophy />}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
                {smooth.footerModal === 'impressum' && <Impressum />}
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
                {smooth.footerModal === 'daten' && <Daten />}
            </AnimatePresence>
            <Footer />
        </section>
    )
}

export default Contact
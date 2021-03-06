import React, { useContext} from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import { motion, AnimatePresence } from 'framer-motion'

import ContactForm from './ContactForm'
import Footer from './Footer'
import Philosophy from './Philosophy'
import Impressum from './Impressum'
import Daten from './Daten'

import '../styles/contact.scss'

const Contact = () => {
    const [smooth] = useContext(SmoothContext)
    return (
        <section className="contact-container">
            <motion.div 
                className="contact-text"
                style={{ color: smooth.primaryDark }}
            >
                <h1>Contact</h1>
                <p>Skate ipsum dolor sit amet, yeah poseur casper nosebone downhill wax coping. Tom Knox salad grind Saran Wrap ollie hole Christ air dude shoveit smith grind. Hang up cess slide air axle set rail slide boardslide manual. 270 Girl stoked 720 boned out berm handplant 180. Full-cab transfer rail slide kidney noseblunt slide bail backside. Coffin 50-50 Johnny Rad smith grind switch mini ramp locals g-turn. Death box bluntslide ho-ho handplant gnar bucket nose-bump Jai Alai Banks nosepicker. Pivot 180 gnar bucket ledge death box Tracker noseblunt slide Steve Olson. Freestyle chicken wing grind helipop flypaper frontside kick-nose.</p>
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
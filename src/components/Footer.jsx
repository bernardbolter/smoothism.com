import React, { useContext } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import { motion } from 'framer-motion'

import '../styles/footer.scss'

const Footer = () => {
    const [smooth, setSmooth] = useContext(SmoothContext)
    
    return (
        <motion.footer
            className="footer-container"

        >
            <p>footer</p>
        </motion.footer>
    )
}

export default Footer
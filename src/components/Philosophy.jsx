import React, { useContext } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import { motion } from 'framer-motion'

import '../styles/philosophy.scss'

const Philosophy = () => {
    const [smooth] = useContext(SmoothContext)
    return (
        <motion.section 
            className="philosophy-container"
            style={{ color: smooth.primaryDark, backgroundColor: smooth.secondaryLight }}    
        >
            <p>Philosophy</p>
        </motion.section>
    )
}

export default Philosophy
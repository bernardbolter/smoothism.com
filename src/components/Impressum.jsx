import React, { useContext } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'
import { motion } from 'framer-motion'

import '../styles/impressum.scss'

const Impressum = () => {
    const [smooth] = useContext(SmoothContext)
    return (
        <motion.section 
            className="impressum-container"
            style={{ color: smooth.primaryDark, backgroundColor: smooth.secondaryLight }}    
        >
            <p>Impressum</p>
        </motion.section>
    )
}

export default Impressum
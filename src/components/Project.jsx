import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useWindowSize } from '../helpers/useWindowSize'

import '../styles/project.scss'

const Project = () => {
    const size = useWindowSize()
    // console.log(size)

    const thePoints = useMemo(() => {   
        return `${size.width * .1},${size.height * .1} ${size.width * .9},${size.height * .1} ${size.width * .9},${size.height * .7} ${size.width * .2},${size.height * .9} ${size.width * .1},${size.height * .9}`
    }, [size])

    return (
        <section className="project-container">
            <motion.div className="view-project">
                <p>View</p>
                <p>projects</p>
            </motion.div>
            <iframe
                className="project-iframe"
                style={{
                    clipPath: 'rectangle(20, 20, 300, 300)',
                    display: "block"
                }}
                title="megacities.world"
                width={size.width - 15}
                height={size.height}
                scrolling="no"
                frameBorder="0"
                src="https://manmademastering.de" 
            />
        </section>
    )
}

export default Project
import React, { useEffect, useContext  } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'

import Intro  from './Intro'
import Projects from './Projects'
// import Project from './Project'

import '../styles/app.scss'

const App = () => {
    const [smooth] = useContext(SmoothContext)

    useEffect(() => {
        var borderSize
        if (size.width < 769) {
            borderSize = 20
        } else {
            borderSize = 40
        }
        setSmooth(state => ({ ...state, projectBorder: borderSize }))
    }, [size])

    return (
        <main 
            className="app-container"
            style={{
                background: `linear-gradient(to top, ${smooth.primaryLight},${smooth.secondaryLight})`
            }}
        >
            <Intro />
            <Projects />
        </main>
    )
}

export default App
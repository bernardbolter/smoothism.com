import React, { useContext  } from 'react'
import { SmoothContext } from '../providers/SmoothProvider'

import Intro  from './Intro'
import Project from './Project'

import '../styles/app.scss'

const App = () => {
    const [smooth] = useContext(SmoothContext)
    return (
        <main 
            className="app-container"
            style={{
                background: `linear-gradient(to top, ${smooth.primaryLight},${smooth.secondaryLight})`
            }}
        >
            <Intro />
            <Project />
        </main>
    )
}

export default App
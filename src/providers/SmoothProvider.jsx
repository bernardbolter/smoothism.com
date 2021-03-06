import React, { useState, useEffect, createContext } from 'react'
import { randomColor, shuffle } from '../helpers'

import Projects from '../data/projects.json'

export const SmoothContext = createContext()

const SmoothProvider = ({ children }) => {
    const [smooth, setSmooth] = useState({
        primaryDark: '',
        secondaryDark: '',
        primaryLight: '',
        secondaryLight: '',
        changeColor: false,
        introHeight: 0,
        projectBorder: 0,
        projects: [],
        footerModal: 'none'
    })

    useEffect(() => {
        setSmooth(state => ({
            ...state,
            primaryDark: randomColor(0,74,1),
            secondaryDark: randomColor(0,74,1),
            primaryLight: randomColor(250,255,1),
            secondaryLight: randomColor(250,255,1)
        }))
    }, [smooth.changeColor])

    useEffect(() => {
        setSmooth(state => ({
            ...state,
            projects: shuffle(Projects)
        }))
    }, [])
    
    return (
        <SmoothContext.Provider
            value={[smooth, setSmooth]}
        >
            {children}
        </SmoothContext.Provider>
    )
}

export default SmoothProvider
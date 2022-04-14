import React, { useState, useEffect, createContext } from 'react'
import { randomColor } from '../helpers'

export const SmoothContext = createContext()

const SmoothProvider = ({ children }) => {
    const [smooth, setSmooth] = useState({
        primaryDark: '',
        secondaryDark: '',
        primaryLight: '',
        secondaryLight: '',
        changeColor: false,
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
    
    return (
        <SmoothContext.Provider
            value={[smooth, setSmooth]}
        >
            {children}
        </SmoothContext.Provider>
    )
}

export default SmoothProvider
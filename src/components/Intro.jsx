import React from 'react'

import { ReactComponent as Logo } from '../svg/logo.svg'
import { ReactComponent as Insta } from '../svg/insta.svg'
import { ReactComponent as Github } from '../svg/github.svg'

import '../styles/intro.scss'

const Intro = () => {
    return (
        <section className="intro-container">
            <div className="logo">
                <Logo style={{ fill: "green" }}/>
            </div>
            <div className="bernard">
                <h1>Creattive Solutions</h1>
                <h2><span>from</span> Bernard Bolter</h2>
                <h3>b. 1974 <span>(San Francisco)</span></h3>
                <h3>lives and codes in Berlin</h3>
            </div>
            <div className="into-links">
                <a href="https://www.instagram.com/bernardbolter/">
                    <div className="intro-svg">
                        <Insta />
                    </div>
                    <h4>@bernardbolter</h4>
                </a>
                <a href="https://github.com/bernardbolter">
                    <div className="intro-svg">
                        <Github />
                    </div>
                    <h4>@bernardbolter</h4>
                </a>
            </div>
            <div className="lead">
                <h1>Out here,</h1>
                <h1>helping peopls make</h1>
                <h1>thier thing smooth</h1>
            </div>
            <div className="pitch">
                <h2>from Contemporary Art Concepts</h2>
                <h2>to Functional react Components</h2>
                <h3>(but also Modern Concepts,</h3>
                <h3> and we can keep them components classy, too</h3>
            </div>
            <div className="view-project">
                <p>View</p>
                <p>projects</p>
            </div>
        </section>
    )
}

export default Intro
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import './nav.css'

const StyleLink = styled(NavLink)`
    font-size: 1.25rem;
    color: #706f6f;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #2832c2;
        border-bottom: 1px solid #2832c2;
        border-top: 1px solid #2832c2;
    }
`

const Nav = () => {
    return (
        <div className="nav">
            <motion.div
                className="demo"
                whileHover={{
                    scale: 1.1,
                    textShadow: '0px 0px 4px gray'
                }}
            >
                <StyleLink to="/" activeStyle exact>
                    Home
                </StyleLink>
            </motion.div>
            <motion.div
                className="demo"
                whileHover={{
                    scale: 1.1,
                    textShadow: '0px 0px 4px gray'
                }}
            >
                <StyleLink to="/projects" activeStyle exact>
                    Projects
                </StyleLink>
            </motion.div>
            <motion.div
                className="demo"
                whileHover={{
                    scale: 1.1,
                    textShadow: '0px 0px 4px gray'
                }}
            >
                <StyleLink to="/contact" activeStyle exact>
                    Contact
                </StyleLink>
            </motion.div>
        </div>
    )
}

export default Nav

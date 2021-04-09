import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import './nav.css'

const StyleLink = styled(NavLink)`
    color: #706f6f;
    display: flex;

    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #d2daed;
    }
`

const Nav = () => {
    return (
        <div className="nav">
            <StyleLink to="/" activeStyle exact>
                Home
            </StyleLink>
            <StyleLink to="/projects" activeStyle exact>
                Projects
            </StyleLink>
            <StyleLink
                to="/contact"
                activeStyle={{
                    fontWeight: 'bold',
                    color: 'red'
                }}
                activeStyle
                exact
            >
                Contact
            </StyleLink>
        </div>
    )
}

export default Nav

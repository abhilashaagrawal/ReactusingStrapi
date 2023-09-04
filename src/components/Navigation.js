import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'


export default function Navigation() {
    return (
        <Nav>
            <NavItem>
                <Link active to="/" className='nav-link'>
                    Home
                </Link>
            </NavItem>
            <NavItem>
                <Link to="/login" className='nav-link'>
                    Login
                </Link>
            </NavItem>
            <NavItem>
                <Link to="/register" className='nav-link'>
                    Register
                </Link>
            </NavItem>
          
        </Nav>


    )
}

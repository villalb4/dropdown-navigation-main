import React from 'react'
import './Header.tsx'
import './Header.css'
import logo from '../../assets/logo.svg'
import Nav from './Nav/Nav'

function Header() {
  return (
    <header>
        <div className='header_component'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <Nav />
        </div>
    </header>
  )
}

export default Header
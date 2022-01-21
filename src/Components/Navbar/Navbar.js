import React from 'react'
import './navbar.scss'
import logo from './assets/rm-logo.png'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' width='auto' height='80px' />
    </nav>
  )
}

export default Navbar

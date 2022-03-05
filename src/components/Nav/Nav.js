import React from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'

const Nav = () => {
  return (
    <div className='nav-bar'>
        <nav>
        
          <img className='logo' src={logo} alt={""}/>
        </nav>
    </div>
  )
}

export default Nav
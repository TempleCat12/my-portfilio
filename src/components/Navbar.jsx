import React from 'react'
import { useState } from 'react'
import { MdMenu, MdOutlineClose } from 'react-icons/md'

import './navbar.css'
import logo from '../assets/cat_logo.svg'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='portfolio__nav section-padding'>
      <div className='portfolio__nav-logo'>
        <img width='64px' src={logo} alt="logo" />
      </div>
      <div className='portfolio__nav-links'>
        <ul>
          <li><a href='#about'>About</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        <button>Resume</button>
      </div>
      <div className='portfolio__nav-menu'>
        {!toggleMenu && <MdMenu size={36} onClick={() => setToggleMenu(true)}/>}
        {toggleMenu && 
          <div className='portfolio__nav-menu_content scale-up-tr'>
            <MdOutlineClose size={36} onClick={() => setToggleMenu(false)}/>
            <div className='portfolio__nav-menu_content-links'>
              <ul>
                <li><a href='#about'>About</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
              </ul>
              <button>Resume</button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
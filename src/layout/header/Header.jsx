import React from 'react'
import { Navbar } from '../../components/index.js'
import  './header.css'
const Header = () => {
  return (
    <div className='portfolio__header section-padding'>
      <p>Hi, my name is</p>
      <h2 className='gradient-text'>Henry Lee.</h2>
      <h3>I build things for the web.</h3>
      <p>I'm a self-taught front-end developer based in China. I enjoy transforming complex problems into simple and intuitive solutions. I love to explore and learn new things. Currently, most of my endeavors are in JavaScript and React.js.<br/>The following is the course I studying</p>
      <div className='portfolio__header-links'>
        <a href='https://www.theodinproject.com' aria-label='The Odin Project website'>The Odin Project</a>
        <a href='https://www.youtube.com/@cs50' aria-label='cs50 course on youtube'>CS50</a>
      </div>
    </div>
  )
}

export default Header
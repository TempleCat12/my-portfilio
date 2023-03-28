import React from 'react'
import { GoMarkGithub } from 'react-icons/go'
import { MdEmail } from 'react-icons/md'

import './footer.css'

const Footer = () => {
  return (
    <div id='contact' className='portfolio__footer section-padding'>
      <div className='portfolio__footer-text'>
        {/* <p>What is next?</p> */}
        <h3 className='gradient-text'>Get In Touch</h3>
        <p> I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
      </div>
      <div className='portfolio__footer-links'>
        <a href=''><GoMarkGithub size={36} /></a>
        <div>
          <MdEmail size={30} />
          <p>hucat0129@gmail.com</p>
        </div>
      </div>
      <div className='portfolio__footer-bottom'>
        <p>Designed & Built by Henry Lee</p>
      </div>
    </div>
  )
}

export default Footer
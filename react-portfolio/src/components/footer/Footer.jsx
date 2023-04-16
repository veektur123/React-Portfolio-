import React from 'react'
import './footer.css'
import {FaGithub} from 'react-icons/fa'
import {ImTwitter} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Victor Rivera</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https:github.com/veektur123" target='_blank'><FaGithub/></a>
        <a href="https:twitter.com/" target='_blank'><ImTwitter/></a>
        <a href="https://www.linkedin.com/in/victor-rivera-67879780/" target='_blank'><BsLinkedin/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Victor Rivera. All rights reserved.</small>

      </div>
    </footer>
  )
}

export default Footer
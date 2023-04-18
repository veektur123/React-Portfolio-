import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header-social-media'>
        <a href="https://www.linkedin.com/in/victor-rivera-67879780/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/veektur123" target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials 
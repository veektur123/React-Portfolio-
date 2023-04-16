import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
          <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6 Months </small>
            </article>
            
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>

          <p>
              Hi there! My name is Victor Rivera, and I'm a MERN Full Stack Developer. I specialize in building dynamic and responsive web applications using MongoDB, Express, React, and Node.js.
              I completed my MERN stack certificate training through Georgia Tech EDX bootcamps and have a strong passion for technology. I love to solve complex problems with creative and efficient solutions and 
              I pride myself on my ability to deliver high-quality products within tight deadlines while ensuring that my clients' needs are met. My skills in HTML, CSS, JavaScript, and React allow me to create beautiful and intuitive user interfaces.
              On the server-side, I leverage Node.js and Express to develop efficient and scalable APIs, while my experience with MongoDB enables me to design and implement robust and reliable databases.I'm a team player and a fast learner,
              and I'm always eager to expand my knowledge and explore new technologies. 
              I believe in continuous learning and growth, and I'm always looking for new challenges that push me to my limits.
              If you're looking for a MERN full stack developer who can bring your ideas to life, I'd love to chat with you. Let's create something amazing together!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
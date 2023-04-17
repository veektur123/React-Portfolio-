import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className='container exp-wrapper'>
        <div>
          <h3>Frontend Development</h3>
          <div className="exp-content">
          <article className='exp-description'>
            <BsPatchCheckFill className='experience-details-icon' />
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article><article className='exp-description'>
            <BsPatchCheckFill className='experience-details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article><article className='exp-description'>
            <BsPatchCheckFill className='experience-details-icon'/>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article><article className='exp-description'>
            <BsPatchCheckFill className='experience-details-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          </div>
      </div>
      <div className='experience__backend'>
      <h3>Backend Development</h3>
      <article className='exp-description'>
        <BsPatchCheckFill className='experience-details-icon'/>
        <div>
        <h4>Node JS</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article><article className='exp-description'>
          <BsPatchCheckFill className='experience-details-icon'/>
          <div>
          <h4>MongoDB</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article><article className='exp-description'>
          <BsPatchCheckFill className='experience-details-icon'/>
          <div>
          <h4>MySQL</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article> 
        </div>
      </div>
    </section>
  )
}

export default Experience
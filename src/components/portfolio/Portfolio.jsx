import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio image" />
          </div>
          <h3>Coding The Cosmos</h3>
          <div className="portfolio__item-call-to-action">
          <a href="https://github.com/maxxAbow/CodingTheCosmos" className='btn' target='_blank'>Repository</a>
          <a href="https://maxxabow.github.io/CodingTheCosmos/" className='btn btn-primary' target='_blank'>Deployment</a>
          </div>
        </article><article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>weatherOrNot</h3>
          <div className="portfolio__item-call-to-action">
          <a href="https://https://github.com/maxxAbow/weatherOrNot.com" className='btn' target='_blank'>Repository</a>
          <a href="https://diamonddougs.herokuapp.com/" className='btn btn-primary' target='_blank'>Deployment</a>
          </div>
        </article><article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Folx</h3>
          <div className="portfolio__item-call-to-action">
          <a href="https://github.com/maxxAbow/Folx" className='btn' target='_blank'>Repository</a>
          <a href="https://folx-project-three.herokuapp.com/" className='btn btn-primary' target='_blank'>Deployment</a>
          </div>
        </article>
      </div>
      </section>
  )
}

export default Portfolio
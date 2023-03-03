import React from 'react'
import './projects.css'
import Projcard from './Projcard.jsx'
import Thesispic from '../../assets/thesis.jpg'
import Orderform from '../../assets/OrderForm.jpg'
import Tributepage from '../../assets/TributePage.jpg'
import Portfolio_pic from '../../assets/portfolio_pic.png'

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="container project-container">
        <Projcard 
          img={Thesispic}
          name="Arduino-Based Low Cost 3D Profiling Laser Scanner"
          alt="Thesis"
          desciption="A Laser Scanner capable of recreating up to 360 degree 3D reconstruction of its surroundings."
          used="Computer Vision | Python | Arduino C++"
        />
        <Projcard 
          img={Portfolio_pic}
          name="Portfolio"
          alt="Portfolio"
          desciption="Compilation for my Personal Projects"
          used="HTML | CSS | ReactJS"
        />
        <Projcard 
          img={Orderform}
          name="Roll-up Door Order Form"
          alt="Order Form"
          desciption="An Order Form for ordering Rollup Door purchases."
          used="HTML | CSS"
        />
        <Projcard 
          img={Tributepage}
          name="Tribute Page"
          alt="Tribute Page"
          desciption="Tribute Page to Albert Einstein."
          used="HTML | CSS"
        />
      </div>
    </section>
  )
}

export default Projects
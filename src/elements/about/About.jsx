import React from 'react'
import './about.css'
import myImage from '../../assets/me.png'

const About = () => {
  return (
    <section id="about">
      <h2>About me</h2>
      <div className="container about-container">
        <div className="my-image">
          <img src={myImage} alt="My Photo" />
        </div>
        <div className="separator"></div>
        <div className="about-content">
          <p>
          An avid learner and a self-taught frontend developer seeking experience to improve skills 
          and knowledge while creating significant contribution 
          to the success of the company which offers professionalism and personal satisfaction.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
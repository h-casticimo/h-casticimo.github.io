import React from 'react'
import './experiences.css'
import Expcard from './Expcard.jsx'
import fccrwd from '../../assets/FCC_RWD.png'
import linuxAd from '../../assets/LinuxAd.png'
import tipic from '../../assets/tipic.jpg'

const Experiences = () => {
  return (
    <section id="experiences">
      <h2>Experiences</h2>
      <div className='container experience-container'>
      <Expcard 
          img={tipic}
          alt="TI Photo"
          name="Applications Engineer"
          subname="Texas Instruments, Inc. | Clark, Ph"
          used="June 2022 - Present"
        />
        <Expcard 
          img={fccrwd}
          alt="RWD-FCC Certificate"
          name="Resposive Web Design"
          subname="freecodecamp.org"
          used="HTML/CSS/Javascipt"
        />
        <Expcard 
          img={linuxAd}
          alt="Linux Admin Certificate"
          name="Linux System Administration"
          subname="mnet-it.com"
          used="CentOS"
        />
      </div>
    </section>
  )
}

export default Experiences
import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {SiReplit} from 'react-icons/si'

const Socials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/hamilton-casticimo" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin /></a>
        <a href="https://github.com/h-casticimo" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        <a href="https://replit.com" target="_blank" rel="noopener noreferrer"><SiReplit /></a>
    </div>
  )
}

export default Socials
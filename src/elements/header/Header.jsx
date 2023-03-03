import React from 'react'
import './header.css'
import Socials from './Socials.jsx'

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h1>&lt;Hamilton Casticimo/&gt;</h1>
        <h2 className="text-light">Electronics Engineer | Developer</h2>
        <Socials/>
      </div>
    </header>
  )
}

export default Header
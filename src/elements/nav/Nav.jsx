import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {FaUserAlt} from 'react-icons/fa'
import {BiBookAlt} from 'react-icons/bi'
import {BsCodeSquare} from 'react-icons/bs'
import {MdOutlineMessage} from 'react-icons/md'

const Nav = () => {
  return (
    <nav>
      <a href="#"><ImHome /></a>
      <a href="#about"><FaUserAlt /></a>
      <a href="#experiences"><BiBookAlt /></a>
      <a href="#projects"><BsCodeSquare /></a>
      {/* <a href="#contact"><MdOutlineMessage /></a> */}
    </nav>
  )
}

export default Nav
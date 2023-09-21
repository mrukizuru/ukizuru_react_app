import React from 'react'
import './nav.css'
import  {AiOutlineHome} from 'react-icons/ai'
import {BsInfoLg} from 'react-icons/bs'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {TiMessages} from 'react-icons/ti'
import {BiUserPlus} from 'react-icons/bi'
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (

<nav className='nav__navbar'>

  <a href="#"onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
  <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsInfoLg/></a>
  <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookBookmark/></a>
  <a href="#service" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceFill/></a>
  <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiMessages/></a>
  <a href="#join__Me" onClick={() => setActiveNav('#join__Me')} className={activeNav === '#join__Me' ? 'active' : ''}><BiUserPlus/></a>
 </nav>
  )
}

export default Nav
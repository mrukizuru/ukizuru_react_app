
import React from 'react'
import './navbar.css'
// import  avatar from '../../assets/images/android-chrome-512x512.png'
//  import  {AiOutlineHome} from 'react-icons/ai'
//  import {AiOutlineUser} from 'react-icons/ai'
//  import {BiBookBookmark} from 'react-icons/bi'
//  import {RiServiceFill} from 'react-icons/ri'
//  import {TiMessages} from 'react-icons/ti'
import {BiUserPlus} from 'react-icons/bi'
import { useState } from 'react';
import meavatar from '../../assets/images/android-chrome-512x512.png'
// import { useState } from 'react';
const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
<div className="n-wrapper container navbar__container">
    <div className="n-left">
        <div className="n-name"> 
        <img className='me__avatar' src={meavatar} alt=" testimonial image" /><a href="#"onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Mr. Ukizuru</a></div>
    </div>
    <div className='n-right'>
        <div className="n-list">
            <ul>
                <li><a href="#"onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a></li>
                <li><a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>About</a></li>
                <li><a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Service</a></li>
                <li> <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Experience</a></li>
                <li><a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Portfolio</a></li>
                <li><a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Contact</a></li>
            </ul>
        </div>


        <button class="joinbtn">
  <span class="join__me">
  <BiUserPlus className='join__me-icon'/>
    {/* <svg viewBox="0 0 384 512" height="0.9em" class="icon"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path></svg> */}
  </span>
  <p class="text">Join Me</p>
</button>
    </div>
</div>
  )
}
export default Navbar







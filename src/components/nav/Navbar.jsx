
import React from 'react'
import './navbar.css'
// import  avatar from '../../assets/images/android-chrome-512x512.png'
//  import  {AiOutlineHome} from 'react-icons/ai'
//  import {AiOutlineUser} from 'react-icons/ai'
//  import {BiBookBookmark} from 'react-icons/bi'
//  import {RiServiceFill} from 'react-icons/ri'
//  import {TiMessages} from 'react-icons/ti'
// import { useState } from 'react';
const Navbar = () => {
  return (
<div className="n-wrapper container navbar__container">
    <div className="n-left">
        <div className="n-name">Mr. Ukizuru</div>
    </div>
    <div className='n-right'>
        <div className="n-list">
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Portfolio</li>
                <li>About</li>
                <li>contact</li>
            </ul>
     
        </div>
        <button type="button" className='btn btn-primary'>send message</button>
    </div>
</div>
  )
}
export default Navbar







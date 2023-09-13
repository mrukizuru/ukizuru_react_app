import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/images/me-profile.png'
import HeaderSocialMedia from './HeaderSocialMedia'
function Header() {
  return (
 <header> 
  <div className="container header__container">
    <h5>Hello I' am</h5>
    <h1>Ukizuru Mustapha</h1>
    <h5>Front-End Developer, IT Specialist and Tutor</h5>
    <CTA/>
    <HeaderSocialMedia/>
    <div className='me'>
    <img src= {Me} alt="Ukizuru Mustapha Profile" />
    </div>
    <a href="#contact" className='scroll__down'>Scroll Down</a>
  </div>
 </header>
  )
}
export default Header
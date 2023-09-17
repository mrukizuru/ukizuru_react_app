import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
const Footer =() =>{
  const currentYear = new Date().getFullYear();
  return (
    
<footer>
    <div className='container container__footer'>
<a href="#" className='footer__logo' rel="Home">Mr. Ukizuru</a>
<ul className='permalinks'>
<li><a href="#">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#experience">Experience</a></li>
<li><a href="#service">Services</a></li>
<li><a href="#portfolio">Portfolio</a></li>
<li><a href="#testimonials">Testimonials</a></li>
<li><a href="#contact">Contact</a></li>
</ul>

<div className='footer__socials'>
   <a href="https://www.instagram.com/"><FaFacebookSquare/></a>
   <a href="https://www.facebook.com/"><FaInstagramSquare/></a>
   <a href="https://twitter.com/"><FaTwitterSquare/></a>
</div>
    </div>

<div className="footer__copyright">
<p>&copy; {currentYear} Mr Ukizuru. All Rights Reserved.</p>
</div>
</footer>
  )
}

export default Footer
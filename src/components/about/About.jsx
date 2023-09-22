import React from 'react'
import './about.css'
import Me from '../../assets/images/ukizuru.png'
import {BsAward} from 'react-icons/bs'
import {FaGraduationCap} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'
const About = () =>{

  return (
    <section id='about'>
   <h5>Get to Know</h5>
   <h2>About Me</h2>
   <div className="container about__container">
    <div className='about__me'>  
    <div className='about__me-image'>
<img src={Me} alt="Ukizuru Mustapha Photo" />
    </div>
    </div>
      
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <BsAward className='about__icon'/>
          <h5>Experience</h5> 
          <small>5+ Years of Working</small>
          </article>

          <article className='about__card'>
            <FaGraduationCap className='about__icon'/>
          <h5>Education</h5> 
          <small>Bacherlors Degree:</small>
          </article>

          <article className='about__card'>
            <AiFillFolderOpen className='about__icon'/>
          <h5>Project</h5> 
          <small>5+ Completed</small>
          </article>

          <article className='about__card'>
            <AiFillFolderOpen className='about__icon'/>
          <h5>Languages</h5> 
          <small>3+ Languages</small>
          </article>
        </div>
        <p>
        I am a versatile Web Developer and IT Specialist with a passion for teaching as a Tutor. With a strong foundation in coding languages and web technologies, I create dynamic and user-friendly 
        websites while sharing my expertise to empower others in the digital realm. Let's innovate and learn together!
          </p>
          <a href="#contact" className='btn'>Reach Out!</a>
      </div>
      </div>
      </section>
  )
}
export default About
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
          <small>2+ Years of Working</small>
          </article>

          <article className='about__card'>
            <FaGraduationCap className='about__icon'/>
          <h5>Education</h5> 
          <small>Bacherlors Degre: Information Technology</small>
          </article>

          <article className='about__card'>
            <AiFillFolderOpen className='about__icon'/>
          <h5>Project</h5> 
          <small>5+ Completed</small>
          </article>
          

         
        </div>
        <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magni magnam delectus quo, vero qui sint consequuntur odio voluptates eaque nulla consequatur non, est neque voluptate, harum optio enim aperiam.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
      </section>
  )
}

export default About
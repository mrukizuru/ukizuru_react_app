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
          <small>Bacherlors Degre: Information Technology</small>
          </article>

          <article className='about__card'>
            <AiFillFolderOpen className='about__icon'/>
          <h5>Project</h5> 
          <small>5+ Completed</small>
          </article>
        </div>
        <p>

        I'm a versatile IT specialist, proficient in development, IT support, and tutoring. I excel at crafting efficient software solutions, resolving complex IT issues, and simplifying intricate concepts for learners. My dedication to technology innovation drives my work, ensuring robust systems, seamless operations, and empowered individuals. I'm committed to pushing boundaries and fostering growth in the ever-evolving IT landscape, offering a unique blend of skills to meet diverse challenges.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
      </section>
  )
}

export default About
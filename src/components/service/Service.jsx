import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'
const Service = () => {
  return (
    <section id='service'>

<h5>What I Offer</h5>
<h2>Services</h2>

<div className='container service__container'>
  <article className="service">
    <div className='service__head'>
      <h3>UI/UX Design</h3>
    </div>
    <ul className='service__list'>
      <li><BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
      </li>
      <li><BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
      </li>
      <li><BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
      </li>


  {/* end of ui/ux */}
    </ul>
  </article>


  <article className="service">
    <div className='service__head'>
      <h3>Web Development</h3>
    </div>
    <ul className='service__list'>
      <li><BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
      </li>
      <li><BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
      </li>
      <li><BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
      </li>


  {/* end of Web Development */}
    </ul>
  </article>


  <article className="service">
    <div className='service__head'>
      <h3>Content Creation</h3>
    </div>
    <ul className='service__list'>
      <li><BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
      </li>
      <li><BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
      </li>
      <li><BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
      </li>


  {/* end of Content Creation */}
    </ul>
  </article>

  <article className="service">
    <div className='service__head'>
      <h3>Tutoring</h3>
    </div>
    <ul className='service__list'>
      <li><BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
      </li>
      <li><BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
      </li>
      <li><BiCheck className='service__list-icon'/>
      <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
      </li>


  {/* end of tutoring */}
    </ul>
  </article>
</div>
    </section>
  )
}

export default Service
import React from 'react'
import CV from '../../assets/documents/UKIZURU MUSTAPHA -RESUME.pdf'
import {BsFileEarmarkPdf} from 'react-icons/bs'
import {RiContactsBookFill} from 'react-icons/ri'
function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'> <BsFileEarmarkPdf className='cta__icon'/> Download Resume</a>
      <a href="#contact" className='btn btn-primary'><RiContactsBookFill className='cta__icon'/>Reach Out!</a>
    </div>
  )
}

export default CTA

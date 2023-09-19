import React from 'react'
import CV from '../../assets/documents/UKIZURU MUSTAPHA -RESUME.pdf'
import {BsFileEarmarkPdf} from 'react-icons/bs'
function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'> <BsFileEarmarkPdf/>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Reach Out!</a>
    </div>
  )
}

export default CTA

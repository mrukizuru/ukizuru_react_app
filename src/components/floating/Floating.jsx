import React from 'react'
import './floating.css'
import Content from '../../assets/images/content-creator.png'
import Coding from '../../assets/images/coding.svg'
import Developer from '../../assets/images/app-development.png'
const Floating = ({image, text_1, text_2}) => {
  return (
    <div className='floatingdiv'>
     <img src={image} alt="" />
     <span>
        {text_1}<br />{text_2}
     </span>
        </div>
  )
}
export default Floating
import React from 'react'
import './floating.css'
const Floating = ({image, text}) => {
  return (
    <div className='floatingdiv'>
     <img src={image} alt="" />
     <span>
       <small> {text}</small>
     </span>
        </div>
  )
}
export default Floating
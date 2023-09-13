import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import  {BsDribbble} from 'react-icons/bs'
function HeaderSocialMedia() {
  return (
    <div className='header__socialmedia'>
      <a href="" target='_blank'><BsLinkedin/></a>
      <a href="" target='_blank'><BsGithub/></a>
      <a href="" target='_blank'><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocialMedia

import './testimonials.css'
import avatar__1 from '../../assets/images/android-chrome-512x512.png'
import avatar__2 from '../../assets/images/android-chrome-512x512.png'
import avatar__3 from '../../assets/images/android-chrome-512x512.png'
import avatar__4 from '../../assets/images/android-chrome-512x512.png'
import avatar__5 from '../../assets/images/android-chrome-512x512.png'
import avatar__6 from '../../assets/images/android-chrome-512x512.png'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import    {BiSolidStarHalf} from 'react-icons/bi'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';
const data = [
  {
    avatar: avatar__1,
     name: "Tina Snow",
    title: "Developer",
    review: "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione et. Expedita, iste quod eaque laborum odit eligendi ut vel. Odit nostrum cupiditate id eaque, molestias suscipit quibusdam autem exercitationem?",
    github: "https://github.com/rishavchanda/Podstream",
    webapp: "https://podstream.netlify.app/",
  },
  {
    avatar: avatar__2,
     name: "Tina Snow",
    title: "Developer",
    review: "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione et. Expedita, iste quod eaque laborum odit eligendi ut vel. Odit nostrum cupiditate id eaque, molestias suscipit quibusdam autem exercitationem?",
    github: "https://github.com/rishavchanda/Podstream",
    webapp: "https://podstream.netlify.app/",
  },
  {
    avatar: avatar__3,
     name: "Tina Snow",
    title: "Developer",
    review: "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione et. Expedita, iste quod eaque laborum odit eligendi ut vel. Odit nostrum cupiditate id eaque, molestias suscipit quibusdam autem exercitationem?",
    github: "https://github.com/rishavchanda/Podstream",
    webapp: "https://podstream.netlify.app/",
  },
  {
    avatar: avatar__4,
     name: "Tina Snow",
    title: "Developer",
    review: "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione et. Expedita, iste quod eaque laborum odit eligendi ut vel. Odit nostrum cupiditate id eaque, molestias suscipit quibusdam autem exercitationem?",
    github: "https://github.com/rishavchanda/Podstream",
    webapp: "https://podstream.netlify.app/",},
  {
    avatar: avatar__5,
     name: "Tina Snow",
    title: "Developer",
    review: "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione et. Expedita, iste quod eaque laborum odit eligendi ut vel. Odit nostrum cupiditate id eaque, molestias suscipit quibusdam autem exercitationem?",
    github: "https://github.com/rishavchanda/Podstream",
    webapp: "https://podstream.netlify.app/",
  },
  {
    avatar: avatar__6,
     name: "Tina Snow",
    title: "Developer",
    review: "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione et. Expedita, iste quod eaque laborum odit eligendi ut vel. Odit nostrum cupiditate id eaque, molestias suscipit quibusdam autem exercitationem?",
    github: "https://github.com/rishavchanda/Podstream",
    webapp: "https://podstream.netlify.app/",
  }
 ]
function Testimonials() {
  return (
<section id='testimonials'>
  <h5>Review from Clients</h5>
  <h2>Testimonials</h2>
    <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
    className='mySwiper container testimonials__container'>
{
  data.map(({avatar, name, title, review, github, webapp}, index) =>{
return (
  <SwiperSlide  key={index} className='testimonial'>
  <div className='client__avatar'>
 <img src={avatar} alt="Testimonials" />
</div>
<h5 className='client__name'>{name}</h5>
<p className='client__title'>{title}</p>
<small className='client__review'>{review}</small>
<div className='client__socialMedia'>
<a href={github}> <AiFillTwitterCircle/></a>
<a href={webapp}> <BsFacebook/></a>
</div>
<div className="star-rating">
  <BiSolidStarHalf/>
  </div>
</SwiperSlide>
)
  })
}
</Swiper>
</section>
  )
}
export default Testimonials
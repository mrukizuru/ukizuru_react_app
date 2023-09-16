import React from 'react'
import './testimonial.css'


// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import AVTR from '../../assets/images/android-chrome-512x512.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
{
avatar: AVTR,
name: 'Tina Snow',
review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam odio ullam dolore cum repellat dolores reprehenderit commodi fuga porro! Eaque odio quo tenetur nemo numquam laborum ex amet officia vel.'
},
{
  avatar: AVTR,
  name: 'Tina Snow',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam odio ullam dolore cum repellat dolores reprehenderit commodi fuga porro! Eaque odio quo tenetur nemo numquam laborum ex amet officia vel.'
},
  {
    avatar: AVTR,
    name: 'Tina Snow',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam odio ullam dolore cum repellat dolores reprehenderit commodi fuga porro! Eaque odio quo tenetur nemo numquam laborum ex amet officia vel.'
  },
    {
      avatar: AVTR,
      name: 'Tina Snow',
      review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam odio ullam dolore cum repellat dolores reprehenderit commodi fuga porro! Eaque odio quo tenetur nemo numquam laborum ex amet officia vel.'
    }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
<h5>Review from Clients</h5>
<h2>Testimonials</h2>
<Swiper className="container testimonials__container"
   // install Swiper modules
   modules={[Pagination]}
   spaceBetween={40}
   slidesPerView={2}
   pagination={{ clickable: true }}>

{
  data.map(({ avatar, name, review}, index) => {

return (
<SwiperSlide key={index} className='testimonial'>
  <div className='client__avatar'>
    <img src={avatar} alt=" testimonial image" />
  </div>
  <h5 className='client__name'>{name}</h5>
<small className='client__review'>{review}</small>

</SwiperSlide>
)
})
}
</Swiper>
    </section>
  )
}
export default Testimonials
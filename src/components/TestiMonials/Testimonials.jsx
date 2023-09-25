// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import './testimonials.css';
// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';
// export default function App() {
//   return (
//     <>
//     <div className='container testimonials__container'> 
//     <h5>Testimonials</h5>
//     <h2>Tesimonail</h2>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//         </SwiperSlide>
//       </Swiper>
//       </div>
//     </>
//   );
// }


import React from 'react'
import './testimonials.css'
import avatar__1 from '../../assets/images/android-chrome-512x512.png'
import avatar__2 from '../../assets/images/android-chrome-512x512.png'
import avatar__3 from '../../assets/images/android-chrome-512x512.png'
import avatar__4 from '../../assets/images/android-chrome-512x512.png'
import avatar__5 from '../../assets/images/android-chrome-512x512.png'
import avatar__6 from '../../assets/images/android-chrome-512x512.png'
import avatar__7 from '../../assets/images/android-chrome-512x512.png'


const data = [
  {
    avatar: avatar__1,
    name: "Tina Snow",
    title: "Developer",
    review: "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione et. Expedita, iste quod eaque laborum odit eligendi ut vel. Odit nostrum cupiditate id eaque, molestias suscipit quibusdam autem exercitationem?"
  },
  {
    avatar: avatar__2,
    name: "Tina Snow",
    title: "Developer",
    review: "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione et. Expedita, iste quod eaque laborum odit eligendi ut vel. Odit nostrum cupiditate id eaque, molestias suscipit quibusdam autem exercitationem?"
  },
  {
    avatar: avatar__3,
    name: "Tina Snow",
    title: "Developer",
    review: "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione et. Expedita, iste quod eaque laborum odit eligendi ut vel. Odit nostrum cupiditate id eaque, molestias suscipit quibusdam autem exercitationem?"
  },
  {
    avatar: avatar__4,
    name: "Tina Snow",
    title: "Developer",
    review: "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione et. Expedita, iste quod eaque laborum odit eligendi ut vel. Odit nostrum cupiditate id eaque, molestias suscipit quibusdam autem exercitationem?"
  },
  {
    avatar: avatar__5,
    name: "Tina Snow",
    title: "Developer",
    review: "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione et. Expedita, iste quod eaque laborum odit eligendi ut vel. Odit nostrum cupiditate id eaque, molestias suscipit quibusdam autem exercitationem?"
  },
  {
    avatar: avatar__6,
    name: "Tina Snow",
    title: "Developer",
    review: "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione et. Expedita, iste quod eaque laborum odit eligendi ut vel. Odit nostrum cupiditate id eaque, molestias suscipit quibusdam autem exercitationem?"
  },
  {
    avatar: avatar__7,
    name: "Tina Snow",
    title: "Developer",
    review: "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione et. Expedita, iste quod eaque laborum odit eligendi ut vel. Odit nostrum cupiditate id eaque, molestias suscipit quibusdam autem exercitationem?"
  },
]






function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
    <div className='container testimonials__container'>
<article className='testimonial'>
<div className='client__avatar'>
  <img src={avatar__1} alt="Testimonials" />
  <h5 className='client__name'>Ernest Achiever</h5>
  <p className='client__title'>Developer</p>
  <small className='client__review'>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione et. Expedita, iste quod eaque laborum odit eligendi ut vel. Odit nostrum cupiditate id eaque, molestias suscipit quibusdam autem exercitationem?
  </small>
</div>
</article>


    </div>
    </section>

  )
}

export default Testimonials
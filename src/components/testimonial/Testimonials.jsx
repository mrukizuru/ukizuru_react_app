// import React from 'react'
// import './testimonial.css'
// // import Swiper core and required modules
// import {Pagination} from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import AVTR from '../../assets/images/android-chrome-512x512.png'
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// const data = [
// {
// avatar: AVTR,
// name: 'Tina Snow',
// review: 'Working with Designer s Name was a game-changer. Their UI/UX expertise elevated our project, creating an intuitive and visually stunning experience. '
// },
// {
//   avatar: AVTR,
//   name: 'Tina Snow',
//   review: 'Working with Designer s Name was a game-changer. Their UI/UX expertise elevated our project, creating an intuitive and visually stunning experience. '
// },
//   {
//     avatar: AVTR,
//     name: 'Tina Snow',
//     review: 'Working with Designer s Name was a game-changer. Their UI/UX expertise elevated our project, creating an intuitive and visually stunning experience. '
//   },
//     {
//       avatar: AVTR,
//       name: 'Tina Snow',
//       review: 'Working with Designer s Name was a game-changer. Their UI/UX expertise elevated our project, creating an intuitive and visually stunning experience. '
//     }
// ]

// const Testimonials = () => {
//   return (
//     <section id='testimonials'>
// <h5>Review from Clients</h5>
// <h2>Testimonials</h2>
// <div className="container testimonials__container">
// <Swiper
//    // install Swiper modules
//    modules={[Pagination]}
//    spaceBetween={40}
//    slidesPerView={1}
//    pagination={{ clickable: true }}>

// {
//   data.map(({ avatar, name, review}, index) => {

// return (
// <SwiperSlide key={index} className='testimonial'>
//   <div className='client__avatar'>
//     <img src={avatar} alt=" testimonial image" />
//   </div>
//   <h5 className='client__name'>{name}</h5>
// <small className='client__review'>{review}</small>

// </SwiperSlide>
// )
// })
// }
// </Swiper>
// </div>
//     </section>
//   )
// }
// export default Testimonials
import './App.css'
import Navbar from './components/nav/Navbar'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Service from './components/service/Service'
import Testimonials from './components/testimonial/Testimonials'
// import Portfolio  from './components/portfolio/Portfolio'
import Projects from "./components/projects/index";
import ProjectDetails from "./components/projectDetails/index";
import styled from "styled-components";

import React, { useState } from 'react';
// import { useMediaQuery } from 'react-responsive';

// export const useBreakpoints = () => {
//   const isMobileSmall = useMediaQuery({ query: '(max-width: 325px)' });
//   const isMobileMid = useMediaQuery({ query: '(max-width: 375px)' });
//   const isMobileFloor = useMediaQuery({ query: '(max-width: 425px)' });

//   const isTabletFloor = useMediaQuery({ query: '(max-width: 426px)' });
//   const isTabletMid = useMediaQuery({ query: '(max-width: 768px)' });
//   const isTabletCeil = useMediaQuery({ query: '(max-width: 1024px)' });

//   const isLaptopFloor = useMediaQuery({ query: '(max-width: 1025px)' });
//   const isLaptopCeil = useMediaQuery({ query: '(max-width: 1440px)' });

//   const isXHDFloor = useMediaQuery({ query: '(max-width: 1441px)' });
//   const isXHDCeil = useMediaQuery({ query: '(max-width: 4096px)' });




//   return {
//     isMobileSmall,
//     isMobileMid,
//     isMobileFloor,
//     isTabletFloor,
//     isTabletMid,
//     isTabletCeil,
//     isLaptopFloor,
//     isLaptopCeil,
//     isXHDFloor,
//     isXHDCeil,
//   };
// };

const App = () =>{
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <>
<Navbar/>
<Header/>
<Nav/>
<About/>
<Experience/>
<Service/>
{/* <Portfolio/> */}
{/* <Testimonials/> */}
<Projects openModal={openModal} setOpenModal={setOpenModal} />
{openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
<Contact/>
<Footer/>
    </>
  )
}
export default App
import React from 'react'
import './App.css'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Service from './components/service/Service'
import Testimonial from './components/testimonial/Testimonial'
import Portfolio  from './components/portfolio/Portfolio'


import { useMediaQuery } from 'react-responsive';

export const useBreakpoints = () => {
  const isMobileSmall = useMediaQuery({ query: '(max-width: 325px)' });
  const isMobileMid = useMediaQuery({ query: '(max-width: 375px)' });
  const isMobileFloor = useMediaQuery({ query: '(max-width: 425px)' });

  const isTabletFloor = useMediaQuery({ query: '(max-width: 426px)' });
  const isTabletMid = useMediaQuery({ query: '(max-width: 768px)' });
  const isTabletCeil = useMediaQuery({ query: '(max-width: 1024px)' });

  const isLaptopFloor = useMediaQuery({ query: '(max-width: 1025px)' });
  const isLaptopCeil = useMediaQuery({ query: '(max-width: 1440px)' });

  const isXHDFloor = useMediaQuery({ query: '(max-width: 1441px)' });
  const isXHDCeil = useMediaQuery({ query: '(max-width: 4096px)' });

  return {
    isMobileSmall,
    isMobileMid,
    isMobileFloor,
    isTabletFloor,
    isTabletMid,
    isTabletCeil,
    isLaptopFloor,
    isLaptopCeil,
    isXHDFloor,
    isXHDCeil,
  };
};







function App() {
  return (
    <>
<Header/>
<Nav/>
<About/>
<Experience/>
<Service/>
<Portfolio/>
<Testimonial/>
<Contact/>
<Footer/>
    </>
  )
}
export default App
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
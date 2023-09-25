import './App.css'
import Navbar from './components/nav/Navbar'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Projects from './components/projects/index'
import ProjectDetails from './components/projectDetails/index'
import Testimonials from './components/Testimonials/Testimonials';
import React, { useState } from 'react'
// import { useMediaQuery } from 'react-responsive';
const App = () =>{
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <>
<Navbar/>
<Header/>
<Nav/>
<About/>
<Projects openModal={openModal} setOpenModal={setOpenModal} />
{openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}

<Contact/>
<Testimonials/>
<Footer/>
    </>
  )
}
export default App
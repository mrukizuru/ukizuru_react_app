import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () =>{





  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5uc4rij', 'template_31wk7jl', form.current, 'wEKdsoABip793bqkt')
   
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };













  return (
    <section id='contact'>
      
<h5>Get In Touch</h5>
<h2>Contact Me</h2>
<div className='container contact__container'> 
<div className="contact__options">
  <article className='contact__option'>
    <MdOutlineMail className='contact__option-icon'/>
    <h4>Email</h4>
    <h5>mr.ukizuru@gmail.com</h5>
    <a href="mailto:mr.ukizuru@gmail.com" target='_blank'>Send a Message</a>
  </article>

  <article className='contact__option'>
    <FaFacebookMessenger className='contact__option-icon'/>
    <h4>Messenger</h4>
    <h5>Mr Ukizuru</h5>
    <a href="https://m.me/mr.ukizuru" target='_blank'>Send a Message</a>
  </article>

  <article className='contact__option'>
    <BsWhatsapp className='contact__option-icon'/>
    <h4>Whatsapp</h4>
    <h5>+525540562833</h5>
    <a href="https://w.app/UkizuruMustapha" >Send a Message</a>
  </article>
</div>
{/* end of contact option */} 
<form ref={form} onSubmit={sendEmail}>
<input type="text" name='name' placeholder='Your Full Name' required />
<input type="email" name="email" id="email" placeholder='Your Email' required/>
<textarea name="message" id="" rows="10" placeholder='Your Message' required>
</textarea>
<button type='submit' className='btn btn-primary'>Send Message</button>
</form>
</div>
 </section>
  )
}

export default Contact
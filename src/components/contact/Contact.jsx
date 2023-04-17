import React from 'react'
import './contact.css'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q8dlzmr', 'template_i816wzn', form.current, '9TO4osZJJNhMfLBf9')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get Connected</h5>
      <h2>Contact Me</h2>
      
      <div className='container contact-wrapper'>
        <div className="contact-method-wrapper">
        <article className='contact-method'>
            <MdOutlineEmail className='contact-method-icon'/>
            <h4>Email</h4>
            <h5>veektur@hotmail.com</h5>
            <a href="mailto:veektur@hotmail.com">Send a message</a>
          </article><article className='contact-method'>
            <RiMessengerLine className='contact-method-icon'/>
            <h4>Messenger</h4>
            <h5>Victor Rivera</h5>
            <a href="https://m.me/Vrivera1993">Send a message</a>
          </article><article className='contact-method'>
            <FaWhatsapp className='contact-method-icon'/>
            <h4>WhatsApp</h4>
            <h5>+49 15140016819</h5>
            <a href="https://api.whatsapp.com/send?phone=4915140016819">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div> 
      </section>
  )
}

export default Contact
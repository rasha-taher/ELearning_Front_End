import React from 'react'
import '../styles/contact.css'
import callGif from '../images/contactus.gif'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
import facebook from '../images/facebook.svg'
import location from '../images/location.svg'
const Contact = () => {
  return (
    <div id='contact'>
      <p className='about-title'> Contact Us</p>
      <div className='inside-contact-container'>
        <div className='contact-side'>
        <label className='contact-label'>
            Name:
        </label>
        <input type="text" className='contact-input' />
        <label className='contact-label'>
            Email:
        </label>
        <input type="text" className='contact-input' />
        <label className='contact-label'>
            Your Message: 
        </label>
        <textarea type="text" className='text-input' />
        <button className="join-btn"> Send Message</button>
        </div>
     
      <div className='contact-side'>
        <img src={callGif} alt="call gif" className='callGif'></img>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <div className='social-icons'>
        <img src={twitter} alt="call gif" className='social-svg'></img>
        <img src={instagram} alt="call gif" className='social-svg'></img>
        <img src={facebook} alt="call gif" className='social-svg'></img>
        <img src={location} alt="call gif" className='social-svg'></img>
       
        </div>
        </div> 
        </div>
    </div>
  )
}

export default Contact

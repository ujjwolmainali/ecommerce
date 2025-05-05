import React from 'react'
import "./contact.css";
import Footer from './footer';

const Contact = () => {
    const shopcolor = {
    color: "green",
  };
  return (
    <>
           <div className="shop">
        <span><h3>Contact Us</h3></span> 
        <h4>
          <span className='Home'><a href="#">Home </a></span>/ 
          <span style={shopcolor}> Contact Us</span>
        </h4>
      </div>
      <div className="contact-container">
      {/* Contact Form */}
      <div className="contact-form">
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email</label>
          <div className="email-phone">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <label htmlFor="phone" className="phone-label">
            Phone Number
          </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          Contact us for questions, technical assistance, or collaboration
          opportunities via the contact information provided.
        </p>
        <ul>
          <li>
            <span>📞</span> +977 9840026327
          </li>
          <li>
            <span>✉️</span> sabaikobajar@gmail.com
          </li>
          <li>
            <span>📍</span> Kapan,Kathmandu
          </li>
        </ul>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact

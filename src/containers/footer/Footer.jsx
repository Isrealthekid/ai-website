import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="gpt3__footer section_padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient_text">Do you want to step into the future before others</h1>
      </div>

      <div className="gpt3__footer-btn">
         <p>Request Early Access</p> 
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>123 Agboyi  Alapere ketu Ikorodu Road Lagos State Nigeria,
             All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Lagos, Nigeria</p>
          <p>123-456789</p>
          <p>info@website.com</p>
        </div>

      </div>

      <div className="gpt3__footer-copyright">
        <p>Copyright © 2023 By GPT-3  3| All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
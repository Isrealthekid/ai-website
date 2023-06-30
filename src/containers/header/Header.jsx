import React from 'react';
import './header.css'
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"
const Header = () => {
  return (
    <div className="gpt3_header section_padding" id="home">
      <div className="gpt3_header-content">
        <h1 className="gradient_text">
          Let's Build Something Amazing With GPT-3 OpenAI
        </h1>
        <p>
          Artificial intelligence is a rapidly evolving field that utilizes computer systems to simulate human intelligence, enabling advanced problem-solving, data analysis, automation, and potential societal impact across various industries</p>
        <div className="gpt3_header-content_input">
          <input type="email" placeholder="Your Email Address"/>
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3_header-content_people">
          <img src={people} alt="people" />
          <p>1600 people requested access to visit in the last 24hours</p>
        </div>

        
      </div>
      
      <div className="gpt3_header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header
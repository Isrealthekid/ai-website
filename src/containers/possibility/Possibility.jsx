import React from 'react';
import './possibility.css';
import  possibilityImage from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className="gpt3__possibility section_padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started </h4>
        <h1 className="gradient_text">The possibilities are beyond your imaginations</h1>
        <p>From they fine john he give of rich he. They age and draw mrs like.From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
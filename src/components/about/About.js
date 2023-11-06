import React from 'react'
import aboutDark from '../../images/image-about-dark.jpg'
import aboutLight from '../../images/image-about-light.jpg'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="image-wrapper">
        <img src={aboutDark} alt="room" />
      </div>
      <div className="about-wrapper">
        <p className="heading">About our furniture</p>

        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="image-wrapper">
        <img src={aboutLight} alt="chair" />
      </div>
    </div>
  )
}

export default About

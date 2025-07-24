import React from "react";
import "./Hero.css";
import Images from "../../images/img3.png-removebg-preview.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div  className="hero">
      <div className="profile-wr">
        <div className="rotating"></div>
        <div id='home' className="pro-container">
          <img src={Images} className="b3"></img>
        </div>
      </div>
      <h1><span>Hello It's me Sanju Kannan,</span>frontend developer</h1>
      <p>
        I’m a Web Developer focused on building responsive, user-friendly
        websites and turning ideas into clean, modern code.
      </p>
      <div className="hero-section">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contacts'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;

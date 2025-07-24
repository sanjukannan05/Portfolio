import React from 'react'
import './About.css'
import Image1 from '../../images/img3.png.jpg'
import Image2 from '../../images/nav_underline.svg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={Image2} alt=''></img>
            </div>
        <div className="about-section">
            <div className="about-left">
                <img src={Image1} className='a1'></img>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>A motivated and detail-oriented Full Stack Web Developer with a strong passion for creating responsive, user-focused web applications. Skilled in technologies like React, Node.js, and MongoDB, and eager to learn, grow, and contribute to impactful projects.</p>
                    <p>Demonstrates strong problem-solving abilities and quickly adapts to new tools, technologies, and collaborative environments.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'80%'}}></hr></div>
                     <div className="about-skill"><p>React JS</p><hr style={{width:'10%'}}></hr></div>
                      <div className="about-skill"><p>JavaScript</p><hr style={{width:'60%'}}></hr></div>
                       <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'50%'}}></hr></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
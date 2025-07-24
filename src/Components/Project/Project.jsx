import React from 'react'
import './Project.css'
import Images4 from '../../images/supply.png'
import Images3 from '../../images/nav_underline.svg'
const Project = () => {
  return (
    <div id='projects' className='services'>
        <div className="sevices-title">
            <h1>My Project</h1>
            <img src={Images3}></img>
        </div>
        <div className='services-container'>
          <div className='a11'>
            <img src={Images4} ></img>
            </div>
            <p>SUPPLY CHAIN MANAGEMENT SYSTEM USING BLOCK CHAIN</p>
        </div>
    </div>
  )
}

export default Project
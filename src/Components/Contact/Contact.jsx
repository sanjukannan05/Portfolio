import React from "react";
import "./Contact.css";
import Images4 from "../../images/nav_underline.svg";
import Images5 from "../../images/mail_icon.svg";
import Images6 from "../../images/location_icon.svg";
import Images7 from "../../images/call_icon.svg";
const Contact = () => {
  return (
    <div id='contacts' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={Images4}></img>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
                <img src={Images5}></img> <p>sanjukannan25v@gmail.com</p>
            </div>
            <div className="contact-detail">
                 <img src={Images7}></img> <p>+91-9994922206</p>
            </div>
            <div className="contact-detail">
                 <img src={Images6}></img> <p>Coimbatore</p>
            </div>
          </div>
        </div>
        <form  className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name"/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" />
          <label htmlFor="">Write Your Message Here</label>
          <textarea name="message" rows="" placeholder="Enter Your Message"></textarea>
          <button type="submit" className="contact-submit">Submit</button>
      
      
        </form>
      </div>
    </div>
    
  );
};

export default Contact;

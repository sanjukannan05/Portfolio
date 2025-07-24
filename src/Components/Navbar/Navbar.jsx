import React, { useRef, useState } from 'react'
import './Navbar.css' 
import Images1 from '../../images/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image9 from '../../images/nav_underline.svg'
import Image10 from '../../images/menu_open.svg'
import Image11 from '../../images/menu_close.svg'
const Navbar = () => {
  const [menu,setMenu]= useState('home');
  const menuRef = useRef();
  const openMenu=()=>{
    menuRef.current.style.right='0'
  }
    const closeMenu=()=>{
    menuRef.current.style.right='-350px'
  }
  return (
    <div className='navbar'>
        <div className='a8'>
          <h2>SANJU KANNAN</h2>
           <img src={Image9} alt=''className='a15'></img>
        </div>
        <img src={Image10} onClick={openMenu} className="nav-mob-open"></img>
        <ul ref={menuRef} className='nav-menu'>
          <img src={Image11} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu==='home'?<img src={Images1}></img>:<></>}</li>
            <li><AnchorLink  className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About Me</p></AnchorLink>{menu==='about'?<img src={Images1}></img>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skill'><p onClick={()=>setMenu('skill')}>Skills</p></AnchorLink>{menu==='skill'?<img src={Images1}></img>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu('projects')}>Projects</p></AnchorLink>{menu==='projects'?<img src={Images1}></img>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contacts'><p onClick={()=>setMenu('contacts')}>Contact</p></AnchorLink>{menu==='contacts'?<img src={Images1}></img>:<></>}</li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contacts'>Connect With Me </AnchorLink></div>
    </div>
  )
}

export default Navbar
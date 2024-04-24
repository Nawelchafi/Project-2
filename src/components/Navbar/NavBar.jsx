import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useState, useEffect } from 'react';

// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";
// import PopUpBurgerMenu from './PopUpBurgerMenu';
import Logo from "../../assets/logo.png";

const navBarConfig = [{
  link: '/',
  title: 'Home'
}, {
  link: '/discover',
  title: 'Discover'
}, {
  link: '/blog',
  title: 'Blog',
}, {
  link: '/about',
  title: 'About',
}, {
  link: '/city',
  title: 'City',
},
  {
  link: '/login',
  title: 'Login',
}]

const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
      
      <Link className='' to='/'>
          <img className='logo-style' src={Logo} alt="logo" />
        </Link>
        <h1 className='title'>FlaverFinds</h1>
        
        <div className='subtitle'>
        Find places to eat
        </div>
        <Link to='/'></Link>
        <ul className='nav-list'>
          {navBarConfig.map(item => (
            <li key={item.title}>
              <Link to={item.link}>{item.title} </Link>
            </li>
          ))}
        </ul>
        </nav>
    </div>
  )
}

export default Navbar
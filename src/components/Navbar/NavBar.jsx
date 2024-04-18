import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";
// import PopUpBurgerMenu from './PopUpBurgerMenu';
import Logo from "../../assets/logo.png";

const navBarConfig = [{
  link: '/',
  title: 'Home'
}, {
  link: '/',
  title: 'Discover'
}, {
  link: '/',
  title: 'Blog',
}, {
  link: '/',
  title: 'About',
}, {
  link: '/city',
  title: 'City',
},
  {
  link: '/',
  title: 'Login',
}]

const Navbar = () => {
  return (
    <div>
      <h1>FlaverFinds</h1>
      <nav className='flex'>
        <Link className='' to='/'>
          <img className='logo-style' src={Logo} alt="logo" />
        </Link>
        <NavLink to='/'>logo</NavLink>
        <ul>
          {navBarConfig.map(item => (
            <li key={item.title}>
              <NavLink to={item.link}>{item.title} </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
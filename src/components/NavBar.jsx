import React from 'react'
import { Link } from 'react-router-dom';
// import Icon from "../../assets/icon.png";
import './NavBar.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";
// import PopUpBurgerMenu from './PopUpBurgerMenu';

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
  link: '/',
  title: 'City',
}, {
  link: '/',
  title: 'Sign up',
}, {
  link: '/',
  title: 'Log in',
}]

const NavBar = () => {
  return (

    <div>
      <h1>FLAVERFINDS</h1>
      <nav className='flex'>

        {/* <img src={Icon} alt="icon" /> */}
        <NavLink to='/'>logo</NavLink>
        <ul>
          {navBarConfig.map(item => (
            <li key={item.title}>
              <NavLink to={item.link}>{item.title} </NavLink>
            </li>
          ))}
        </ul>
        {/* 
      <NavLink to='/'>Discover</NavLink>
      <NavLink to='/'>Blog</NavLink>
      <NavLink to='/'>About </NavLink> */}
      </nav>
    </div>
  )
}

export default NavBar
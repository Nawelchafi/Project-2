// import Icon from "../../assets/icon.png";
import './NavBar.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";
// import PopUpBurgerMenu from './PopUpBurgerMenu';


const NavBar = () => {
    return (

        <div>
            {/* <img src={Icon} alt="icon" /> */}
            <NavLink to='/'>Home </NavLink>
            <NavLink to='/'>Discover</NavLink>
            <NavLink to='/'>Blog</NavLink>
            <NavLink to='/'>About </NavLink>

        </div>
    )
}

export default NavBar
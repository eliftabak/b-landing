import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/image/Logomark.png';
import wrench from '../../assets/icon/wrench.png';
import login from '../../assets/icon/login.png';
import './index.scss';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__right'>
        <Link to="/" className='navbar__right-item'>
          Apply
        </Link>
        <Link to="/" className='navbar__right-item'>
          How it works
        </Link>
        <Link to="/" className='navbar__right-item'>
          About us
        </Link>
        <Link to="/" className='navbar__right-item'>
          Blog
        </Link>
      </div>
      <div className='navbar__item'>
        <img src={logo} alt="bumper-logo" />
      </div>
      <div className='navbar__left'>
        <Link to="/" className='navbar__left-item'>
          <span>Partner sign up</span>
          <img src={wrench} alt="wrench-icon" />
        </Link>
        <Link to="/" className='navbar__left-item'>
          <span>Partner login</span>
          <img src={login} alt="login-icon" />
        </Link>
      </div>
    </div>
  );
}
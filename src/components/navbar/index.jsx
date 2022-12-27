import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/Logomark.png';
import login from '../../assets/icon/login.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__right'>
        <Link className='navbar__right-item'>
          Apply
        </Link>
        <Link className='navbar__right-item'>
          How it works
        </Link>
        <Link className='navbar__right-item'>
          About us
        </Link>
        <Link className='navbar__right-item'>
          Blog
        </Link>
      </div>
      <div className='navbar__item'>
        <img src={logo} alt="bumper-logo" />
      </div>
      <div className='navbar__left'>
        <Link className='navbar__left-item'>
          <span>Partner sign up</span>
          <FontAwesomeIcon icon={faWrench} />
        </Link>
        <Link className='navbar__left-item'>
          <span>Partner login</span>
          <img src={login} alt="login-icon" />
        </Link>
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/Logomark.png';
import login from '../../assets/icon/login.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import './navbar.scss';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__right'>
        <Link to='/register-form' className='navbar__right-item'>
          Apply
        </Link>
        <Link to='/' className='navbar__right-item'>
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
        <Link to='/'>
          <img src={logo} alt="bumper-logo" />
        </Link>
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
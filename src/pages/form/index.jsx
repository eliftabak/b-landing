import React from 'react';
import RegisterForm from '../../containers/registerForm';
import Navbar from '../../components/navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

export default function RegisterFormPage() {

  return (
    <div className='formPage'>
      <Navbar/>
      <div className='formPage__container'>
        <div className='formPage__title'>
          <Link to='/'>
            <FontAwesomeIcon icon={faArrowLeft} className='formPage__title-arrowLeft' />
          </Link>
          <h4>Join our network</h4>
          <p>
            Offer <a href="/">PayLater</a> to split servicing and repair work into monthly instalments - interest-free. 
            Use <a href="/">PayNow</a> to take secure payments online.
          </p>
        </div>
        <RegisterForm/>
      </div>
    </div>
  );
}
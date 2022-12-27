import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

export default function Button() {
  return (
    <Link to="/register-form">
      <button className='button'>
        <span>Register your interest</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </Link>
  );
}
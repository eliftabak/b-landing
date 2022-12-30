import React from 'react';
import { Link } from 'react-router-dom';
import trustPilot from '../../assets/image/trustPilot.png';
import stars from '../../assets/icon/fiveStars.png';
import Button from '../button/button';
import './bannerContent.scss';

export default function BannerContent() {
  return (
    <div className='banner-content'>
      <div className='banner-content__rating'>
        <span>Excellent</span>
        <img src={stars} alt="five-stars" />
        <img src={trustPilot} alt="trust-pilot" />
      </div>
      <div>
        <h3 className='banner-content__title'>BECOME A BUMPER APPROVED DEPENDABLE DEALERSHIP</h3>
        <p className='banner-content__subtext'>Join our network of 3,000+ garages and dealerships who already offer Bumper to their customers.</p>
      </div>
      <Button/>
      <div className='banner-content__login'>
        <span>Already registered?</span>
        <Link to="/">
          Login
        </Link>
      </div>
    </div>
  );
}
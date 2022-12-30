import React from 'react';
import FeaturesList from './featuresList';
import Header from './header';
import Button from '../../components/button/button';
import phone from '../../assets/image/phone.png';
import './index.scss';

export default function FeatureContainer() {
  return (
    <div className='featureContainer'>
      <div className='featureContainer__textarea'>
        <Header/>
        <FeaturesList/>
        <Button/>
      </div>
      <div className='featureContainer__image'>
        <img src={phone} alt="phone" />
      </div>
    </div>
  );
}
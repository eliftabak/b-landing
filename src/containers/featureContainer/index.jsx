import React from 'react';
import List from './list';
import Header from './header';
import Button from '../../components/button';
import phone from '../../assets/image/phone.png';
import './index.scss';

export default function FeatureContainer() {
  return (
    <div className='featureContainer'>
      <div className='featureContainer__textarea'>
        <Header/>
        <List/>
        <Button/>
      </div>
      <div className='featureContainer_image'>
        <img src={phone} alt="phone" />
      </div>
    </div>
  );
}
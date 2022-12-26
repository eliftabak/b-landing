import React from 'react';
import Navbar from '../../components/navbar';
import BannerContent from '../../components/bannerContent';
import './index.scss';

export default function Home() {
  return (
    <div>
      <div className='banner'>
        <Navbar/>
        <BannerContent/>
      </div>
    </div>
  );
}
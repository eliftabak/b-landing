import React from 'react';
import Navbar from '../../components/navbar/navbar';
import BannerContent from '../../components/bannerContent/bannerContent';
import FeatureContainer from '../../containers/featureContainer/featureContainer';
import './home.scss';

export default function Home() {
  return (
    <div>
      <div className='banner'>
        <Navbar/>
        <BannerContent/>
      </div>
      <FeatureContainer/>
    </div>
  );
}
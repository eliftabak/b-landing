import React from 'react';
import trustPilot from '../../assets/image/trust-pilot.png';
import stars from '../../assets/icon/five-stars.png';

export default function BannerContent() {
  return (
    <div>
      <span>Excellent</span>
      <img src={stars} alt="five-stars" />
      <img src={trustPilot} alt="trust-pilot" />
    </div>
  );
}
import React from 'react';
import phone from '../../assets/image/phone.png';
import './index.scss';

export default function Header() {
  return (
    <div className='header'>
      <div className='header__titleBox'>
        <h3>PayLater</h3>
        <p>Allow your customers to split their repair or service bill over monthly repayments.</p>
        <h2>
          NO RISK FOR DEALERS,
          NO WORRY FOR DRIVERS
        </h2>
      </div>
      <div className='header__imageBox'>
        <img src={phone} alt="phone" />
      </div>
    </div>
  );
}
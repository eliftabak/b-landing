import React from 'react';
import './index.scss';

export default function FeaturesList() {
  const features = [
    { 
      key:1, 
      title: 'Fix it', 
      description: 'Your customers bring their vehicle to you. You repair and service the car. Everything just like it works right now.',
    },
    {
      key:2, 
      title: 'Split it', 
      description: 'When the customer gets their bill or quote, Bumper either intergrates into your existing online checkout or can be done on-site before you hand back the keys. All in just a few clicks.'
    },
    {
      key:3, 
      title: 'Sorted', 
      description: 'You and your customer part ways happy. You’re paid in full direct from Bumper, the customer repays Bumper over their chosen payment plan.',
    },
  ]

  return (
    <div className='featureList'>
      <h3>It’s as simple as:</h3>
      
      { features.map((feauture) => {
        return (
          <div className='featureList__item' key={feauture.key}>
            <div className='featureList__number'>
              <div>
                {feauture.key}
              </div>
            </div>
            <div className='featureList__textBox'>
              <h4>{feauture.title}</h4>
              <p>{feauture.description}</p>
            </div>
          </div>
        )
        })
      }
    </div>
  );
}
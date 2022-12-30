import React from 'react';
import Navbar from '../../components/navbar/navbar';
import ListItem from '../../components/listItem/listItem';
import './list.scss';

export default function List() {
  return (
    <div className='list'>
      <Navbar/>
      <div className='list__container'>
        <h2>Interested Dealerships</h2>
        <ListItem />
      </div>
    </div>
  );
}
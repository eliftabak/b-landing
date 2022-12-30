import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import './searchBar.scss'

export default function SearchBar ({ handleChange, searchInput }) {
  return (
    <div className='searchBar'>
      <div className='searchBar__title'>
        <FontAwesomeIcon className='searchBar__title-icon' icon={faBuilding} />
        <h3>Search Company</h3>
      </div>
      <input 
        type='text' 
        className='searchBar__input'
        onChange={handleChange} 
        value={searchInput} 
        placeholder='Start typing name for search' 
        />
    </div>
  );
};



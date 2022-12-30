import React, { useEffect, useState } from 'react';
import SearchBar from '../searchBar/searchBar';
import './listItem.scss';

export default function ListItem() {

  const [localData, setLocalData] = useState([]);
  const [displayCount, setDisplayCount] = useState(3);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('formData'));

    setLocalData(data);

  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleLoadMore = () => {
    setDisplayCount(localData.length);
  };

  return (
    <div className='listItems'>
      <div className='listItems__searchBar'>
        <SearchBar handleChange={handleChange} searchInput={searchInput} />
      </div>
      
      {Object.values(localData)
        .filter((item) => {
          if (searchInput === '') {
            return true;
          } else if (item.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())) {
            return true;
          }
          return false;
        })
        .slice(0, displayCount)
        .map((item, index) => {
          return (
            <div className='listItems__item' key={index} >
            <h1>{item.name}</h1>
            <div className='listItems__item-row'>
              <div className='listItems__item-row-key'>Company</div>
              <div>{item.company}</div>
            </div>
            <div className='listItems__item-row'>
              <div className='listItems__item-row-key'>Mobile phone number</div>
              <div>{item.mobile_phone}</div>
            </div>
            <div className='listItems__item-row'>
              <div className='listItems__item-row-key'>Email address</div>
              <div>{item.email_address}</div>
            </div>
            <div className='listItems__item-row'>
              <div className='listItems__item-row-key'>Postcode</div>
              <div>{item.postcode}</div>
            </div>
            <div className='listItems__item-row'>
              <div className='listItems__item-row-key'>Service Type</div>
              <div>
                {item.pay_later ? 'PayLater' : 'PayNow'}
              </div>
            </div>
          </div>
          )
        })
      }

      {displayCount < localData.length && (
        <button className='listItems__showmore-btn' onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  )
}
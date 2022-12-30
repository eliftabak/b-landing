import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding, faEnvelope, faMobileButton, faHouse } from '@fortawesome/free-solid-svg-icons';
import './formInput.scss';

const nameIcon = <FontAwesomeIcon className='formInput__icon' icon={faUser} />;
const companyIcon = <FontAwesomeIcon className='formInput__icon' icon={faBuilding} />;
const phoneIcon = <FontAwesomeIcon className='formInput__icon' icon={faMobileButton} />;
const emailIcon = <FontAwesomeIcon className='formInput__icon' icon={faEnvelope} />;
const postcodeIcon = <FontAwesomeIcon className='formInput__icon' icon={faHouse} />;

const getInputIcon = (inputType) => {
  switch (inputType) {
    case 'name':
      return nameIcon;
    case 'building':
      return companyIcon;
    case 'phone':
      return phoneIcon;
    case 'email':
      return emailIcon;
    case 'postcode':
      return postcodeIcon;
    default:
      return null;
  }
};

export default function FormInput(props) {

  const { label, icon, onChange, type, formErrors, id, ...inputProps } = props;

  return (
    <div className={formErrors ? 'formInput -has-error' : 'formInput -no-error'}>
      <div className='formInput__label'>
        {getInputIcon(props.icon)}
        <label htmlFor={props.name}>{label}</label>
      </div>
      <input {...inputProps} id={props.name} type={type} onChange={onChange} />
      <p className='formInput__error'>{formErrors}</p>
    </div>
  );
}
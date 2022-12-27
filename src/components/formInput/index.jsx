import React from 'react'; 
import './index.scss';

export default function FormInput(props) {

  const { label, onChange, type, formErrors, id, ...inputProps } = props;

  return (
    <div className='formInput'>
      <label>{label}</label>
      <input {...inputProps} type={type} onChange={onChange} />
      <p>{formErrors}</p>
    </div>
  );
}
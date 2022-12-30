import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/formInput/formInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faCheck, faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { validate } from '../../components/formValidation/formValidation';
import './registerForm.scss';

export default function RegisterForm() {

  const initialValues = {
    'name': '',
    'company': '',
    'mobile_phone': '',
    'email_address': '',
    'postcode': '',
    'pay_later': Boolean(''),
    'pay_now': Boolean(''),
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isChecked, setIsChecked] = useState([false, false]);
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    
    if (name === 'pay_later' || name === 'pay_now') {
      value = e.target.type === 'checkbox' ? e.target.checked : Boolean(e.target.value);
    }
    
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    const newIsChecked = [...isChecked];
    newIsChecked[e.target.value] = checked;
    setIsChecked(newIsChecked);
    setFormValues({ ...formValues, [e.target.name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues, isChecked));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0) {
      const data = {
        name: formValues.name,
        company: formValues.company,
        mobile_phone: formValues.mobile_phone,
        email_address: formValues.email_address,
        postcode: formValues.postcode,
        pay_later: String(formValues.pay_later),
        pay_now: String(formValues.pay_now),
      };
      
      fetch('https://demo.bumper.co.uk/core/dealership/reg/sandbox', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then((response) => {
        if (response.status === 200) {
          let formData = JSON.parse(localStorage.getItem('formData')) || [];

          formData.push(data);
              
          localStorage.setItem('formData', JSON.stringify(formData));
          navigate('/list');
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      label: 'Name',
      icon: 'name',
    },
    {
      id: 2,
      name: 'company',
      type: 'text',
      label: 'Company',
      icon: 'building',
    },
    {
      id: 3,
      name: 'mobile_phone',
      type: 'number',
      label: 'Mobile Phone Number',
      icon: 'phone',
    },
    {
      id: 4,
      name: 'email_address',
      type: 'text',
      label: 'Email Address',
      icon: 'email',
    },
    {
      id: 5,
      name: 'postcode',
      type: 'text',
      label: 'Postcode',
      icon: 'postcode',
      placeholder: 'Start typing to match your address',
    },
  ]

  return (
    <div className='registerForm'>
      <div className='registerForm__title'>
        <h4>Join our network</h4>
        <p>Free to join, no monthly fees</p>
      </div>
      <form method="post" onSubmit={handleSubmit} className='registerForm__form'>
        {inputs.map((input) => (
           <FormInput
            key={input.id}
            {...input}
            onChange={handleChange}
            value={formValues[input.name]}
            formErrors={formErrors[input.name]}
            icon={input.icon}
          />
        ))}
        <div className='registerForm__checkboxes'>
          <div className="registerForm__checkboxes-header">
            <div className='registerForm__checkboxes-title'>
              <FontAwesomeIcon className='icon' icon={faWrench} />
              <label>What services are you interested in?</label>
            </div>
            <span>Please select the services you’re interested in offering your customers</span>
          </div>
          <div className="registerForm__checkboxes-container">
            <div className={isChecked[0] ? 'registerForm__checkboxes-item -checked' : 'registerForm__checkboxes-item'}>
              <FormInput onChange={handleCheckboxChange} name='pay_later' label='PayLater' value={0} checked={isChecked[0]} type='checkbox'/>
              <span className="registerForm__checkboxes-item-checkmark">
                {isChecked[0] ? (
                  <FontAwesomeIcon icon={faCheck} />
                  ) : (
                  <FontAwesomeIcon icon={faPlus} />
                )}
              </span>
            </div>
            <div className={isChecked[1] ? 'registerForm__checkboxes-item -checked' : 'registerForm__checkboxes-item'}>
              <FormInput onChange={handleCheckboxChange} name='pay_now' label='PayNow' value={1} checked={isChecked[1]} type='checkbox'/>
              <span className="registerForm__checkboxes-item-checkmark">
                {isChecked[1] ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faPlus} />
                )}
              </span>
            </div>
          </div>
          <p className='registerForm__checkboxes-error'>{formErrors.checkbox}</p>
        </div>
        <button type="submit" className={isSubmit ? 'registerForm__submit-btn -loading' : 'registerForm__submit-btn'}>
          Register <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <div className='registerForm__login'>
          <span>Already registered?</span>
          <p>Login</p> 
        </div>
      </form>
    </div>
  );
}
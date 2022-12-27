import React, { useState, useEffect } from 'react';
import FormInput from '../../components/formInput';
import './index.scss';

export default function RegisterForm() {

  const initialValues = {
    name: '',
    company: '',
    phone: '',
    email: '',
    postcode: '',
    payLater: false,
    payNow: false,
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isChecked, setIsChecked] = useState([false, false]);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const newIsChecked = [...isChecked];
    newIsChecked[e.target.value] = e.target.checked;
    setIsChecked(newIsChecked);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
    // eslint-disable-next-line
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const rgxEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const rgxPhone = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/g;
    const rgxText = /[^A-Za-z0-9]{0,255}/g;
    const rgxPostcode = /[^A-Za-z0-9]{0,30}/g;

    if (!values.name) {
      errors.name = 'Name should only contain alphanumeric characters and shouldn\'t be longer than 255 characters.';
    }

    if (!values.company) {
      errors.company = 'Company name is required.'
    } else if (!rgxText.test(values.company)) {
      errors.company = 'Should only contain alphanumeric characters and shouldn\'t be longer than 255 characters.'
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!rgxEmail.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.phone) {
      errors.phone = 'Phone number is required.';
    } else if (!rgxPhone.test(values.phone)) {
      errors.phone = 'Not a valid 11 digit phone number';
    }

    if (!values.postcode) {
      errors.postcode = 'Postcode is required.';
    } else if (!rgxPostcode.test(values.postcode)) {
      errors.phone = 'Postcode can be max 30 characters!';
    }

    if (!isChecked.includes(true)) {
      errors.checkbox = 'Should select at least one service type!';
    }

    return errors;
  };

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      label: 'name',
    },
    {
      id: 2,
      name: 'company',
      type: 'text',
      label: 'Company',
    },
    {
      id: 3,
      name: 'phone',
      type: 'number',
      label: 'Mobile Phone Number',
    },
    {
      id: 4,
      name: 'email',
      type: 'text',
      label: 'Email Address',
    },
    {
      id: 5,
      name: 'postcode',
      type: 'text',
      label: 'Postcode',
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
          />
        ))}
        <div>
          <label>What services are you interested in?</label>
          <span>Please select the services you’re interested in offering your customers</span>
          <FormInput onChange={handleCheckboxChange} label='PayLater' value={0} checked={isChecked[0]} type='checkbox'/>
          <FormInput onChange={handleCheckboxChange} label='PayNow' value={1} checked={isChecked[1]} type='checkbox'/>
          <p>{formErrors.checkbox}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
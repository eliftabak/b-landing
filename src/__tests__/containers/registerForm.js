import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegisterForm from '../../containers/registerForm/registerForm';

describe('RegisterForm', () => {
  it('submits the form with valid data', () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>
    );
    const nameInput = getByLabelText('Name');
    const companyInput = getByLabelText('Company');
    const emailInput = getByLabelText('Email Address');
    const phoneInput = getByLabelText('Mobile Phone Number');
    const postcodeInput = getByLabelText('Postcode');
    const payLaterInput = getByLabelText('PayLater');
    const submitButton = getByText('Register');

    fireEvent.change(nameInput, { target: { value: 'Bumper' } });
    fireEvent.change(companyInput, { target: { value: 'the best company' } });
    fireEvent.change(emailInput, { target: { value: 'bumper@bumper.com' } });
    fireEvent.change(phoneInput, { target: { value: '12345678901' } });
    fireEvent.change(postcodeInput, { target: { value: '12345' } });
    fireEvent.click(payLaterInput);
    fireEvent.click(submitButton);
  });
});

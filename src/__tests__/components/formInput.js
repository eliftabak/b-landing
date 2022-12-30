import React from 'react';
import { render } from '@testing-library/react';
import FormInput from '../../components/formInput/formInput';

describe('FormInput', () => {
  it('displays the label and input field correctly', () => {
    const { getByLabelText } = render(
      <FormInput name="name" label="Name" value="" onChange={() => {}} />
    );
    const input = getByLabelText('Name');
    expect(input).toBeInTheDocument();
  });

  it('displays the error message when there is an error', () => {
    const { getByText } = render(
      <FormInput
        name="name"
        label="Name"
        value=""
        onChange={() => {}}
        formErrors='Name should only contain alphanumeric characters and should not be longer than 255 characters.'
      />
    );
    const errorMessage = getByText('Name should only contain alphanumeric characters and should not be longer than 255 characters.');
    expect(errorMessage).toBeInTheDocument();
  });
});

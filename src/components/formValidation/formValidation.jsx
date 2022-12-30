export function validate(values, isChecked) {
  const errors = {};
  const rgxName = /^[a-zA-Z0-9]{0,255}$/;
  const rgxEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const rgxPhone = /^\d{11}$/;
  const rgxText = /^[a-zA-Z0-9]{0,255}$/;
  const rgxPostcode = /^[a-zA-Z0-9]{0,30}$/;

  if (!values.name) {
    errors.name = 'Name is required.'
  } else if (!rgxName.test(values.name)) {
    errors.name = 'Name should only contain alphanumeric characters and shouldn\'t be longer than 255 characters.';
  }

  if (!values.company) {
    errors.company = 'Company name is required.'
  } else if (!rgxText.test(values.company)) {
    errors.company = 'Should only contain alphanumeric characters and shouldn\'t be longer than 255 characters.'
  }

  if (!values.email_address) {
    errors.email_address = "Email is required.";
  } else if (!rgxEmail.test(values.email_address)) {
    errors.email_address = "This is not a valid email format.";
  }

  if (!values.mobile_phone) {
    errors.mobile_phone = 'Phone number is required.';
  } else if (!rgxPhone.test(values.mobile_phone)) {
    errors.mobile_phone = 'Not a valid 11 digit phone number.';
  }

  if (!values.postcode) {
    errors.postcode = 'Postcode is required.';
  } else if (!rgxPostcode.test(values.postcode)) {
    errors.postcode = 'Should only contain alphanumeric characters and shouldn\'t be longer than 30 characters.';
  }

  if (!isChecked.includes(true)) {
    errors.checkbox = 'Should select at least one service type.';
  }

  return errors;
};

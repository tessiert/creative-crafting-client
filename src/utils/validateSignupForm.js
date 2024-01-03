export const validateSignupForm = (values) => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = 'Required';
  } else if (values.firstname.length < 2) {
    errors.firstname = 'Must be at least 2 characters.';
    // } else if (values.firstname.length > 20) {
    //   errors.firstname = 'Must be 20 characters or less';
  }

  if (!values.lastname) {
    errors.lastname = 'Required';
  } else if (values.lastname.length < 2) {
    errors.lastname = 'Must be at least 2 characters.';
    // } else if (values.lastname.length > 20) {
    //   errors.lastname = 'Must be 20 characters or less';
  }

  if (!values.userEmail) {
    errors.userEmail = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)) {
    errors.userEmail = 'Please enter a valid Email address.';
  }

  // if (!values.username) {
  //   errors.username = 'Required';
  // } else if (values.username.length < 5) {
  // errors.username = 'Must be at least 5 characters.';
  // } else if (values.username.length > 20) {
  //   errors.username = 'Must be 20 characters or less';
  // }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Must be at least 8 characters.';
  }

  return errors;
};

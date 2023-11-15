export const validateReviewForm = (values) => {
  const errors = {};

  if (values.author.length < 4) {
    errors.author = 'Must be at least 4 characters.';
  } else {
    if (values.author.length > 35) {
      errors.author = 'Must be 35 characters or less.';
    };
  };
  if (!values.reviewText) {
    errors.reviewText = 'Required';
  } else {
    if (values.reviewText.length > 500) {
      errors.reviewText = ' Must be 500 characters or less.';
    }
  };

  return errors;
};
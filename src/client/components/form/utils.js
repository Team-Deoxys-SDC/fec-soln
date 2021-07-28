export const REQUIRED_FIELD = "This field is required";
export const INVALID_EMAIL = 'Please enter a valid email';
export const REVIEW_LENGTH = 'Your review must be longer than 50 characters';

export function validate (
  formData,
  errors,
  setErrors,
  field,
  errorMessage,
  condition = (field) => { return !!field; },
) {
  if (condition(formData[field])) {
    delete errors[field];
    setErrors({ ...errors });
  } else {
    setErrors({ ...errors, [field]: errorMessage });
  }
}

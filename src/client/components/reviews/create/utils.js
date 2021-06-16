import { validate as validateEmail } from "email-validator";

const errorMessage = "You must enter the following";

export function validateReview ({
  email, name: nickname, body: reviewBody, summary: reviewSummary, characteristics
}, reviewMeta) {
  const errors = {};

  // Existence errors
  if (!email) { errors.email = errorMessage; }
  if (!nickname) { errors.nickname = errorMessage; }
  if (!reviewBody) { errors.reviewBody = errorMessage; }
  if (!reviewSummary) { errors.reviewSummary = errorMessage; }

  if (Object.keys(characteristics).length !== Object.keys(reviewMeta.characteristics).length) {
    errors.characteristics = errorMessage;
  }

  // Content errors
  if (email && !validateEmail(email)) { errors.email = 'Please enter a valid email'; }
  if (reviewBody && reviewBody.length < 50) { errors.reviewBody = 'Your review must be longer than 50 characters'; }

  return errors;
}


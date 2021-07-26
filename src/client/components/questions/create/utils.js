import { validate as validateEmail } from "email-validator";

const errorMessage = "You must enter the following";

export function validateQuestion ({ email, name, body }) {
  const errors = {};

  // Existence errors
  if (!email) { errors.email = errorMessage; }
  if (!name) { errors.name = errorMessage; }
  if (!body) { errors.body = errorMessage; }

  // Content errors
  if (email && !validateEmail(email)) { errors.email = 'Please enter a valid email'; }

  return errors;
}


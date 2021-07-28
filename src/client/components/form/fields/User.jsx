/* eslint-disable prefer-reflect */
import React, { useEffect } from 'react';
import { validate as validateEmail } from "email-validator";
import { validate, REQUIRED_FIELD, INVALID_EMAIL } from '../utils';

export default function User ({ errors, setErrors, formData, setFormData }) {
  const { name, email } = formData;

  useEffect(() => {
    validate(formData, errors, setErrors, 'name', REQUIRED_FIELD);
    validate(formData, errors, setErrors, 'email', REQUIRED_FIELD);
    validate(formData, errors, setErrors, 'email', INVALID_EMAIL, (field) => {
      return field && validateEmail(field);
    });
  }, [name, email]);

  return (
    <>
      <h3>Nickname*</h3>
      {errors.show && <small style={{ color: 'red' }}>{errors.name}</small>}
      <input
        placeholder="Example: jackson11!"
        value={name}
        onChange={(event) => { setFormData({ ...formData, name: event.target.value }); }}
      />
      <small style={{ marginTop: '0.3em' }}>For privacy reasons, do not use your full name or email address</small>

      <h3>Email*</h3>
      {errors.show && <small style={{ color: 'red' }}>{errors.email}</small>}
      <input
        placeholder="jackson11@email.com"
        value={email}
        onChange={(event) => { setFormData({ ...formData, email: event.target.value }); }}
      />
      <small style={{ marginTop: '0.3em' }}>For authentication reasons, you will not be emailed</small>
    </>
  );
}

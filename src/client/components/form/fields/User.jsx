import React, { useEffect } from 'react';
import { validate } from "email-validator";

export default function User ({ errors, setErrors, formData, setFormData }) {
  const { name, email } = formData;

  useEffect(() => {
    if (!name) {
      setErrors({ ...errors, name: "This field is required" });
      return;
    }

    if (!email) {
      setErrors({ ...errors, email: "This field is required" });
      return;
    }

    if (email && !validate(email)) {
      setErrors({ ...errors, email: 'Please enter a valid email' });
      return;
    }
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

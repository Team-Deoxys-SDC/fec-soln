import React from 'react';
import { eventSetter } from '../../../utils';

export default function User ({ errors, name, setName, email, setEmail }) {
  return (
    <>
      <h3>Nickname*</h3>
      <small style={{ color: 'red' }}>{errors.name}</small>
      <input placeholder="Example: jackson11!" value={name} onChange={eventSetter(setName)} />
      <small style={{ marginTop: '0.3em' }}>For privacy reasons, do not use your full name or email address</small>

      <h3>Email*</h3>
      <small style={{ color: 'red' }}>{errors.email}</small>
      <input placeholder="jackson11@email.com" value={email} onChange={eventSetter(setEmail)} />
      <small style={{ marginTop: '0.3em' }}>For authentication reasons, you will not be emailed</small>
    </>
  );
}
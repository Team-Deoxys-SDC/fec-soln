import React, { useEffect } from 'react';
import { REQUIRED_FIELD, REVIEW_LENGTH, validate } from '../utils';

export default function Review ({ errors, setErrors, formData, setFormData }) {
  const { summary, body } = formData;

  useEffect(() => {
    validate(formData, errors, setErrors, 'body', REQUIRED_FIELD);
    validate(formData, errors, setErrors, 'summary', REQUIRED_FIELD);
    validate(formData, errors, setErrors, 'body', REVIEW_LENGTH, (field) => {
      return field.length >= 50;
    });
  }, [body, summary]);

  return (
    <>
      <h3>Review Summary*</h3>
      {errors.show && <small style={{ color: 'red' }}>{errors.summary}</small>}
      <input
        placeholder="Please input a summary of your review"
        value={summary}
        onChange={(event) => setFormData({ ...formData, summary: event.target.value })}
      />

      <h3>Review Body*</h3>
      {errors.show && <small style={{ color: 'red' }}>{errors.body}</small>}
      <textarea
        value={body}
        placeholder="Please review the product"
        onChange={(event) => setFormData({ ...formData, body: event.target.value })}
      />
      {body.length < 50 && (
        <small style={{ marginTop: '0.3em' }}>Minimum required characters left: {50 - body.length}</small>
      )}
    </>
  );
}

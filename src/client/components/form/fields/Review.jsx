import React, { useEffect } from 'react';

export default function Review ({ errors, setErrors, formData, setFormData }) {
  const { summary, body } = formData;

  useEffect(() => {
    if (!body) {
      setErrors({ ...errors, body: "This field is required" });
      return;
    }

    if (!summary) {
      setErrors({ ...errors, summary: "This field is required" });
    }

    if (body.length < 50) {
      setErrors({ ...errors, body: 'Your review must be longer than 50 characters' });
      return;
    }
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

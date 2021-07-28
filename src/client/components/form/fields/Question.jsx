import React, { useEffect } from 'react';

export default function Question ({ errors, setErrors, formData, setFormData }) {
  const { body } = formData;

  useEffect(() => {
    if (body) return;

    setErrors({ ...errors, body: "This field is required" });
  }, [body]);

  return (
    <>
      <h3>Your Question*</h3>
      {errors.show && <small style={{ color: 'red' }}>{errors.body}</small>}
      <textarea
        style={{ width: '100%', height: '10%', fontSize: '1.25em' }}
        value={body}
        placeholder="What would you like to know?"
        onChange={(event) => setFormData({ ...formData, body: event.target.value })}
      />

      {Boolean(body.length) && (
        <small style={{ marginTop: '0.3em' }}>Characters remaining: {1000 - body.length}</small>
      )}
    </>
  );
}

import React from 'react';
import { eventSetter } from '../../../utils';

export default function Question ({ errors, question, setQuestion }) {
  return (
    <>
      <h3>Your Question*</h3>
      <small style={{ color: 'red' }}>{errors.question}</small>
      <textarea
        style={{ width: '100%', height: '10%', fontSize: '1.25em' }}
        value={question}
        placeholder="What would you like to know?"
        onChange={eventSetter(setQuestion)}
      />

      {Boolean(question.length) && (
        <small style={{ marginTop: '0.3em' }}>Characters remaining: {1000 - question.length}</small>
      )}
    </>
  );
}

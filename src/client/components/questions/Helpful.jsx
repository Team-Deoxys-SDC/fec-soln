import React from 'react';

export default function Helpful ({ question }) {
  return (
    <div>
      <small>Was this question helpful?</small>
      <small
        onClick={async () => {

        }}
        style={{ marginLeft: '1em', textDecoration: 'underline', cursor: 'pointer' }}
      >
        Yes
      </small>
      <small style={{ marginLeft: '0.3em' }}>({question.question_helpfulness})</small>
      <small style={{ marginLeft: '0.5em' }}>|</small>
      <small
        onClick={async () => {

        }}
        style={{ marginLeft: '1em', textDecoration: 'underline', cursor: 'pointer' }}
      >
        Add Answer
      </small>
    </div>
  );
}

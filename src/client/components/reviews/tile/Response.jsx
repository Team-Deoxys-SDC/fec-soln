import React from 'react';

export default function Response ({ review }) {
  return (
    review.response && (
      <div style={{ background: 'lightgray', padding: '1em', marginTop: '0.5em' }}>
        <strong>Response:</strong>
        <p style={{ marginTop: '1em' }}>{review.response}</p>
      </div>
    )
  );
}

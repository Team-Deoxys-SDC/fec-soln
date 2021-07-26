import React from 'react';

export default function Questions () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Questions & Answers</h1>
      <input
        placeholder="Have a question? Search for answers"
        style={{
          width: '90%',
          margin: 'auto',
          height: '3em',
          fontSize: '1em',
          textAlign: 'left'
        }}
      />

    </div>
  );
}

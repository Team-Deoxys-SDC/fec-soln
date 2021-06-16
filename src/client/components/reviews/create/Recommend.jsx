import React from 'react';

export default function Recommend ({ recommended, setRecommended }) {
  return (
    <>
      <h3>Do you recommend this product?*</h3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <input
          value
          type="radio"
          checked={recommended}
          onChange={() => setRecommended(true)}
        /> Yes
        <input
          style={{ marginLeft: '1em' }}
          type="radio"
          value={false}
          onChange={() => setRecommended(false)}
          checked={!recommended}
        /> No
      </div>
    </>
  );
}

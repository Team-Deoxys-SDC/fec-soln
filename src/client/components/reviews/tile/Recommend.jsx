import React from 'react';
import { FaCheck } from 'react-icons/fa';

export default function Recommend ({ review }) {
  return (
    review.recommend && (
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1em' }}>
        <FaCheck />
        <div style={{ marginLeft: '0.3em' }}>I recommend this product</div>
      </div>
    )
  );
}

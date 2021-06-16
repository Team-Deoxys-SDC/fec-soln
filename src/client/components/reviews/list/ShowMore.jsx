import React from 'react';

export default function ShowMore ({ displayCount, setDisplayCount, reviewCount }) {
  return (
    displayCount < reviewCount && (
      <button
        onClick={() => setDisplayCount(displayCount + 2)}
        style={{ marginRight: '1em', width: '30%', height: '30px' }}>
        More Reviews
      </button>
    )
  );
}

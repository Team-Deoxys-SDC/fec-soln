import React from 'react';

export default function ReviewButtons ({ setDisplayCount, displayCount, reviewCount, setShowModal }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {displayCount < reviewCount.length && (
        <button
          onClick={() => setDisplayCount(displayCount + 2)}
          style={{ marginRight: '1em', width: '30%', height: '30px' }}>
          More Reviews
        </button>
      )}

      <button
        onClick={() => setShowModal(true)}
        style={{ width: '30%', height: '30px' }}
      >
        Add a Review +
      </button>
    </div>
  );
}

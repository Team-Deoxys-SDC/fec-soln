import React from 'react';

import Summary from './Summary';
import ReviewList from './ReviewList';


export default function Reviews () {
  return (
    <div style={{ margin: '2%' }}>
      <h1>Ratings & Reviews</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Summary />
        <ReviewList />
      </div>
    </div>
  );
}

import React from 'react';

import Ratings from './ratings';
import ReviewList from './list';
import SplitScreen from '../layout/SplitScreen';

export default function Reviews () {
  return (
    <div>
      <h1>Ratings & Reviews</h1>
      <SplitScreen widths={[50, 50]}>
        <Ratings />
        <ReviewList />
      </SplitScreen>
    </div>
  );
}

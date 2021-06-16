import React, { useContext } from 'react';
import { AppContext } from '../../../contexts';
import { reviewsByRating } from '../../../utils';

export default function Breakdown () {
  const { reviews, reviewStarFilters, setReviewStarFilters } = useContext(AppContext);
  const ratingsCount = reviewsByRating(reviews);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {[...new Array(5).keys()].map(star => star + 1).reverse().map(star => (
        <div
          key={star}
          style={{ display: 'flex', flexDirection: 'row' }}
          onClick={() => {
            setReviewStarFilters({ ...reviewStarFilters, [star]: !reviewStarFilters[star] });
          }}
        >
          <small style={{ width: '10%', margin: 0, textDecoration: 'underline' }}>{star} stars</small>
          <progress style={{ width: '85%' }} value={ratingsCount[star] || 0} max={reviews.length} />
        </div>
      ))}
    </div>
  );
}

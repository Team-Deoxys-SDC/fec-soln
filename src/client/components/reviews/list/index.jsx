import React, { useContext, useEffect, useRef, useState } from 'react';


import { AppContext } from '../../../contexts';
import { flattenStarFilters } from '../../../utils';

import Heading from './Heading';
import ShowMore from './ShowMore';
import ReviewTile from '../tile';
import CreateReview from '../create';

export default function ReviewList () {
  const reviewList = useRef(null);
  const [displayCount, setDisplayCount] = useState(2);

  const { reviews, reviewStarFilters } = useContext(AppContext);

  // Handle rating filters
  const ratingFilters = new Set(flattenStarFilters(reviewStarFilters));

  // Filter reviews
  const filteredReviews = reviews.filter(review => !ratingFilters.size || ratingFilters.has(review.rating));

  // Scroll latest review into view
  useEffect(() => {
    reviewList.current.scrollTop = reviewList.current.scrollHeight;
  }, [displayCount]);

  return (
    <div>
      <Heading reviewCount={filteredReviews.length} />

      <div ref={reviewList} style={{ overflow: 'auto', height: '400px' }}>
        {filteredReviews
          .slice(0, displayCount)
          .map(review => <ReviewTile key={review.review_id} review={review} />)}
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <ShowMore
          reviewCount={filteredReviews.length}
          displayCount={displayCount}
          setDisplayCount={setDisplayCount}
        />

        <CreateReview />
      </div>
    </div>
  );
}

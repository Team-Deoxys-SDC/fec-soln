import React, { useContext, useEffect, useRef, useState } from 'react';

import ReviewItem from './ReviewItem';
import { AppContext } from '../../contexts';

import { flattenStarFilters } from '../../utils';
import CreateReview from './CreateReview';

export default function ReviewList () {
  const reviewList = useRef(null);
  const [displayCount, setDisplayCount] = useState(2);

  const { reviews, reviewsSortedBy, setReviewsSortedBy, reviewStarFilters } = useContext(AppContext);

  // Handle rating filters
  const ratingFilters = new Set(flattenStarFilters(reviewStarFilters));

  // Filter reviews
  const filteredReviews = reviews.filter(review => !ratingFilters.size || ratingFilters.has(review.rating));

  useEffect(() => {
    reviewList.current.scrollTop = reviewList.current.scrollHeight;
  }, [displayCount]);

  return (
    <div style={{ width: '65%' }}>
      <h4 style={{ margin: 0 }}>{filteredReviews.length} reviews, sorted by
        {' '}
        <select
          value={reviewsSortedBy}
          onChange={(event) => setReviewsSortedBy(event.target.value)}
        >
          <option value="relevant">relevant</option>
          <option value="newest">newest</option>
          <option value="helpful">helpful</option>
        </select>
      </h4>

      <div ref={reviewList} style={{ overflow: 'auto', height: '600px' }}>
        {filteredReviews.slice(0, displayCount).map(review => <ReviewItem key={review.review_id} review={review} />)}
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {displayCount < filteredReviews.length && (
          <button
            onClick={() => setDisplayCount(displayCount + 2)}
            style={{ marginRight: '1em', width: '30%', height: '30px' }}>
            More Reviews
          </button>
        )}

        <CreateReview />
      </div>

    </div>
  );
}

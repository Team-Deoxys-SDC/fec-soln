import React, { useContext, useState } from 'react';


import { AppContext } from '../../../contexts';
import { flattenStarFilters } from '../../../utils';

import ReviewTile from '../tile';
import CreateReview from '../create';
import ScrollableList from '../../layout/Scrollable';
import ReviewButtons from './Buttons';
import ReviewListHeading from './Heading';

export default function ReviewList () {
  const [showModal, setShowModal] = useState(2);
  const [displayCount, setDisplayCount] = useState(2);
  const { reviews, reviewStarFilters } = useContext(AppContext);

  // Handle rating filters
  const ratingFilters = new Set(flattenStarFilters(reviewStarFilters));

  // Filter reviews
  const filteredReviews = reviews.filter(review => !ratingFilters.size || ratingFilters.has(review.rating));

  return (
    <div>
      <ReviewListHeading reviewCount={filteredReviews.length} />

      <ScrollableList
        maxHeight="400px"
        list={filteredReviews.slice(0, displayCount)}
        tile={ReviewTile}
      />

      <ReviewButtons
        setShowModal={setShowModal}
        reviewCount={filteredReviews.length}
        displayCount={displayCount}
        setDisplayCount={setDisplayCount}
      />

      <CreateReview showModal={showModal} />
    </div>
  );
}

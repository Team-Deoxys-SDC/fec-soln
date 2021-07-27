import React, { useContext, useState } from 'react';

import { AppContext } from '../../../contexts';
import { flattenStarFilters } from '../../../utils';

import ReviewTile from '../tile';
import ScrollableList from '../../layout/Scrollable';
import ReviewButtons from './Buttons';
import ReviewListHeading from './Heading';
import CreateFormModal from '../../form';

import User from '../../form/fields/User';
import Photos from '../../form/fields/Photos';
import Review from '../../form/fields/Review';
import Overall from '../../form/fields/Overall';
import Recommend from '../../form/fields/Recommend';
import Characteristics from '../../form/fields/Characteristics';

export default function ReviewList () {
  const [showModal, setShowModal] = useState(2);
  const [displayCount, setDisplayCount] = useState(2);
  const { reviews, reviewStarFilters, product } = useContext(AppContext);

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

      <CreateFormModal
        title="Write your Review"
        subtitle={`... about the ${product.name}`}
        endpoint="/api/reviews"
        data={{
          body: '',
          name: '',
          email: '',
          rating: 3,
          photos: [],
          summary: '',
          recommend: true,
          characteristics: {},
          product_id: product.id
        }}
        showModal={showModal}
        onClick={() => setShowModal(false)}
        onSubmit={() => setShowModal(false)}
        fields={[Overall, Recommend, Characteristics, Review, Photos, User]}
      />
    </div>
  );
}

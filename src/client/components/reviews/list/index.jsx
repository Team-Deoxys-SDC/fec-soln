import React, { useContext, useState } from 'react';

import { AppContext } from '../../../contexts';
import { flattenStarFilters } from '../../../utils';

import ReviewTile from '../tile';
import ScrollableList from '../../layout/Scrollable';

import CreateFormModal from '../../form';
import User from '../../form/fields/User';
import Photos from '../../form/fields/Photos';
import Review from '../../form/fields/Review';
import Overall from '../../form/fields/Overall';
import Recommend from '../../form/fields/Recommend';
import Characteristics from '../../form/fields/Characteristics';
import Row from '../../layout/Row';

export default function ReviewList () {
  const [showModal, setShowModal] = useState(2);
  const [displayCount, setDisplayCount] = useState(2);
  const { reviews, reviewStarFilters, product, reviewsSortedBy, setReviewsSortedBy } = useContext(AppContext);

  // Handle rating filters
  const ratingFilters = new Set(flattenStarFilters(reviewStarFilters));

  // Filter reviews
  const filteredReviews = reviews.filter(review => !ratingFilters.size || ratingFilters.has(review.rating));

  return (
    <div>
      {/* Heading */}
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

      {/* Review List */}
      <ScrollableList style={{ maxHeight: '400px' }}>
        {filteredReviews.slice(0, displayCount).map(review => (
          <ReviewTile key={review.id} review={review} />
        ))}
      </ScrollableList>

      {/* Buttons */}
      <Row>
        {displayCount < filteredReviews.length && (
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
      </Row>

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

import React from 'react';
import moment from 'moment';
import Stars from 'react-star-ratings';

export default function Heading ({ review }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Stars
        rating={review.rating}
        starDimension="1em"
        starSpacing="0.1em"
      />
      <small>
        {review.reviewer_name}
        {' - '}
        {moment(review.date).format('MMMM DD, YYYY')}
      </small>
    </div>
  );
}

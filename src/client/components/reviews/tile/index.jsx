import React, { useContext } from 'react';
import Stars from 'react-star-ratings';
import { FaCheck } from 'react-icons/fa';
import moment from 'moment';

import Photos from '../../photos';
import Helpful from '../../layout/Helpful';
import { AppContext } from '../../../contexts';

export default function ReviewTile ({ review }) {
  const { refetch } = useContext(AppContext);

  return (
    <div style={{ marginTop: '2em' }}>
      {/* Heading */}
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

      {/* Body */}
      <h3>{review.summary}</h3>
      <p>{review.body}</p>

      {/* Recommend */}
      {review.recommend && (
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1em' }}>
          <FaCheck />
          <div style={{ marginLeft: '0.3em' }}>I recommend this product</div>
        </div>
      )}

      {/* Response */}
      {review.response && (
        <div style={{ background: 'lightgray', padding: '1em', marginTop: '0.5em' }}>
          <strong>Response:</strong>
          <p style={{ marginTop: '1em' }}>{review.response}</p>
        </div>
      )}

      {/* Photos */}
      <Photos photos={review.photos} />

      {/* Footing */}
      <Helpful
        resource={review}
        action="Report"
        onActionClick={async () => {
          await fetch(`/api/reviews/${review.review_id}/report`, {
            method: 'PUT'
          });
          refetch();
        }}
        onHelpfulClick={async () => {
          await fetch(`/api/reviews/${review.review_id}/helpful`, {
            method: 'PUT'
          });
          refetch();
        }}
      />
      <hr />
    </div >
  );
}

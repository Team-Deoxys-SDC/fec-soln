import React, { useContext } from 'react';
import { AppContext } from '../../contexts';
import { flattenStarFilters } from '../../utils';

export default function Filters () {
  const { reviewStarFilters, setReviewStarFilters } = useContext(AppContext);

  const flattenedStarFilters = flattenStarFilters(reviewStarFilters);

  return Boolean(flattenedStarFilters.length) && (
    <div style={{ padding: '1em', paddingLeft: 0, display: 'flex', flexDirection: 'row' }}>
      {flattenedStarFilters.map(star => (
        <button
          key={star}
          onClick={() => {
            setReviewStarFilters({ ...reviewStarFilters, [star]: false });
          }}
          style={{
            marginLeft: '0.3em',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '1em',
            height: '2em'
          }}
        >
          {star} stars
          {' '}
          <strong style={{ color: 'red' }}>x</strong>
        </button>
      ))}
    </div>
  );
}

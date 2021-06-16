import React, { useContext } from 'react';
import { AppContext } from '../../../contexts';
import { eventSetter } from '../../../utils';

export default function Heading ({ reviewCount }) {
  const { reviewsSortedBy, setReviewsSortedBy } = useContext(AppContext);

  return (
    <h4 style={{ margin: 0 }}>{reviewCount} reviews, sorted by
      {' '}
      <select
        value={reviewsSortedBy}
        onChange={eventSetter(setReviewsSortedBy)}
      >
        <option value="relevant">relevant</option>
        <option value="newest">newest</option>
        <option value="helpful">helpful</option>
      </select>
    </h4>
  );
}

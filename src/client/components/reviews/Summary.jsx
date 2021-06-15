import React, { useContext } from 'react';

import Styles from './Styles';
import Heading from './Heading';
import Filters from './Filters';
import Ratings from './Ratings';

import '../../style.css';

import { AppContext } from '../../contexts';
import { toPercentage } from '../../utils';


export default function Summary () {
  const { reviews } = useContext(AppContext);
  const percentRecommend = toPercentage(reviews.filter(review => review.recommend).length, reviews.length);

  return (
    <div style={{ width: '35%' }}>
      <Heading />

      {/* Recommenders */}
      <div style={{ marginTop: '0.3em', marginBottom: '0.3em' }}>
        <small>{percentRecommend} of reviewers recommend this product</small>
      </div>

      <Filters />
      <Ratings />
      <Styles />
    </div>
  );
}

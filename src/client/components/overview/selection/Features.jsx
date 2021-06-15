import React, { useContext } from 'react';
import Stars from 'react-star-ratings';

import Styles from './Styles';
import Selection from './Cart';
import { AppContext } from '../../../contexts';
import { averageRating, moneyFormatter } from '../../../utils';

export default function Features () {
  const { product, reviews, styles, selectedStyle } = useContext(AppContext);

  const style = styles[selectedStyle];

  return (
    <>
      {/* Stars and reviews */}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Stars
          rating={averageRating(reviews)}
          starDimension="1em"
          starSpacing="0.1em"
        />
        {reviews.length &&
          <div style={{ paddingLeft: '1em', textDecoration: 'underline' }}>
            Read all {reviews.length} reviews
          </div>
        }
      </div>

      <h3>{product.category}</h3>
      <h1>{product.name}</h1>

      <div style={{ display: 'flex' }}>
        <h5 style={{ textDecoration: style.sale_price && 'line-through' }}>
          {moneyFormatter.format(style.original_price)}
        </h5>

        {style.sale_price && <h5 style={{ marginLeft: '1em', color: 'red' }}>
          {moneyFormatter.format(style.sale_price)}
        </h5>}
      </div>
    </>
  );
}

import React, { useContext } from 'react';
import Stars from 'react-star-ratings';

import { AppContext } from '../../../contexts';
import { averageRating, moneyFormatter } from '../../../utils';
import Row from '../../layout/Row';

export default function Features () {
  const { product, reviews, styles, selectedStyle } = useContext(AppContext);

  const style = styles[selectedStyle];

  return (
    <>
      {/* Stars and reviews */}
      <Row>
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
      </Row>

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

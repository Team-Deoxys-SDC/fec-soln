import React, { useContext } from 'react';
import Stars from 'react-star-ratings';
import { AppContext } from '../../contexts';
import { averageRating } from '../../utils';

export default function Heading () {
  const { reviews } = useContext(AppContext);

  const average = averageRating(reviews);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h1 style={{ margin: '0', paddingRight: '0.5em' }}>{average}</h1>
      <Stars
        rating={average}
        starDimension="1em"
        starSpacing="0.1em"
      />
    </div>
  );
}

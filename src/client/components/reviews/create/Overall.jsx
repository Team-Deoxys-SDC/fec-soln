import React from 'react';
import Stars from 'react-star-ratings';
import { starDescriptions } from '../../../utils';

export default function Overall ({ stars, setStars }) {
  return (
    <>
      <h3>Overall Rating*</h3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Stars
          rating={stars}
          starDimension="1em"
          starSpacing="0.1em"
          changeRating={setStars}
        />
        <small style={{ marginLeft: '1em' }}>{starDescriptions[stars]}</small>
      </div>
    </>
  );
}

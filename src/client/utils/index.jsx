import React from 'react';

export const STOCK_IMAGE = 'https://ih1.redbubble.net/image.846665687.1283/flat,750x1000,075,f.jpg';

export function increment (index) {
  return index + 1;
}

export function decrement (index) {
  return index - 1;
}

export function extractFeatures (product) {
  return product.features.reduce((features, { feature, value }) => {
    return { ...features, [feature]: value };
  }, {});
}

export function flattenStarFilters (starFilters) {
  return Object
    .entries(starFilters)
    .filter(([_, selected]) => selected)
    .map(([star]) => Number(star))
    .reverse();
}

export function searchHit (text, query) {
  const lt = text.toLowerCase();
  const lq = query.toLowerCase();

  return lt === lq || lt.includes(lq);
}

// Highlight all occurences of query within text
export function highlight (text, query) {
  if (!query || query.length < 3) return text;

  return text
    .split(new RegExp(`(${query})`, 'gi'))
    .map((phrase, index) =>
      searchHit(phrase, query) ? <mark key={phrase + index}>{phrase}</mark> : phrase
    );
}

export async function get (endpoint) {
  const response = await fetch(endpoint, { cache: 'reload' });
  return response.json();
}

export function getRandomInteger (min = 0, max = 10000) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function toPercentage (numerator, denominator) {
  return ((numerator / denominator) * 100).toFixed(0) + '%';
}

export function reviewsByRating (reviews) {
  const ratings = {};

  reviews.forEach(review => {
    ratings[review.rating] = (ratings[review.rating] || 0) + 1;
  });

  return ratings;
}

export function averageRating (reviews) {
  if (!reviews.length) return 0;

  const totalRating = reviews.reduce(function (totalRating, { rating }) {
    if (Number(rating) < 1 || Number(rating) > 5) {
      return totalRating;
    }

    return totalRating + rating;
  }, 0);


  return Number((totalRating / reviews.length).toFixed(2));
}

export const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export const starDescriptions = {
  1: 'Poor',
  2: 'Fair',
  3: 'Average',
  4: 'Good',
  5: 'Great'
};

export const productCharacteristics = {
  Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
};

import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import { AppContext } from '../contexts';
import { get, getRandomInteger } from '../utils';

import Header from './layout/Header';

import Reviews from './reviews';
import Overview from './overview';
import RelatedProducts from './related';
import QuestionsAndAnswers from './qaa';

function App () {
  const { params: { product: id } } = useRouteMatch();

  // Product state
  const [styles, setStyles] = useState();
  const [product, setProduct] = useState();
  const [related, setRelated] = useState();
  const [selectedStyle, setSelectedStyle] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [thumbnailStart, setThumbnailStart] = useState(0);
  const [fullCarousel, setFullCarousel] = useState(false);

  // Product review state
  const [reviews, setReviews] = useState();
  const [reviewMeta, setReviewMeta] = useState();
  const [reviewsSortedBy, setReviewsSortedBy] = useState('relevant');
  const [reviewStarFilters, setReviewStarFilters] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false });

  // QA State
  const [questions, setQuestions] = useState();

  // User cookie state
  const [refetch, setRefetch] = useState();
  const [userToken] = useState(getRandomInteger());

  // We split into separate useEffects as the reviews endpoint requires a refetch on sort order change

  useEffect(() => get(`/api/products/${id}`).then(setProduct), []);
  useEffect(() => get(`/api/reviews/meta?product_id=${id}`).then(setReviewMeta), []);
  useEffect(() => get(`/api/products/${id}/styles`).then(styles => setStyles(styles.results)), []);
  useEffect(() => get(`/api/qa/questions?product_id=${id}&count=100`).then(setQuestions), [refetch]);

  useEffect(() => {
    get(`/api/products/${id}/related`)
      .then(relatedIds => Promise.all(
        relatedIds.map(related => get(`/api/products/${related}`))
      ))
      .then(setRelated);
  }, []);

  useEffect(() => {
    get(`/api/reviews?product_id=${id}&count=100000&sort=${reviewsSortedBy}`)
      .then(reviews => setReviews(reviews.results));
  }, [reviewsSortedBy, refetch]);

  if (!styles || !product || !reviewMeta || !reviews || !questions || !related) {
    return <div>Loading</div>;
  }

  return (
    <AppContext.Provider value={{
      userToken,
      styles, setStyles,
      reviews, setReviews,
      product, setProduct,
      related, setRelated,
      questions, setQuestions,
      reviewMeta, setReviewMeta,
      fullCarousel, setFullCarousel,
      selectedStyle, setSelectedStyle,
      selectedPhoto, setSelectedPhoto,
      thumbnailStart, setThumbnailStart,
      reviewsSortedBy, setReviewsSortedBy,
      reviewStarFilters, setReviewStarFilters,
      refetch: () => setRefetch(Math.random())
    }}>
      <div style={{ padding: '0 20%' }}>
        <Header />
        <Overview />
        <RelatedProducts />
        <QuestionsAndAnswers />
        <Reviews />
      </div>

    </AppContext.Provider>
  );
}

export default App;

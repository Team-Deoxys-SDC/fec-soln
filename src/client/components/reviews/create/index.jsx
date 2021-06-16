import React, { useContext, useRef, useState } from 'react';

import { validateReview } from './utils';
import { AppContext } from '../../../contexts';
import Characteristics from './Characteristics';

import User from './User';
import Photos from './Photos';
import Review from './Review';
import Overall from './Overall';
import Recommend from './Recommend';

export default function CreateReview () {
  const dialog = useRef(null);

  const { product, reviewMeta, refetch } = useContext(AppContext);

  const [errors, setErrors] = useState({});

  const [stars, setStars] = useState(3);
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [nickname, setNickname] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [currentPhoto, setCurrentPhoto] = useState('');
  const [recommended, setRecommended] = useState(true);
  const [reviewSummary, setReviewSummary] = useState('');
  const [characteristics, setCharacteristics] = useState({});

  return (
    <>
      <button
        onClick={() => dialog.current.showModal()}
        style={{ width: '30%', height: '30px' }}
      >
        Add a Review +
      </button>

      <dialog
        className="modal"
        style={{ width: '60%', height: '80%' }}
        onClick={() => dialog.current.close()}
        ref={dialog}
      >
        <h1>Write your Review</h1>
        <h3>... about the {product.name}</h3>

        <div
          onClick={(event) => event.stopPropagation()}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Overall stars={stars} setStars={setStars} />

          <Recommend
            recommended={recommended}
            setRecommended={setRecommended}
          />

          <Characteristics
            errors={errors}
            characteristics={characteristics}
            setCharacteristics={setCharacteristics}
          />

          <Review
            errors={errors}
            reviewBody={reviewBody}
            setReviewBody={setReviewBody}
            reviewSummary={reviewSummary}
            setReviewSummary={setReviewSummary}
          />

          <Photos
            photos={photos}
            setPhotos={setPhotos}
            currentPhoto={currentPhoto}
            setCurrentPhoto={setCurrentPhoto}
          />

          <User
            errors={errors}
            email={email}
            setEmail={setEmail}
            nickname={nickname}
            setNickname={setNickname}
          />

          <button
            onClick={async () => {
              const review = {
                product_id: product.id,
                rating: stars,
                summary: reviewSummary,
                body: reviewBody,
                recommend: recommended,
                name: nickname,
                email,
                photos,
                characteristics
              };

              const validation = validateReview(review, reviewMeta);

              if (Object.keys(validation).length) {
                setErrors(validation);
                return;
              }

              await fetch('/api/reviews', {
                method: 'POST',
                body: JSON.stringify(review),
                headers: { 'Content-Type': 'application/json' }
              });

              await refetch();

              dialog.current.close();
            }}
            style={{ marginTop: '1em' }}
          >
            Submit
          </button>
        </div>
      </dialog>
    </>
  );
}

import React, { useContext, useRef, useState } from 'react';

import { AppContext } from '../../../contexts';
import Characteristics from './Characteristics';

import Review from './Review';
import Overall from './Overall';
import Recommend from './Recommend';
import Photos from './Photos';
import User from './User';

export default function CreateReview () {
  const dialog = useRef(null);

  const { product } = useContext(AppContext);

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
          <Recommend recommended={recommended} setRecommended={setRecommended} />
          <Characteristics characteristics={characteristics} setCharacteristics={setCharacteristics} />

          <Review
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
            email={email}
            setEmail={setEmail}
            nickname={nickname}
            setNickname={setNickname}
          />

          <button style={{ marginTop: '1em' }}>Submit</button>
        </div>
      </dialog>
    </>
  );
}

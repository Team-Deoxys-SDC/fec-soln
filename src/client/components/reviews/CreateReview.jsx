import React, { useContext, useRef, useState } from 'react';
import Stars from 'react-star-ratings';
import { AppContext } from '../../contexts';
import { productCharacteristics, eventSetter, starDescriptions } from '../../utils';

export default function CreateReview () {
  const dialog = useRef(null);

  const [stars, setStars] = useState(3);
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [nickname, setNickname] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [currentPhoto, setCurrentPhoto] = useState('');
  const [recommended, setRecommended] = useState(true);
  const [reviewSummary, setReviewSummary] = useState('');
  const [selectedCharacteristics, setSelectedCharacteristics] = useState({});

  const { product, reviewMeta } = useContext(AppContext);

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
        style={{ width: '50%', height: '80%' }}
        onClick={() => dialog.current.close()}
        ref={dialog}
      >
        <h1>Write your Review</h1>
        <h3>... about the {product.name}</h3>
        <div onClick={(event) => event.stopPropagation()} style={{ display: 'flex', flexDirection: 'column' }}>
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

          <h3>Do you recommend this product?*</h3>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <input
              value
              type="radio"
              checked={recommended}
              onChange={() => setRecommended(true)}
            /> Yes
            <input
              style={{ marginLeft: '1em' }}
              type="radio"
              value={false}
              onChange={() => setRecommended(false)}
              checked={!recommended}
            /> No
          </div>

          <h3 style={{ marginBottom: 0 }}>Characteristics*</h3>
          <div style={{ paddingLeft: '2em', paddingRight: '2em', display: 'flex', flexDirection: 'column' }}>
            {Object.keys(reviewMeta.characteristics).map(characteristic => (
              <div key={characteristic}>
                <h5>{characteristic}</h5>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

                  {productCharacteristics[characteristic].map(label => (
                    <div
                      key={characteristic + label}
                      style={{ width: '7%', display: 'flex', flexDirection: 'column' }}
                    >
                      <small>{label}</small>
                      <input
                        value={label}
                        type="radio"
                        checked={selectedCharacteristics[characteristic] === label}
                        onChange={() => {
                          setSelectedCharacteristics({
                            ...selectedCharacteristics,
                            [characteristic]: label
                          });
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3>Review Summary*</h3>
          <input
            placeholder="Please input a summary of your review"
            value={reviewSummary}
            onChange={(event) => setReviewSummary(event.target.value)}
          />

          <h3>Review Body*</h3>
          <textarea
            value={reviewBody}
            placeholder="Please review the product"
            onChange={(event) => setReviewBody(event.target.value)}
          />
          {reviewBody.length < 50 && (
            <small style={{ marginTop: '0.3em' }}>Minimum required characters left: {50 - reviewBody.length}</small>
          )}

          <h3>Upload Photos</h3>
          {Boolean(photos.length) && (
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '1em' }}>
              {photos.map(photo => (
                <img style={{ width: '100px', height: '100px', marginLeft: '0.5em' }} src={photo} />
              ))}
            </div>
          )}

          {photos.length < 5 && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                size="30"
                type="url"
                pattern="https://.*"
                placeholder="https://example-image.com"
                value={currentPhoto}
                onChange={(event) => { setCurrentPhoto(event.target.value); }}
              />
              <button
                style={{ marginTop: '1em', width: '20%' }}
                onClick={() => {
                  setPhotos(photos.concat(currentPhoto));
                  setCurrentPhoto('');
                }}>
                Add Photo
              </button>
            </div>
          )}

          <h3>Nickname*</h3>
          <input placeholder="Example: jackson11!" value={nickname} onChange={eventSetter(setNickname)} />
          <small style={{ marginTop: '0.3em' }}>For privacy reasons, do not use your full name or email address</small>

          <h3>Email*</h3>
          <input placeholder="jackson11@email.com" value={email} onChange={eventSetter(setEmail)} />
          <small style={{ marginTop: '0.3em' }}>For authentication reasons, you will not be emailed</small>

          <button style={{ marginTop: '1em' }}>Submit</button>
        </div>
      </dialog>
    </>
  );
}

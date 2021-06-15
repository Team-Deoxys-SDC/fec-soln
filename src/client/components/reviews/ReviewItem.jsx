import React, { useContext, useRef, useState } from 'react';
import moment from 'moment';
import Stars from 'react-star-ratings';
import { FaCheck } from 'react-icons/fa';
import '../../style.css';
import { AppContext } from '../../contexts';

export default function Review ({ review }) {
  const dialog = useRef(null);
  const { refetch } = useContext(AppContext);

  const [imageUrl, setImageUrl] = useState('');
  const [imageDims, setImageDims] = useState({});

  const [modalOrientation, imageOrientation] = imageDims.width > imageDims.height ?
    [{ width: '70%' }, { maxWidth: '100%', height: 'auto' }] :
    [{ height: '70%' }, { maxHeight: '100%', width: 'auto' }];


  return (
    <div style={{ marginTop: '2em' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Stars
          rating={review.rating}
          starDimension="1em"
          starSpacing="0.1em"
        />
        <small>
          {review.reviewer_name}
          {' - '}
          {moment(review.date).format('MMMM DD, YYYY')}
        </small>
      </div>

      <h3>{review.summary}</h3>
      <p>{review.body}</p>

      {review.recommend && (
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1em' }}>
          <FaCheck />
          <div style={{ marginLeft: '0.3em' }}>I recommend this product</div>
        </div>
      )}

      {review.response && (
        <div style={{ background: 'lightgray', padding: '1em', marginTop: '0.5em' }}>
          <strong>Response:</strong>
          <p style={{ marginTop: '1em' }}>{review.response}</p>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {review.photos.map(photo => (
          <img
            key={photo.id}
            src={photo.url}
            style={{ padding: '1em', width: '100px', height: '100px' }}
            onClick={(event) => {
              setImageUrl(photo.url);

              setImageDims({
                width: event.target.naturalWidth,
                height: event.target.naturalHeight
              });

              dialog.current.showModal();
            }}
          />
        ))}
      </div>

      <dialog
        ref={dialog}
        onClick={() => dialog.current.close()}
        style={modalOrientation}
        className="modal"
      >
        <img src={imageUrl} style={imageOrientation} />
      </dialog>

      <div style={{ marginTop: '1em', display: 'flex', flexDirection: 'row' }}>
        <small>Helpful?</small>
        <small
          onClick={async () => {
            await fetch(`/api/reviews/${review.review_id}/helpful`, { method: 'PUT' });
            refetch();
          }}
          style={{ marginLeft: '1em', textDecoration: 'underline', cursor: 'pointer' }}
        >
          Yes
        </small>
        <small style={{ marginLeft: '0.3em' }}>({review.helpfulness})</small>
        <small style={{ marginLeft: '0.5em' }}>|</small>
        <small
          onClick={async () => {
            await fetch(`/api/reviews/${review.review_id}/report`, { method: 'PUT' });
            refetch();
          }}
          style={{ marginLeft: '1em', textDecoration: 'underline', cursor: 'pointer' }}
        >
          Report
        </small>
      </div>

      <hr />
    </div >
  );
}

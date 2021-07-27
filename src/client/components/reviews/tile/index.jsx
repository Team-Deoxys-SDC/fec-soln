import React, { useRef, useState } from 'react';

import Heading from './Heading';
import Response from './Response';
import Recommend from './Recommend';

import '../../../style.css';
import Photos from './Photos';
import Footing from './Footing';

export default function ReviewTile ({ review }) {
  const dialog = useRef(null);

  return (
    <div style={{ marginTop: '2em' }}>
      <Heading review={review} />

      <h3>{review.summary}</h3>
      <p>{review.body}</p>

      <Recommend review={review} />
      <Response review={review} />

      <Photos
        review={review}
        dialog={dialog}
        setImageUrl={setImageUrl}
        setImageDims={setImageDims}
      />

      <dialog
        ref={dialog}
        onClick={() => dialog.current.close()}
        style={modalOrientation}
        className="modal"
      >
        <img src={imageUrl} style={imageOrientation} />
      </dialog>

      <Footing review={review} />

      <hr />

    </div >
  );
}

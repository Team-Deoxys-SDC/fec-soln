import React, { useState } from 'react';
import PhotoModal from './Modal';

export default function Photos ({ photos }) {
  const [dims, setDims] = useState({});
  const [image, setImage] = useState('');
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {photos.map(photo => (
          <img
            key={photo.id}
            src={photo.url}
            style={{ padding: '1em', width: '100px', height: '100px' }}
            onClick={(event) => {
              setImage(photo.url);

              setDims({
                width: event.target.naturalWidth,
                height: event.target.naturalHeight
              });

              setShowModal(true);
            }}
          />
        ))}
      </div>

      <PhotoModal
        dims={dims}
        image={image}
        showModal={showModal}
        onClick={() => setShowModal(false)}
      />
    </>
  );
}

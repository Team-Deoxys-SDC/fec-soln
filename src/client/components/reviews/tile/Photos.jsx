import React from 'react';

export default function Photos ({ review, dialog, setImageUrl, setImageDims }) {
  return (
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
  );
}

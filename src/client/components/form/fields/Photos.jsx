import React, { useState } from 'react';
import { eventSetter } from '../../../utils';

export default function Photos ({ formData, setFormData }) {
  const { photos } = formData;
  const [currentPhoto, setCurrentPhoto] = useState('');

  return (
    <>
      <h3>Upload Photos</h3>
      {Boolean(photos.length) && (
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '1em' }}>
          {photos.map((photo, index) => (
            <img
              key={photo + index}
              style={{ width: '100px', height: '100px', marginLeft: '0.5em' }}
              src={photo}
            />
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
            onChange={eventSetter(setCurrentPhoto)}
          />
          <button
            style={{ marginTop: '1em', width: '20%' }}
            onClick={() => {
              if (!currentPhoto) {
                return;
              }

              setFormData({ ...formData, photos: photos.concat(currentPhoto) });
              setCurrentPhoto('');
            }}>
            Add Photo
          </button>
        </div>
      )}
    </>
  );
}

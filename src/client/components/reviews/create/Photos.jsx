import React from 'react';
import { eventSetter } from '../../../utils';

export default function Photos ({ photos, setPhotos, currentPhoto, setCurrentPhoto }) {
  return (
    <>
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
            onChange={eventSetter(setCurrentPhoto)}
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
    </>
  );
}

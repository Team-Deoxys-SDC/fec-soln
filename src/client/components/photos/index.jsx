import React, { useState } from 'react';

export default function PhotosModal () {
  const [imageUrl, setImageUrl] = useState('');
  const [imageDims, setImageDims] = useState({});

  const [modalOrientation, imageOrientation] = imageDims.width > imageDims.height ?
    [{ width: '70%' }, { maxWidth: '100%', height: 'auto' }] :
    [{ height: '70%' }, { maxHeight: '100%', width: 'auto' }];

  return (
    <dialog
      ref={dialog}
      onClick={() => dialog.current.close()}
      style={modalOrientation}
      className="modal"
    >
      <img src={imageUrl} style={imageOrientation} />
    </dialog>

  );
}

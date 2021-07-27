import React, { useEffect, useRef } from 'react';


export default function Modal ({ style = {}, children, showModal, onClick }) {
  const modal = useRef(null);

  useEffect(() => {
    if (!modal.current) return;

    if (showModal) modal.current.showModal();
    else modal.current.close();
  }, [showModal]);

  return (
    <dialog
      className="modal"
      style={{ width: '60%', height: '80%', ...style }}
      onClick={onClick}
      ref={modal}
    >
      {children}
    </dialog>
  );
}

import React from 'react';
import Modal from '../../layout/Modal';

export default function CreateQuestionModal ({ showModal, onClick, children }) {
  return (
    <Modal
      showModal={showModal}
      onClick={onClick}
    >
      <div>In a modal</div>
    </Modal>
  );
}

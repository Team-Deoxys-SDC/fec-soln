import React, { useContext, useState } from 'react';
import { AppContext } from '../../../contexts';

import User from './User';
import Question from './Question';
import Modal from '../../layout/Modal';
import { validateQuestion } from './utils';

export default function CreateQuestionModal ({ showModal, onClick, onSubmit }) {
  const { product, refetch } = useContext(AppContext);

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  return (
    <Modal
      showModal={showModal}
      onClick={onClick}
    >
      <div
        style={{ display: 'flex', flexDirection: 'column' }}
        onClick={(event) => { event.stopPropagation(); }}
      >
        <h1>Ask your Question</h1>
        <h3>... about the {product.name}</h3>

        <Question
          errors={errors}
          question={body}
          setQuestion={setBody}
        />

        <User
          errors={errors}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
        />

        <button
          onClick={async () => {
            const question = {
              product_id: product.id,
              body,
              name,
              email
            };

            const validation = validateQuestion(question);

            if (Object.keys(validation).length) {
              setErrors(validation);
              return;
            }

            await fetch('/api/qa/questions', {
              method: 'POST',
              body: JSON.stringify(question),
              headers: { 'Content-Type': 'application/json' }
            });

            await refetch();

            onSubmit();
          }}
          style={{ marginTop: '1em' }}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
}

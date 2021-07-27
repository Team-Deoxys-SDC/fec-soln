import React, { useContext, useState } from 'react';

import Modal from '../layout/Modal';
import { validate } from './utils';
import { AppContext } from '../../../contexts';

export default function CreateFormModal ({
  showModal, onClick, onSubmit, title, subtitle, fields, endpoint, state, setState
}) {
  const { refetch } = useContext(AppContext);
  const [errors, setErrors] = useState({});

  return (
    <Modal showModal={showModal} onClick={onClick}>
      <div
        onClick={(event) => event.stopPropagation()}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <h1>{title}</h1>
        <h3>{subtitle}</h3>

        {fields.map((Field, index) => (
          <Field key={index} errors={errors} state={state} setState={setState} />
        ))}

        <button
          onClick={async () => {
            const validation = validate(state);

            if (Object.keys(validation).length) {
              setErrors(validation);
              return;
            }

            await fetch(endpoint, {
              method: 'POST',
              body: JSON.stringify(state),
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

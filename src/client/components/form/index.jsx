import React, { useContext, useState } from 'react';

import Modal from '../layout/Modal';
import { validateResource } from './utils';
import { AppContext } from '../../../contexts';

export default function CreateModal ({
  showModal, onClick, onSubmit, title, subtitle, children, endpoint
}) {
  const { product, refetch } = useContext(AppContext);

  const [state, setState] = useState({});
  const [errors, setErrors] = useState({});

  return (
    <Modal>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>

      <div
        onClick={(event) => event.stopPropagation()}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {children({ state, setState, errors, setErrors })}

        <button
          onClick={async () => {
            const resource = { product_id: product.id, state };

            const validation = validateResource(resource);

            if (Object.keys(validation).length) {
              setErrors(validation);
              return;
            }

            await fetch(endpoint, {
              method: 'POST',
              body: JSON.stringify(resource),
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

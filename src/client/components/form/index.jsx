import React, { useContext, useState } from 'react';

import Modal from '../layout/Modal';
import { AppContext } from '../../contexts';
import Column from '../layout/Column';

export default function CreateFormModal ({
  showModal, onClick, onSubmit, title, subtitle, fields, endpoint, data
}) {
  const { refetch, product } = useContext(AppContext);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ ...data, product_id: product.id });

  return (
    <Modal showModal={showModal} onClick={onClick}>
      <Column onClick={(event) => event.stopPropagation()}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>

        {fields.map((Field, index) => (
          <Field key={index} errors={errors} formData={formData} setState={setFormData} />
        ))}

        <button
          onClick={async () => {
            if (Object.keys(errors).length) {
              setErrors({ ...errors, show: true });
              return;
            }

            await fetch(endpoint, {
              method: 'POST',
              body: JSON.stringify(formData),
              headers: { 'Content-Type': 'application/json' }
            });

            await refetch();

            onSubmit();
          }}
          style={{ marginTop: '1em' }}
        >
          Submit
        </button>
      </Column>
    </Modal>
  );
}

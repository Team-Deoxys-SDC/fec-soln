import React, { useContext, useState } from 'react';
import { AppContext } from '../../../contexts';

import CreateFormModal from '../../form';
import User from '../../form/fields/User';
import Answer from '../../form/fields/Answer';
import Photos from '../../form/fields/Photos';

export default function Helpful ({ question }) {
  const [showModal, setShowModal] = useState(false);
  const { product } = useContext(AppContext);

  return (
    <div>
      <small>Was this question helpful?</small>
      <small
        onClick={async () => {

        }}
        style={{ marginLeft: '1em', textDecoration: 'underline', cursor: 'pointer' }}
      >
        Yes
      </small>
      <small style={{ marginLeft: '0.3em' }}>({question.question_helpfulness})</small>
      <small style={{ marginLeft: '0.5em' }}>|</small>
      <small
        onClick={async () => {

        }}
        style={{ marginLeft: '1em', textDecoration: 'underline', cursor: 'pointer' }}
      >
        Add Answer
      </small>

      <CreateFormModal
        title="Submit Your Answer"
        subtitle={`${product.name}: ${question.body}`}
        data={{ name: '', email: '', body: '', photos: [] }}
        endpoint={`/qa/questions/${question.question_id}/answers`}
        fields={[Answer, User, Photos]}
        showModal={showModal}
        onClick={() => { setShowModal(false); }}
        onSubmit={() => { setShowModal(false); }}
      />
    </div>
  );
}

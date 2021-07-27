import React, { useContext, useState } from 'react';
import { AppContext } from '../../../contexts';

import AnswerList from '../answer/list';
import Helpful from '../../layout/Helpful';

import User from '../../form/fields/User';
import Answer from '../../form/fields/Answer';
import Photos from '../../form/fields/Photos';
import CreateFormModal from '../../form';


export default function QuestionTile ({ question }) {
  const answers = Object.values(question.answers);
  const [showModal, setShowModal] = useState(false);
  const { product } = useContext(AppContext);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '1em' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <h3 style={{ margin: 0 }}>Q: {question.question_body}</h3>

        <Helpful
          value={question.question_helpfulness}
          onHelpfulClick={async () => { }}
          onActionClick={async () => { setShowModal(true); }}
          action="Add Answer"
        />
      </div>

      {/* Create Question */}
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

      {/* Answer List */}
      <AnswerList answers={answers} />
    </div>
  );
}

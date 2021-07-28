import React, { useContext, useState } from 'react';

import QuestionTile from '..';
import { AppContext } from '../../../../contexts';

import Row from '../../../layout/Row';
import ScrollableList from '../../../layout/ScrollableList';

import User from '../../../form/fields/User';
import Question from '../../../form/fields/Question';
import CreateFormModal from '../../../form';

export default function QuestionList ({ questions }) {
  const { product } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [displayCount, setDisplayCount] = useState(4);

  return (
    <div>
      {/* Question List */}
      <ScrollableList style={{ maxHeight: '400px' }}>
        {questions.slice(0, displayCount).map(question => (
          <QuestionTile key={question.question_id} question={question} />
        ))}
      </ScrollableList>

      {/* Buttons */}
      <Row style={{ padding: '2em' }}>
        {questions.length > 2 && (
          <button onClick={() => setDisplayCount(displayCount + 2)}>
            More Answered Questions
          </button>
        )}
        <button
          style={{ marginLeft: '1em', height: '30px' }}
          onClick={() => setShowModal(true)}
        >
          Add a Question
        </button>
      </Row>

      {/* Add a Question */}
      <CreateFormModal
        title="Ask Your Question"
        subtitle={`.. about the ${product.name}`}
        endpoint="/qa/questions"
        showModal={showModal}
        onClick={() => setShowModal(false)}
        onSubmit={() => setShowModal(false)}
        fields={[Question, User]}
        data={{ body: '', email: '', name: '' }}
      />
    </div>
  );
}

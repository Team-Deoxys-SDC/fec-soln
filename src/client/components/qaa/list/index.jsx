import React, { useContext, useState } from 'react';

import CreateFormModal from '../form';
import QuestionTile from './tile/Question';
import { AppContext } from '../../contexts';

import User from '../form/fields/User';
import Question from '../form/fields/Question';
import ScrollableList from '../../layout/Scrollable';

export default function QuestionsAndAnswers ({ questions }) {
  const { product } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [displayCount, setDisplayCount] = useState(4);

  return (
    <>
      {/* Question List */}
      <ScrollableList>
        {questions.slice(0, displayCount).map(question => (
          <QuestionTile key={question.question_id} question={question} />
        ))}
      </ScrollableList>

      {/* Buttons */}
      <div style={{ display: 'flex', flexDirection: 'row', padding: '2em' }}>
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
      </div>

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
    </>
  );
}

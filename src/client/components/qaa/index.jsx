import React, { useContext, useState } from 'react';

import CreateFormModal from '../form';
import QuestionTile from './tile/Question';
import { AppContext } from '../../contexts';

import User from '../form/fields/User';
import Question from '../form/fields/Question';


export default function Questions () {
  const { questions, product } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [displayCount, setDisplayCount] = useState(4);

  return (
    <>
      <h1>Questions & Answers</h1>

      {/* Search Bar */}
      <input
        placeholder="Have a question? Search for answers"
        style={{
          width: '100%',
          height: '3em',
          fontSize: '1em'
        }}
      />

      {/* Question List */}
      <div style={{ display: 'flex', flexDirection: 'column', overflow: 'auto', maxHeight: '600px' }}>
        {questions.results.slice(0, displayCount).map(question => (
          <QuestionTile key={question.question_id} question={question} />
        ))}
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', flexDirection: 'row', padding: '2em' }}>
        {questions.results.length > 2 && (
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

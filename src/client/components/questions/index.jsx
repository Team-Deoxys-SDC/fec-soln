import React, { useContext, useState } from 'react';

import QuestionTile from './tile/Question';
import { AppContext } from '../../contexts';

export default function Questions () {
  const { questions } = useContext(AppContext);
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
        {questions.results.slice(0, displayCount).map(question => (console.log(question) ||
          <QuestionTile key={question.question_id} question={question} />
        ))}
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', flexDirection: 'row', padding: '2em' }} >
        <button>More Answered Questions</button>
        <button style={{ marginLeft: '1em', height: '30px' }}>Add a Question</button>
      </div>
    </>
  );
}

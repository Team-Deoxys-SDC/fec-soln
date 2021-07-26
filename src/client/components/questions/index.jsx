import React, { useContext } from 'react';

import QuestionTile from './tile/Question';
import { AppContext } from '../../contexts';

export default function Questions () {
  const { questions } = useContext(AppContext);


  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Questions & Answers</h1>
      <input
        placeholder="Have a question? Search for answers"
        style={{
          width: '100%',
          height: '3em',
          fontSize: '1em'
        }}
      />

      {questions.results.map(question => (console.log(question) ||
        <QuestionTile key={question.question_id} question={question} />
      ))}

    </div>
  );
}

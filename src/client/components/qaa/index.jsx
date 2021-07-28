import React, { useContext } from 'react';

import QuestionList from './question/list';
import { AppContext } from '../../contexts';

export default function QuestionsAndAnswers () {
  const { questions } = useContext(AppContext);

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
      <QuestionList questions={questions} />
    </>
  );
}

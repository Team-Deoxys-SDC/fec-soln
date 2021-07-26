import React from 'react';
import Helpful from '../Helpful';
import AnswerTile from './Answer';

export default function QuestionTile ({ question }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '1em' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <h3 style={{ margin: 0 }}>Q: {question.question_body}</h3>
        <Helpful question={question} />
      </div>

      {Object.values(question.answers).map(answer => (
        <AnswerTile answer={answer} />
      ))}

    </div>
  );
}

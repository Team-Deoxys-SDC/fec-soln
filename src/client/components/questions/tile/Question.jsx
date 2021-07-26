import React, { useState } from 'react';
import Helpful from '../Helpful';
import AnswerTile from './Answer';

export default function QuestionTile ({ question }) {
  const answers = Object.values(question.answers);
  const [displayCount, setDisplayCount] = useState(2);

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

      <div style={{ overflow: 'auto', maxHeight: '400px' }}>
        {answers.slice(0, displayCount).map(answer => (
          <AnswerTile key={answer.id} answer={answer} />
        ))}
      </div>

      {answers.length > 2 && (
        <small
          onClick={() => setDisplayCount(displayCount === answers.length ? 2 : answers.length)}
          style={{ margin: '1em 0 0 1.5em', cursor: 'pointer' }}
        >
          <strong>{displayCount === answers.length ? 'HIDE' : 'SHOW MORE'} ANSWERS</strong>
        </small>
      )}
    </div>
  );
}

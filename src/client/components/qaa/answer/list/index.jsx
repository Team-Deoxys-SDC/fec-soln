import React, { useState } from 'react';

import Answer from '..';
import ScrollableList from '../../../layout/ScrollableList';

export default function AnswerList ({ answers }) {
  const [displayCount, setDisplayCount] = useState(2);

  return (
    <>
      <ScrollableList style={{ maxHeight: '400px' }}>
        {answers.slice(0, displayCount).map(answer => (
          <Answer key={answer.id} answer={answer} />
        ))}
      </ScrollableList>

      {answers.length > 2 && (
        <small
          onClick={() => setDisplayCount(displayCount === answers.length ? 2 : answers.length)}
          style={{ margin: '1em 0 0 1.5em', cursor: 'pointer' }}
        >
          <strong>{displayCount === answers.length ? 'HIDE' : 'SHOW MORE'} ANSWERS</strong>
        </small>
      )}
    </>

  );
}

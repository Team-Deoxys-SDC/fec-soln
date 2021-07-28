import moment from 'moment';
import React from 'react';

import Photos from '../../photos';
import Row from '../../layout/Row';
import Column from '../../layout/Column';

export default function AnswerTile ({ answer }) {
  return (
    <Column style={{ marginTop: '0.25em' }}>
      <Row>
        <strong>A: </strong>
        <div style={{ marginLeft: '0.2em' }}>{answer.body}</div>
      </Row>

      {/* Photos */}
      <Photos photos={answer.photos} />

      {/* Footer */}
      <small style={{ margin: '0.2em 0 0 1.5em' }}>
        by {answer.answerer_name}, {moment(answer.date).format('MMMM DD, YYYY')}
      </small>
    </Column>
  );
}

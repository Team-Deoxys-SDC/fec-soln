import moment from 'moment';
import React from 'react';
import Column from '../../layout/Column';
import Row from '../../layout/Row';

export default function AnswerTile ({ answer }) {
  return (
    <Column style={{ marginTop: '0.25em' }}>
      <Row>
        <strong>A: </strong>
        <div style={{ marginLeft: '0.2em' }}>{answer.body}</div>
      </Row>

      {/* Photos */}
      {answer.photos.map(photo => (
        <img
          key={photo}
          src={photo}
          style={{
            width: '100px',
            height: '100px',
            marginLeft: '1.5em',
            padding: '1em 0'
          }}
        />
      ))}

      {/* Footer */}
      <small style={{ margin: '0.2em 0 0 1.5em' }}>
        by {answer.answerer_name}, {moment(answer.date).format('MMMM DD, YYYY')}
      </small>
    </Column>
  );
}

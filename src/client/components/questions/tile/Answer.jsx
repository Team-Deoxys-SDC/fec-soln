import moment from 'moment';
import React from 'react';

export default function AnswerTile ({ answer }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '1em', paddingLeft: '1em' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <strong>A: </strong>
        <text style={{ marginLeft: '0.2em' }}>{answer.body}</text>
      </div>

      {/* Photos */}
      {answer.photos.map(photo => (
        <img
          key={photo}
          style={{
            width: '100px',
            height: '100px',
            marginLeft: '1.5em',
            padding: '1em 0'
          }} src={photo}
        />
      ))}

      {/* Footer */}
      <small style={{ margin: '0.2em 0 0 1.5em' }}>
        by {answer.answerer_name}, {moment(answer.date).format('MMMM DD, YYYY')}
      </small>
    </div>
  );
}

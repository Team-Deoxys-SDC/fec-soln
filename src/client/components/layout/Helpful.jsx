import React from 'react';
import Row from './Row';

export default function Helpful ({ resource, onHelpfulClick, onActionClick, action }) {
  return (
    <Row style={{ marginTop: '1em' }}>
      <small>Helpful?</small>
      <small
        onClick={onHelpfulClick}
        style={{ marginLeft: '1em', textDecoration: 'underline', cursor: 'pointer' }}
      >
        Yes
      </small>
      <small style={{ marginLeft: '0.3em' }}>({resource.helpfulness})</small>
      <small style={{ marginLeft: '0.5em' }}>|</small>
      <small
        onClick={onActionClick}
        style={{ marginLeft: '1em', textDecoration: 'underline', cursor: 'pointer' }}
      >
        {action}
      </small>
    </Row>
  );
}

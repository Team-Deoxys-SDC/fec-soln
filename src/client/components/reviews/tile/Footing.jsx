import React, { useContext } from 'react';
import { AppContext } from '../../../contexts';

export default function Footing ({ review }) {
  const { refetch } = useContext(AppContext);

  return (
    <div style={{ marginTop: '1em', display: 'flex', flexDirection: 'row' }}>
      <small>Helpful?</small>
      <small
        onClick={async () => {
          await fetch(`/api/reviews/${review.review_id}/helpful`, { method: 'PUT' });
          refetch();
        }}
        style={{ marginLeft: '1em', textDecoration: 'underline', cursor: 'pointer' }}
      >
        Yes
      </small>
      <small style={{ marginLeft: '0.3em' }}>({review.helpfulness})</small>
      <small style={{ marginLeft: '0.5em' }}>|</small>
      <small
        onClick={async () => {
          await fetch(`/api/reviews/${review.review_id}/report`, { method: 'PUT' });
          refetch();
        }}
        style={{ marginLeft: '1em', textDecoration: 'underline', cursor: 'pointer' }}
      >
        Report
      </small>

      <hr />
    </div>
  );
}

import React from 'react';
import { eventSetter } from '../../../utils';

export default function Review ({ reviewSummary, setReviewSummary, reviewBody, setReviewBody }) {
  return (
    <>
      <h3>Review Summary*</h3>
      <input
        placeholder="Please input a summary of your review"
        value={reviewSummary}
        onChange={eventSetter(setReviewSummary)}
      />

      <h3>Review Body*</h3>
      <textarea
        value={reviewBody}
        placeholder="Please review the product"
        onChange={eventSetter(setReviewBody)}
      />
      {reviewBody.length < 50 && (
        <small style={{ marginTop: '0.3em' }}>Minimum required characters left: {50 - reviewBody.length}</small>
      )}
    </>
  );
}

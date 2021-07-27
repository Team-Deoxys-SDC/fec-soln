import React, { useEffect } from 'react';

export default function ScrollableList ({ list }) {
  const scrollableList = useRef(null);

  // Scroll latest review into view
  useEffect(() => {
    list.current.scrollTop = list.current.scrollHeight;
  }, [list.length]);

  return (
    <div ref={reviewList} style={{ overflow: 'auto', height: '400px' }}>
      {filteredReviews
        .slice(0, displayCount)
        .map(review => <ReviewTile key={review.review_id} review={review} />)}
    </div>
  );
}

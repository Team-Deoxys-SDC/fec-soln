import React, { useEffect, useRef } from 'react';

export default function ScrollableList ({ style, children }) {
  const list = useRef(null);

  // Scroll latest review into view
  useEffect(() => {
    list.current.scrollTop = list.current.scrollHeight;
  }, [children]);

  return (
    <div ref={list} style={{ overflow: 'auto', ...style }}>
      {children}
    </div>
  );
}

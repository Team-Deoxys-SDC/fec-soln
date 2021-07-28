import React, { useEffect, useRef, useState } from 'react';

export default function ScrollableList ({ style, children }) {
  const list = useRef(null);
  const [start, setStart] = useState(true);

  // Scroll latest review into view
  useEffect(() => {
    list.current.scrollTop = start ? 0 : list.current.scrollHeight;
    setStart(false);
  }, [children]);

  return (
    <div ref={list} style={{ overflow: 'auto', ...style }}>
      {children}
    </div>
  );
}

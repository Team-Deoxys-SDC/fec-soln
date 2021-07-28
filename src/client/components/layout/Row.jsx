import React from 'react';

export default function Row ({ children, onClick }) {
  return (
    <div onClick={onClick} style={{ display: 'flex', flexDirection: 'row' }}>
      {children}
    </div>
  );
}

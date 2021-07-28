import React from 'react';

export default function Column ({ onClick, children }) {
  return (
    <div onClick={onClick} style={{ display: 'flex', flexDirection: 'column' }}>
      {children}
    </div>
  );
}

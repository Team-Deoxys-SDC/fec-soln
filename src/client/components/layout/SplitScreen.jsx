import React from 'react';
import { toPercentage } from '../../utils';

export default function SplitScreen ({ children, widths }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {React.Children.map(children, (child, index) => (
        Boolean(widths[index]) && (
          <div style={{ width: toPercentage(widths[index], 100), margin: '1em' }}>
            {child}
          </div>
        )
      ))}
    </div>
  );
}

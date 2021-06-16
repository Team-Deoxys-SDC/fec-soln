import React, { useContext } from 'react';
import { AppContext } from '../../../contexts';
import { productCharacteristics, toPercentage } from '../../../utils';

export default function Styles () {
  const { reviewMeta } = useContext(AppContext);

  return (
    <div style={{ marginTop: '1em', display: 'flex', flexDirection: 'column', width: '95%' }}>
      {Object.entries(reviewMeta.characteristics).map(([characteristic, { id, value }]) => (
        <div key={id} style={{ marginTop: '0.6em', display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '0.2em' }}>{characteristic}</div>
          <div style={{ width: '100%', height: '10px', backgroundColor: 'lightgray' }}>
            <div
              style={{
                width: '2px',
                height: '100%',
                position: 'relative',
                backgroundColor: 'black',
                left: toPercentage((value - 1) * 25, 100)
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <small>{productCharacteristics[characteristic][0]}</small>
            <small>{productCharacteristics[characteristic][4]}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

import React, { useContext } from 'react';
import { AppContext } from '../../../contexts';

export default function Description () {
  const { product } = useContext(AppContext);
  return (
    <div style={{ display: 'flex', flexDirection: 'row', margin: '2%' }}>
      <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
        <h3>{product.slogan}</h3>
        <p>{product.description}</p>
      </div>
      <hr width="0.1" size="100" style={{ marginLeft: '3em', marginRight: '3em' }} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {product.features.map(({ feature, value }) => {
          return <li key={feature + value}>{feature} {value}</li>;
        })}
      </div>
    </div>
  );
}

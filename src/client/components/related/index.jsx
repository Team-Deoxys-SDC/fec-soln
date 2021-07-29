import React, { useContext } from 'react';
import { AppContext } from '../../contexts';

import RelatedTile from './tile';

import Row from '../layout/Row';

export default function RelatedProducts () {
  const { related } = useContext(AppContext);

  return (
    <div>
      <h1>Related Products</h1>

      <Row style={{ overflow: 'auto' }}>
        {related.map(product => (
          <RelatedTile key={product.id} product={product} />
        ))}
      </Row>

    </div>
  );
}

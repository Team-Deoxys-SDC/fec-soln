import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../../contexts';
import { STOCK_IMAGE } from '../../../utils';
import Column from '../../layout/Column';


export default function RelatedTile ({ product }) {
  const history = useHistory();
  const { id, styles: [{ photos: [photo] }] } = product;
  return (
    <Column
      onClick={() => { history.push(`/products/${id}`); }}
      style={{
        margin: '0 1em',
        flexShrink: '0',
        height: '300px',
        width: '225px',
        border: '1px solid black'
      }}>
      <img
        style={{ height: '70%', maxWidth: '100%' }}
        src={photo.thumbnail_url || STOCK_IMAGE}
      />
    </Column>
  );
}

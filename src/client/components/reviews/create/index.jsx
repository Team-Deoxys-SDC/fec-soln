import React, { useContext, useState } from 'react';
import { AppContext } from '../../../contexts';

import User from './User';
import Photos from './Photos';
import Review from './Review';
import Overall from './Overall';
import Recommend from './Recommend';
import Characteristics from './Characteristics';

import CreateFormModal from '../../form';

export default function CreateReview () {
  const { product } = useContext(AppContext);

  const [state, setState] = useState({
    body: '',
    name: '',
    email: '',
    rating: 3,
    photos: [],
    summary: '',
    recommend: true,
    currentPhoto: '',
    characteristics: {},
    product_id: product.id
  });


  return (
    <CreateFormModal
      title="Write your Review"
      subtitle={`... about the ${product.name}`}
      endpoint="/api/reviews"
      state={state}
      setState={setState}
      fields={[
        Overall,
        Recommend,
        Characteristics,
        Review,
        Photos,
        User
      ]}
    />
  );
}

import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../../contexts';
import { productCharacteristics } from '../../../utils';
import Column from '../../layout/Column';

import Row from '../../layout/Row';
import { REQUIRED_FIELD, validate } from '../utils';

export default function Characteristics ({ formData, setFormData, errors, setErrors }) {
  const { reviewMeta } = useContext(AppContext);
  const { characteristics } = formData;

  useEffect(() => {
    validate(formData, errors, setErrors, 'characteristics', REQUIRED_FIELD, (field) => {
      return Object.keys(field).length ===
        Object.keys(reviewMeta.characteristics).length;
    });
  }, [characteristics]);

  return (
    <>
      <h3 style={{ marginBottom: 0 }}>Characteristics*</h3>
      {errors.show && <small style={{ color: 'red' }}>{errors.characteristics}</small>}
      <Column style={{ padding: '0 2em' }}>
        {/* Map over the characteristics for the given product */}
        {Object.entries(reviewMeta.characteristics).map(([characteristic, { id }]) => (
          <div key={id}>
            <h5>{characteristic}</h5>
            <Row style={{ justifyContent: 'space-around' }}>
              {/* Map over the rating descriptions for a given characteristic  */}
              {productCharacteristics[characteristic].map((label, index) => (
                <Column key={id + label} style={{ width: '7%' }}>
                  <small>{label}</small>
                  <input
                    value={label}
                    type="radio"
                    checked={characteristics[id] === (index + 1)}
                    onChange={() => {
                      setFormData({
                        ...formData,
                        characteristics: { ...characteristics, [id]: index + 1 }
                      });
                    }}
                  />
                </Column>
              ))}
            </Row>
          </div>
        ))}
      </Column>
    </>
  );
}

import React, { useContext } from 'react';
import { AppContext } from '../../../contexts';
import { productCharacteristics } from '../../../utils';

export default function Characteristics ({ characteristics, setCharacteristics, errors }) {
  const { reviewMeta } = useContext(AppContext);

  return (
    <>
      <h3 style={{ marginBottom: 0 }}>Characteristics*</h3>
      <small style={{ color: 'red' }}>{errors.characteristics}</small>
      <div style={{ paddingLeft: '2em', paddingRight: '2em', display: 'flex', flexDirection: 'column' }}>
        {/* Map over the characteristics for the given product */}
        {Object.entries(reviewMeta.characteristics).map(([characteristic, { id }]) => (
          <div key={id}>
            <h5>{characteristic}</h5>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

              {/* Map over the rating descriptions for a given characteristic  */}
              {productCharacteristics[characteristic].map((label, index) => (
                <div
                  key={id + label}
                  style={{ width: '7%', display: 'flex', flexDirection: 'column' }}
                >
                  <small>{label}</small>
                  <input
                    value={label}
                    type="radio"
                    checked={characteristics[id] === (index + 1)}
                    onChange={() => {
                      setCharacteristics({ ...characteristics, [id]: (index + 1) });
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

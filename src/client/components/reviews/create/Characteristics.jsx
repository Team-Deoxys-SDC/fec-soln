import React, { useContext } from 'react';
import { AppContext } from '../../../contexts';
import { productCharacteristics } from '../../../utils';

export default function Characteristics ({ characteristics, setCharacteristics }) {
  const { reviewMeta } = useContext(AppContext);

  return (
    <>
      <h3 style={{ marginBottom: 0 }}>Characteristics*</h3>

      <div style={{ paddingLeft: '2em', paddingRight: '2em', display: 'flex', flexDirection: 'column' }}>
        {/* Map over the characteristics for the given product */}
        {Object.keys(reviewMeta.characteristics).map(characteristic => (
          <div key={characteristic}>
            <h5>{characteristic}</h5>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

              {/* Map over the rating descriptions for a given characteristic  */}
              {productCharacteristics[characteristic].map(label => (
                <div
                  key={characteristic + label}
                  style={{ width: '7%', display: 'flex', flexDirection: 'column' }}
                >
                  <small>{label}</small>
                  <input
                    value={label}
                    type="radio"
                    checked={characteristics[characteristic] === label}
                    onChange={() => {
                      setCharacteristics({ ...characteristics, [characteristic]: label });
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

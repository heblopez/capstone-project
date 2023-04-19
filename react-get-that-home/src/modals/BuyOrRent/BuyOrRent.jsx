import React from 'react';
import BuyRent from './BuyOrRent-UI';

const BuyOrRent = ({ onHandle, data }) => {
  return (
    <BuyRent>
      <div className='container'>
        <div className='inputs'>
          <div className='input'>
            <input
              type='checkbox'
              name='both'
              id='both'
              checked={data.both}
              onChange={(e) => onHandle(e)}
            />
            <label htmlFor='both'>Both</label>
          </div>

          <div className='input'>
            <input
              type='checkbox'
              name='buying'
              id='buying'
              onChange={(e) => onHandle(e)}
            />
            <label htmlFor='buying'>Buying</label>
          </div>

          <div className='input'>
            <input
              type='checkbox'
              name='renting'
              id='renting'
              onChange={(e) => onHandle(e)}
            />
            <label htmlFor='renting'>Renting</label>
          </div>
        </div>
      </div>
    </BuyRent>
  );
};

export default BuyOrRent;

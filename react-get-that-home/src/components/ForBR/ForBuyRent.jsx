import React from 'react';
import BuyRent from './ForBuyRent-UI';

const ForBuyRent = ({ operation, children }) => {
  return (
    <BuyRent>
      <div className='container'>
        <div className='icon'>{children}</div>
        <p>For {operation}</p>
      </div>
    </BuyRent>
  );
};

export default ForBuyRent;

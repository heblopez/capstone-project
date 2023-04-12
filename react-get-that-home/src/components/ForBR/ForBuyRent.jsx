import React from 'react';
import BuyRent from './ForBuyRent-UI';

const ForBuyRent = ({ operation, children }) => {
  return (
    <BuyRent>
      <div className='container'>
        {children}
        <p>For {operation}</p>
      </div>
    </BuyRent>
  );
};

export default ForBuyRent;

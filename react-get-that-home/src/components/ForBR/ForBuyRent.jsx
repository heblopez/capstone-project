import React from 'react';
import BuyRent from './ForBuyRent-UI';

const ForBuyRent = ({ operation, children }) => {
  return (
    <BuyRent>
      <div className='buy-rent__container'>
        <div className='icon--buy_rent'>{children}</div>
        <span className='operation__content'>For {operation}</span>
      </div>
    </BuyRent>
  );
};

export default ForBuyRent;

import React from 'react';
import dollar from '../../assets/dollar.svg';
import aparment from '../../assets/aparment.svg';
import bed from '../../assets/bed.svg';
import bathroom from '../../assets/bathrrom.svg';
import area from '../../assets/area.svg';
import pets from '../../assets/pets.svg';
import { Data, InfoContainer, PriceContainer } from './Description-UI';

const Description = ({
  price,
  type,
  address,
  bedCount,
  bathroomCount,
  petss = false,
}) => {
  const typeProp = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <Data>
      <PriceContainer>
        <div className='price-cont'>
          <div>
            <img src={dollar} alt='dollar' />
          </div>
          <span className='montly-rent'>{price}</span>
        </div>

        <div className='price-cont'>
          <div>
            <img className='small' src={aparment} alt='Aparment' />
          </div>
          <span className='property-type'>{typeProp}</span>
        </div>
      </PriceContainer>

      <InfoContainer>
        <p>{address}</p>
        <div className='services'>
          <div className='service'>
            <img src={bed} alt='bed' />
            <span>{bedCount}</span>
          </div>
          <div className='service'>
            <img src={bathroom} alt='bathroom' />
            <span>{bathroomCount}</span>
          </div>
          <div className='service'>
            <img src={area} alt='area' />
            <span>180 m2</span>
          </div>
          {petss && <img src={pets} alt='pets' />}
        </div>
      </InfoContainer>
    </Data>
  );
};

export default Description;

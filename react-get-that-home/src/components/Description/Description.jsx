import React from 'react';
import dollar from '../../assets/dollar.svg';
import aparment from '../../assets/aparment.svg';
import bed from '../../assets/bed.svg';
import bathroom from '../../assets/bathrrom.svg';
import area_icon from '../../assets/area.svg';
import petsfrom from '../../assets/pets.svg';
import { Data, InfoContainer, PriceContainer } from './Description-UI';

const Description = ({
  address,
  price,
  monthly_rent,
  bedrooms,
  bathrooms,
  area,
  pets_allowed,
  type_operation,
  type_property,
}) => {
  const typeProp =
    type_property.charAt(0).toUpperCase() + type_property.slice(1);

  return (
    <Data>
      <PriceContainer>
        <div className='price-cont'>
          <div>
            <img src={dollar} alt='dollar' />
          </div>
          <span className='montly-rent'>
            {type_operation === 'rent' ? monthly_rent : price}
          </span>
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
            <span>{bedrooms}</span>
          </div>
          <div className='service'>
            <img src={bathroom} alt='bathroom' />
            <span>{bathrooms}</span>
          </div>
          <div className='service'>
            <img src={area_icon} alt='area' />
            <span>{area} m2</span>
          </div>
          {pets_allowed && <img src={petsfrom} alt='pets' />}
        </div>
      </InfoContainer>
    </Data>
  );
};

export default Description;

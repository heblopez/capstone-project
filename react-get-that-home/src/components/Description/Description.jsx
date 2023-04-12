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
  type_prop,
  beds,
  baths,
  pets = false,
  area,
}) => {
  const typeProp = type_prop.charAt(0).toUpperCase() + type_prop.slice(1);

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
            <span>{beds}</span>
          </div>
          <div className='service'>
            <img src={bathroom} alt='bathroom' />
            <span>{baths}</span>
          </div>
          <div className='service'>
            <img src={area_icon} alt='area' />
            <span>{area} m2</span>
          </div>
          {pets && <img src={petsfrom} alt='pets' />}
        </div>
      </InfoContainer>
    </Data>
  );
};

export default Description;

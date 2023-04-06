import React from 'react';
import dollar from '../../assets/dollar.svg';
import aparment from '../../assets/aparment.svg';
import bed from '../../assets/bed.svg';
import bathroom from '../../assets/bathrrom.svg';
import area from '../../assets/area.svg';
import pets from '../../assets/pets.svg';
import {
  DescriptionCont,
  InfoContainer,
  PriceContainer,
} from './Description-UI';

const Description = ({
  price,
  type,
  address,
  bedCount,
  bathroomCount,
  petss = false,
  classSpanPrice,
  classSpanAparment,
}) => {
  return (
    <DescriptionCont>
      <PriceContainer>
        <div>
          <div>
            <img src={dollar} alt='dollar' />
          </div>
          <span className={classSpanPrice}>{price}</span>
        </div>
        <div>
          <div>
            <img src={aparment} alt='Aparment' />
          </div>
          <span className={classSpanAparment}>{type}</span>
        </div>
      </PriceContainer>

      <div>
        <p>{address}</p>
      </div>

      <InfoContainer>
        <div>
          <img src={bed} alt='bed' />
          <span>{bedCount}</span>
        </div>
        <div>
          <img src={bathroom} alt='bathroom' />
          <span>{bathroomCount}</span>
        </div>
        <div>
          <img src={area} alt='area' />
          <span>180 m2</span>
        </div>
        {petss && <img src={pets} alt='pets' />}
      </InfoContainer>
    </DescriptionCont>
  );
};

export default Description;

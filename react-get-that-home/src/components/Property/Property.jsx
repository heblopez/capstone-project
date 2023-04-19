import React from 'react';
import Picture from '../Picture/Picture';
import Description from '../Description/Description';
import pic from '../../assets/Property.svg';
import ForBuyRent from '../ForBR/ForBuyRent';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import WrapperProperty from './Property-UI';

const Property = ({ prop, favorite }) => {
  const {
    id,
    address,
    price,
    monthly_rent,
    maintanance,
    bedrooms,
    bathrooms,
    area,
    pets_allowed,
    photo_urls,
    type_operation,
    type_property,
  } = prop;

  return (
    <WrapperProperty>
      <Picture picture={photo_urls ? photo_urls[0] : pic} name={'Property'} />
      <ForBuyRent operation={type_operation}>
        <RiMoneyDollarCircleFill />
      </ForBuyRent>
      <Description
        id={id}
        address={address}
        price={price}
        monthly_rent={monthly_rent}
        maintanance={maintanance}
        bathrooms={bathrooms}
        bedrooms={bedrooms}
        area={area}
        pets_allowed={pets_allowed}
        type_operation={type_operation}
        type_property={type_property}
        favorite={favorite}
      />
    </WrapperProperty>
  );
};

export default Property;

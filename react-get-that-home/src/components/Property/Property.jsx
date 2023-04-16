import React from 'react';
import Picture from '../Picture/Picture';
import Description from '../Description/Description';
import pic from '../../assets/Property.svg';
import ForBuyRent from '../ForBR/ForBuyRent';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

const Property = ({ prop }) => {
  console.log(prop);
  const {
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
    <div>
      <ForBuyRent operation={type_operation}>
        <RiMoneyDollarCircleFill />
      </ForBuyRent>
      <Picture picture={photo_urls ? photo_urls[0] : pic} name={'Property'} />
      <Description
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
      />
    </div>
  );
};

export default Property;

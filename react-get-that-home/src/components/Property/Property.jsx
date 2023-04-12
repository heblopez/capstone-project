import React from 'react';
import Picture from '../Picture/Picture';
import Description from '../Description/Description';
import { BASE_URI } from '../../config';
import pic from '../../assets/Property.svg';
import ForBuyRent from '../ForBR/ForBuyRent';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

const Property = ({ prop }) => {
  const {
    address,
    price,
    bathrooms,
    bedrooms,
    type_property,
    pets_allowed,
    area,
    photo_urls,
    type_operation,
  } = prop;

  return (
    <div>
      <ForBuyRent operation={type_operation}>
        <RiMoneyDollarCircleFill />
      </ForBuyRent>
      <Picture
        picture={photo_urls ? BASE_URI + photo_urls[0] : pic}
        name={'Property'}
      />
      <Description
        address={address}
        price={price}
        baths={bathrooms}
        beds={bedrooms}
        type_prop={type_property}
        pets={pets_allowed}
        area={area}
      />
    </div>
  );
};

export default Property;

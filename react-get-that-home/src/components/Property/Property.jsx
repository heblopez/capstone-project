import React from 'react';
import Picture from '../Picture/Picture';
import Description from '../Description/Description';
import propertyPhoto from '../../assets/Property.svg';

const Property = ({ prop }) => {
  const { address, montly_rent, type_property, bedrooms, bathrooms, pets_allowed } =
    prop;

  return (
    <div>
      <Picture picture={propertyPhoto} name={'Property'} />
      <Description
        price={montly_rent}
        type={type_property}
        address={address}
        bedCount={bedrooms}
        bathroomCount={bathrooms}
        petss={pets_allowed}
      />
    </div>
  );
};

export default Property;

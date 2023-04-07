import React from 'react';
import Picture from '../Picture/Picture';
import Description from '../Description/Description';
import propertyPhoto from '../../assets/Property.svg';

const Property = ({ prop }) => {
  const { address, montly_rent, property_type, bedrooms, bathrooms, pets } =
    prop;

  return (
    <div>
      <Picture picture={propertyPhoto} name={'Property'} />
      <Description
        price={montly_rent}
        type={property_type}
        address={address}
        bedCount={bedrooms}
        bathroomCount={bathrooms}
        petss={pets}
      />
    </div>
  );
};

export default Property;

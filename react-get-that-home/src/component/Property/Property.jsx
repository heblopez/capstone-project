import React from 'react';
import Picture from '../Picture/Picture';
import Description from '../Description/Description';
import propertyPhoto from '../../assets/Property.svg';

const Property = ({ property }) => {
  return (
    <div>
      <Picture picture={propertyPhoto} name={'Property'} />
      <Description
        price={'3,000'}
        type={'Aparment'}
        address={'86872 Jacob Gateway, Durganport, WV 48044'}
        bedCount={4}
        bathroomCount={2}
        petss={true}
        classSpanAparment={'apartment'}
        classSpanPrice={'price'}
      />
    </div>
  );
};

export default Property;

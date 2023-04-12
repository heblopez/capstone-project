import React from 'react';
import Card from '../../components/Card/Card';
import { SectionBestPrice } from './SectionPrice-UI';

const SectionPrice = () => {
  const properties = [
    {
      id: 1,
      address: '86872 Jacob Gateway, Durganport, WV 48044',
      montly_rent: 3000,
      maintanance: 100,
      type_property: 'aparment',
      price: 5000,
      bedrooms: 2,
      bathrooms: 4,
      area: 180,
      pets: true,
      description: `3 Bedroom /2 Bathroom apartment available for ASAP move-in! Apartment features hardwood floors throughout`,
      picture: '',
    },
    {
      id: 2,
      address: '610 Zieme Ways, Lake Corey, AR 40537-6065',
      montly_rent: 2000,
      maintanance: 100,
      type_property: 'house',
      price: 5500,
      bedrooms: 4,
      bathrooms: 2,
      area: 180,
      pets: false,
      description: `3 Bedroom /2 Bathroom apartment available for ASAP move-in! Apartment features hardwood floors throughout`,
      picture: '',
    },
    {
      id: 3,
      address: 'Apt. 325 29166 Wuckert Heights, Adamland, MT 17471',
      montly_rent: 4000,
      maintanance: 100,
      type_property: 'aparment',
      price: 5300,
      bedrooms: 3,
      bathrooms: 5,
      area: 180,
      pets: true,
      description: `3 Bedroom /2 Bathroom apartment available for ASAP move-in! Apartment features hardwood floors throughout`,
      picture: '',
    },
  ];

  return (
    <SectionBestPrice>
      <div className='container'>
        <p className='find'>Find an Apartment you Love</p>
        <h3>Homes for rent at the best prices</h3>
        <div className='grid-cards'>
          {properties.map((property) => (
            <Card key={property.id} property={property} />
          ))}
        </div>
      </div>
    </SectionBestPrice>
  );
};

export default SectionPrice;

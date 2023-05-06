import React from 'react';
import Card from '../../components/Card/Card';
import { SectionBestPrice } from './SectionPrice-UI';
import { useProp } from '../../context/PropertyContext';

const SectionPrice = () => {
  const { properties } = useProp();
  const bestPrices = Object.entries(properties).reduce((acc, [key, val]) => {
    if (acc.length < 3) {
      acc.push(val);
    } else {
      const minPrice = Math.min(...acc.map((item) => item.price));
      if (val.price > minPrice) {
        acc[acc.findIndex((item) => item.price === minPrice)] = val;
      }
    }
    return acc;
  }, []);

  return (
    <SectionBestPrice>
      <div className='container'>
        <p className='find'>Find an Apartment you Love</p>
        <h3>Homes for rent at the best prices</h3>
        <div className='grid-cards'>
          {bestPrices?.map((property) => (
            <Card key={property.id} property={property} />
          ))}
        </div>
      </div>
    </SectionBestPrice>
  );
};

export default SectionPrice;

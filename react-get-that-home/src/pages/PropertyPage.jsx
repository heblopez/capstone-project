import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Properties from '../services/properties-services';

const PropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState({});

  useEffect(() => {
    const property = setTimeout(() => {
      Properties.getProp(id)
        .then((prop) => setProperty(prop))
        .catch(console.log);
    });
    return () => clearTimeout(property);
  }, []);

  console.log(property);

  return (
    <div>
      <div>
        <img src={property.photo} alt='' />
        <p>{property.address}</p>
        <div>
          <p>$ {property.price}</p>
          <span>+{property.maintanance}</span>
        </div>
        <br />
        <div>
          <span>Beds: {property.bebrooms}</span>
          <span>Baths: {property.bathrooms}</span>
          <span>Area: {property.area}m2</span>
          <span>Pets: {property.pets_allowed}</span>
        </div>
        <div>
          <p>{property.description}</p>
        </div>

        <div>
          <p>Location:</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;

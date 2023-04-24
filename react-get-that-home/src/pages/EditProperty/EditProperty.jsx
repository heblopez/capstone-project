import React, { useEffect, useState } from 'react';
import ButtonRS from '../../components/FormProperty/ButtonRS';
import FormProperty from '../../components/FormProperty/FormProperty';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import Properties from '../../services/properties-services';

const WrapperPage = styled.div`
  padding: 32px 10%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const EditProperty = () => {
  const { id } = useParams();
  const initial = {
    address: '',
    apartment: false,
    area: '',
    bathrooms: '',
    bedrooms: '',
    description: '',
    house: false,
    maintanance: '',
    monthly_rent: '',
    price: '',
    pets_allowed: false,
  };

  const p = JSON.parse(localStorage.getItem('property'));
  const prop = {
    address: p.address,
    apartment: p.type_property === 'apartment',
    house: p.type_property === 'house',
    area: p.area,
    bathrooms: p.bathrooms,
    bedrooms: p.bedrooms,
    description: p.description,
    maintanance: p.maintanance,
    monthly_rent: p.monthly_rent,
    price: p.price,
    pets_allowed: p.pets_allowed,
  };

  const [property, setProperty] = useState(prop || initial);

  useEffect(() => {
    Properties.getProp(id)
      .then((prop) => {
        localStorage.setItem('property', JSON.stringify(prop));
        setProperty(prop);
      })
      .catch(console.log);
  }, [id]);

  return (
    <WrapperPage>
      <h1>Edit property</h1>
      <div>
        <ButtonRS />
      </div>
      <FormProperty valuesProp={property} id={id} />
    </WrapperPage>
  );
};

export default EditProperty;

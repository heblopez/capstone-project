import React, { useEffect, useState } from 'react';
import ButtonRS from '../../components/FormProperty/ButtonRS';
import FormProperty from '../../components/FormProperty/FormProperty';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import Properties from '../../services/properties-services';
import { PROPERTY_STORAGE } from '../../config';

const WrapperPage = styled.div`
  padding: 32px 10%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const EditProperty = () => {
  const { id: property_id } = useParams();

  const initial = {
    id: 0,
    address: '',
    apartment: false,
    house: false,
    area: '',
    bathrooms: '',
    bedrooms: '',
    description: '',
    maintanance: '',
    monthly_rent: '',
    price: '',
    pets_allowed: false,
  };

  const dataParse = JSON.parse(localStorage.getItem(PROPERTY_STORAGE));
  const [data, setData] = useState(dataParse || initial);

  useEffect(() => {
    Properties.getProp(property_id)
      .then((prop) => {
        setData({
          ...data,
          id: prop.id,
          address: prop.address,
          apartment: prop.type_property === 'apartment',
          house: prop.type_property === 'house',
          area: prop.area,
          bathrooms: prop.bathrooms,
          bedrooms: prop.bedrooms,
          description: prop.description,
          maintanance: prop.maintanance,
          monthly_rent: prop.monthly_rent,
          price: prop.price,
          pets_allowed: prop.pets_allowed,
        });
      })
      .catch(console.log);
  }, [property_id]);

  return (
    <WrapperPage>
      <h1>Edit property</h1>
      <div>
        <ButtonRS />
      </div>
      <FormProperty valuesProp={data} id={property_id} />
    </WrapperPage>
  );
};

export default EditProperty;

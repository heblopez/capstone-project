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
  const [property, setProperty] = useState({});

  useEffect(() => {
    const property = setTimeout(() => {
      Properties.getProp(id)
        .then((prop) => {
          setProperty({
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
    });
    return () => clearTimeout(property);
  }, []);

  return (
    <WrapperPage>
      <h1>Edit property</h1>
      <div>
        <ButtonRS />
      </div>
      <FormProperty initialValues={property} id={id} />
    </WrapperPage>
  );
};

export default EditProperty;

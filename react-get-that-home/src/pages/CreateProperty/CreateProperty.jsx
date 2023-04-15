import React from 'react';
import styled from '@emotion/styled';
import FormProperty from '../../components/FormProperty/FormProperty';
import ButtonRS from '../../components/FormProperty/ButtonRS';

const WrapperPage = styled.div`
  padding: 32px 10%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

function CreateProperty() {
  const initialValues = {
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

  return (
    <WrapperPage>
      <h1>Create a property listing</h1>
      <div>
        <ButtonRS />
      </div>
      <FormProperty initialValues={initialValues} />
    </WrapperPage>
  );
}

export default CreateProperty;

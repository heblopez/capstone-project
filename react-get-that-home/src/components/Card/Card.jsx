import React from 'react';
import Property from '../Property/Property';
import Action from '../Action/Action';
import { CardContainer } from './Card-UI';
import { Link } from 'react-router-dom';

const Card = ({ property, section, favorite }) => {
  const { id } = property;
  return (
    <CardContainer>
      <Link to={`/property/${id}`} className='card'>
        <Property prop={property} favorite={favorite} />
      </Link>
      <Action id={property.id} section={section} />
    </CardContainer>
  );
};

export default Card;

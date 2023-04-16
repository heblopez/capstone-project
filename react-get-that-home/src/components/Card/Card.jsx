import React from 'react';
import Property from '../Property/Property';
import Action from '../Action/Action';
import { CardContainer } from './Card-UI';
import { Link } from 'react-router-dom';

const Card = ({ property }) => {
  return (
    <CardContainer>
      <Link to={`/property/${property.id}`}>
        <Property prop={property} />
      </Link>
      <Action id={property.id} />
    </CardContainer>
  );
};

export default Card;

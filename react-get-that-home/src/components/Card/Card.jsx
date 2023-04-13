import React from 'react';
import Property from '../Property/Property';
import Action from '../Action/Action';
import { Link } from 'react-router-dom';
import { CardContainer } from './Card-UI';

const Card = ({ property }) => {
  return (
    <CardContainer>
      <Link to={`/property/${property.id}`}>
        <Property prop={property} />
      </Link>
      <Action/>
    </CardContainer>
  );
};

export default Card;

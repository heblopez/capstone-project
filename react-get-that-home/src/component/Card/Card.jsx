import React from 'react';
import Property from '../Property/Property';
import Action from '../Action/Action';
import { Link } from 'react-router-dom';

const Card = ({ property }) => {
  return (
    <>
      <Link style={{ textDecoration: 'none' }}>
        <Property prop={property} />
      </Link>
      <Action isActive='active' />
    </>
  );
};

export default Card;

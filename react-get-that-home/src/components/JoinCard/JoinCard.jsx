import React from 'react';
import Card from './JoinCard-UI';

const JoinCard = ({ svg, role, you_want, id }) => {
  return (
    <Card id={id}>
      <div className='img'>
        <img src={svg} alt='' />
      </div>
      <p className='role'>{role}</p>
      <p className='you-want'>{you_want}</p>
    </Card>
  );
};

export default JoinCard;

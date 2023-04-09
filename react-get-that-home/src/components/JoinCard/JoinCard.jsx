import React from 'react';
import Card from './JoinCard-UI';

const JoinCard = ({ userJoin }) => {
  const { cover, role, you_want, id } = userJoin;
  return (
    <Card>
      <div className='img'>
        <img src={cover} alt={`image of ${id}`} />
      </div>
      <p className='role'>{role}</p>
      <p className='you-want'>{you_want}</p>
    </Card>
  );
};

export default JoinCard;

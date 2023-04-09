import React, { useState } from 'react';
import Container from './JoinPage-UI';
import JoinCard from '../../components/JoinCard/JoinCard';
import landLord from '../../assets/landlord.svg';
import seeker from '../../assets/seeker.svg';
import { Link } from 'react-router-dom';

const list = [
  {
    id: 'landlord',
    role: 'Landlord',
    you_want: 'You want to rent or sell a home',
    cover: landLord,
  },
  {
    id: 'home_seeker',
    role: 'Home seeker',
    you_want: 'You want to find a home',
    cover: seeker,
  },
];

const JoinPage = () => {
  return (
    <Container>
      <div className='call-to-action'>
        <div className='first'>
          <>
            <p className='first--question'>
              Selecciona el perfil con el que te identificas
            </p>
            <p className='second--question'>Qué estas buscando?</p>
          </>
        </div>
        <div className='second'></div>
      </div>

      <div className='join-cards'>
        <div className='cards'>
          <>
            {list.map((join) => (
              <Link key={join.id} to={`/create-account/${join.id}`}>
                <JoinCard userJoin={join} />
              </Link>
            ))}
          </>
        </div>
      </div>
    </Container>
  );
};

export default JoinPage;

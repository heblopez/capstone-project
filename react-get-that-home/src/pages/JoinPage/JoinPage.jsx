import React from 'react';
import Container from './JoinPage-UI';
import JoinCard from '../../components/JoinCard/JoinCard';
import landLord from '../../assets/landlord.svg';
import seeker from '../../assets/seeker.svg';

const JoinPage = () => {
  return (
    <Container>
      <div className='call-to-action'>
        <div className='first'>
          <p className='first--question'>
            Selecciona el perfil con el que te identificas
          </p>
          <p className='second--question'>Qué estas buscando?</p>
        </div>
        <div className='second'></div>
      </div>

      <div className='join-cards'>
        <div className='cards'>
          <JoinCard
            svg={landLord}
            role={'Landlord'}
            you_want={'You want to rent or sell a home'}
            id='landlord'
          />
          <JoinCard
            svg={seeker}
            role={'Home seeker'}
            you_want={'You want to find a home'}
            id='home_seeker'
          />
        </div>
      </div>
    </Container>
  );
};

export default JoinPage;

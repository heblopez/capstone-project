import React from 'react';
import JoinForm from '../../components/JoinForm/JoinForm';
import Container from './JoinPage-UI';

const CreateAccount = () => {
  return (
    <Container>
      <div className='call-to-action'>
        <div className='first'></div>
        <div className='second'></div>
      </div>

      <div className='join-form'>
        <JoinForm />
      </div>
    </Container>
  );
};

export default CreateAccount;

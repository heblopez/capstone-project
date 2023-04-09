import React from 'react';
import LandingPage from '../pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import JoinPage from '../pages/JoinPage/JoinPage';
import FindPage from '../pages/FindPage';
import CreateAccount from '../pages/JoinPage/CreateAccount';

const UnAuthenticate = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/find_a_home' element={<FindPage />} />
        <Route path='/join' element={<JoinPage />} />
        <Route path='/create-account/:id' element={<CreateAccount />} />
      </Routes>
    </div>
  );
};

export default UnAuthenticate;

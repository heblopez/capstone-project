import React from 'react';
import LandingPage from '../pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import JoinPage from '../pages/JoinPage/JoinPage';
import FindPage from '../pages/FindPage';

const UnAuthenticate = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/find_a_home' element={<FindPage />} />
        <Route path='/join' element={<JoinPage />} />
      </Routes>
    </div>
  );
};

export default UnAuthenticate;

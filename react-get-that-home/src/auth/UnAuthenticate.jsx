import React from 'react';
import LandingPage from '../pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import JoinPage from '../pages/JoinPage/JoinPage';
import FindPage from '../pages/FindPage';
import CreateAccount from '../pages/JoinPage/CreateAccount';
import PropertyPage from '../pages/PropertyPage';
import { useProp } from '../context/Context';

const UnAuthenticate = () => {
  const { properties } = useProp();
  console.log(properties);

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/find_a_home' element={<FindPage />} />
        <Route path='/join' element={<JoinPage />} />
        <Route path='/create-account/:id' element={<CreateAccount />} />
        <Route path='/property/:id' element={<PropertyPage />} />
      </Routes>
    </div>
  );
};

export default UnAuthenticate;

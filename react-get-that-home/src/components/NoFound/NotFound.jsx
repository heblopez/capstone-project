import React from 'react';
import { typography } from '../../styles';
import NotFoundCont from './NotFound-UI';

const NotFound = () => {
  return (
    <NotFoundCont>
      <p className='not-found'>No found properties</p>
    </NotFoundCont>
  );
};

export default NotFound;

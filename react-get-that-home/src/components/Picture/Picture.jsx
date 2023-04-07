import React from 'react';
import { PictureContainer } from './Picture-UI';

const Picture = ({ picture, name }) => {
  return (
    <PictureContainer>
      <img src={picture} alt={name} />
    </PictureContainer>
  );
};

export default Picture;

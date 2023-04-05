import React from 'react';

const Picture = ({ picture, name }) => {
  return (
    <div>
      <img src={picture} alt={name} />
    </div>
  );
};

export default Picture;

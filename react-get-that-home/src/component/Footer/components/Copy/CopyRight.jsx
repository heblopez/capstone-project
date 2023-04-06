import React from 'react';
import { Container } from './CopyRight-UI';

const CopyRight = ({ isLogin, logo, codeable, copy }) => {
  const img = logo ? <img src={logo} alt={logo && 'Logo'} /> : null;

  return (
    <Container>
      {isLogin && img}
      {isLogin && (
        <>
          <p>{copy}</p>
          <p>{codeable}</p>
        </>
      )}
      {!isLogin && <p>{copy}</p>}
      {!copy && <p>{codeable}</p>}
    </Container>
  );
};

export default CopyRight;

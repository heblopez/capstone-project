import React, { useMemo } from 'react';
import { Container } from './CopyRight-UI';

const CopyRight = ({ LandingPage, logo, codeable, copy }) => {
  const img = useMemo(
    () => (logo ? <img src={logo} alt={logo && 'Logo'} /> : null),
    [logo]
  );

  return (
    <Container>
      {LandingPage && img}
      {LandingPage && (
        <>
          <p>{copy}</p>
          <p>{codeable}</p>
        </>
      )}
      {!LandingPage && <p>{copy}</p>}
      {!copy && <p>{codeable}</p>}
    </Container>
  );
};

export default CopyRight;

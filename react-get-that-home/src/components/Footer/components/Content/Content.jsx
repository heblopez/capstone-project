import React from 'react';
import { Container } from './Content-UI';

const Content = ({ description, children }) => {
  return (
    <Container>
      {children}
      <p>{description}</p>
    </Container>
  );
};

export default Content;

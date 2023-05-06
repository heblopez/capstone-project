import styled from '@emotion/styled';
import React from 'react';

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 45px;
`;

const Loading = () => {
  return <LoadingWrapper>Loading...</LoadingWrapper>;
};

export default Loading;
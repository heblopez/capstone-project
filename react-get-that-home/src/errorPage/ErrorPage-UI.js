import styled from '@emotion/styled';
import { typography } from '../styles';

const ErrorContainer = styled.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  h1.message {
    ${typography.head.headline4}
  }

  div.btn--error {
    button {
      width: 300px;
    }
  }
`;

export default ErrorContainer;

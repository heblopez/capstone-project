import styled from '@emotion/styled';
import { typography } from '../../styles';

const NotFoundCont = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  p.not-found {
    ${typography.head.headline3}
  }
`;

export default NotFoundCont;

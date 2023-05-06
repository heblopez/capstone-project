import styled from '@emotion/styled';
import { typography } from '../../../../styles/typography';
import { colors } from '../../../../styles/colors';

const Container = styled.div`
  display: flex;
  align-content: center;
  padding: 4px;
  gap: 10px;
  color: ${colors.gray};

  svg {
    height: 17px;
    width: 17px;
    margin: auto 0;
  }

  p {
    ${typography.body.body2}
    font-size: clamp(.6rem, 2vw, 0.875rem);
  }
`;

export { Container };

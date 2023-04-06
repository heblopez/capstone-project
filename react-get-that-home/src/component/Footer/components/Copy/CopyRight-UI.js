import styled from '@emotion/styled';
import { colors } from '../../../../styles/colors';
import { typography } from '../../../../styles/typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 10px 0;

  img {
    width: 136px;
    height: 40px;
  }

  p {
    ${typography.body.body2}
    color: ${colors.gray};
    padding: 0 8px;
  }
`;

export { Container };

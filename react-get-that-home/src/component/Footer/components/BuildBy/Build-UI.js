import styled from '@emotion/styled';
import { typography } from '../../../../styles/typography';
import { colors } from '../../../../styles/colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  gap: 8px;
  width: 365px;

  h4 {
    ${typography.caption};
    color: ${colors.gray};
    padding: 0 4px;
  }

  a {
    text-decoration: none;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;
`;

export { Container, Grid };

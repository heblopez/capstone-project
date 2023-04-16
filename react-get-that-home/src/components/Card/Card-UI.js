import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

const CardContainer = styled.div`
  width: 300px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  color: ${colors.gray};
  margin: 20px auto;

  a.card {
    display: flex;
    color: ${colors.gray};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 250px;
  }
`;

export { CardContainer };

import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const UserCard = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  padding: 8px;
  margin: 10px;
  width: 240px;
  height: 300px;

  img {
    width: 180px;
    height: 180px;
    margin: auto;
    background-color: ${colors.backgroundlight};
    border-radius: 50%;
  }

  p {
    ${typography.head.headline5}
    text-align: center;
  }

  div {
    display: flex;
    align-content: center;
    justify-content: space-evenly;

    a {
      svg {
        width: 18px;
        height: 18px;
        color: ${colors.gray};
      }
    }
  }
`;

export { UserCard };

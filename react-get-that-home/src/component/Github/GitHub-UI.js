import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const UserCard = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  padding: 4px;
  margin: 2px;
  width: 200px;

  img {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    background-color: ${colors.backgroundlight};
    border-radius: 50%;
  }

  p {
    ${typography.head.headline5}
    text-align: center;
    color: ${colors.gray};
  }

  div {
    display: flex;
    align-items: center;
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

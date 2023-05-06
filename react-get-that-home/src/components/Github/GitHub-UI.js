import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const UserCard = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px 4px;
  padding: 20px;
  margin: 2px;
  min-width: 200px;

  img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background-color: ${colors.backgroundlight};
    border-radius: 50%;
    box-shadow: 0px 6px 17px rgba(0, 0, 0, 0.5);
  }

  p {
    font-weight: 400;
    font-size: clamp(0.9rem, 3vw, 1.3rem);
    line-height: 2rem;
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

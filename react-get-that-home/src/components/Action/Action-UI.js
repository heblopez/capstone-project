import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

const ActionComponent = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  background-color: #bf5f82;
  padding: 13px auto;
  height: 7px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  color: ${colors.white};
  
  a {
    display: flex;
    align-content: center;
    justify-content: center;
    text-decoration: none;
    margin: auto 0;
    gap: 10px;
    padding: 4px;
    color: #fff;

    &.none {
      display: none;
    }

    :hover {
      transform: scale(1.2);
    }

    svg {
      height: 20px;
      width: 20px;
      margin: auto;
    }

    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      text-transform: uppercase;
      margin: auto 0;
      letter-spacing: 2px;
      color: ${colors.white};
    }
  }

  &.active {
    height: 50px;
  }
`;

export { ActionComponent };

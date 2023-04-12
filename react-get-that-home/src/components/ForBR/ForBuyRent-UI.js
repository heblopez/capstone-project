import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

const BuyRent = styled.div`
  position: absolute;
  z-index: 1;

  div.container {
    width: 110px;
    height: 28px;
    background-color: ${colors.pink};
    color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    gap: 8px;
    border-top-left-radius: 8px;

    svg {
      width: 16px;
      height: 16px;
    }

    p {
      text-transform: capitalize;
    }
  }
`;

export default BuyRent;

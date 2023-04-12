import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

const BuyRent = styled.div`
  position: absolute;
  transform: translateY(173px);

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

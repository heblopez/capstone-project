import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

const BuyRent = styled.div`
  position: absolute;
  transform: translateY(173px);
  display: block;

  div.container {
    width: 110px;
    height: 28px;
    background-color: ${colors.pink};
    color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    /* padding: 0; */
    padding: 8px;
    gap: 4px;

    div.icon {
      width: 18px;
      height: 18px;
      
      svg {
        width: 16px;
        height: 16px;
      }
    }

    p {
      text-transform: capitalize;
    }
  }
`;

export default BuyRent;

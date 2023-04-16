import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const BuyRent = styled.div`
  position: absolute;
  transform: translateY(173px);

  div.buy-rent__container {
    background-color: ${colors.pink};
    color: ${colors.white};
    min-width: 110px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 9px;

    div.icon--buy_rent {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 18px;
        height: 18px;
      }
    }

    span.operation__content {
      ${typography.body.body2}
    }
  }
`;

export default BuyRent;

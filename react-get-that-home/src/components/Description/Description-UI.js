import styled from '@emotion/styled';
import { typography } from '../../styles/typography';
import { colors } from '../../styles/colors';

const Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px;
  height: 160px;
  padding: 10px 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

// container of price and property type
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div.price-cont {
    display: flex;
    align-items: center;
    gap: 8px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 26px;
        width: 26px;
        &.small {
          width: 18px;
          height: 18px;
        }
      }
    }

    span {
      &.montly-rent {
        ${typography.head.headline5}
        color: ${colors.darkGray}
      }
      &.property-type {
        ${typography.body.body1}
      }
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100%;
  margin: 8px 0;
  gap: 16px;

  p {
    ${typography.subtitle.subtitle1}
    color: ${colors.darkGray}
  }

  div.services {
    display: flex;
    align-items: center;
    gap: 15px;

    div.service {
      display: flex;
      gap: 8px;

      img {
        width: 20px;
        height: 20px;
      }

      span {
        margin: auto;
      }

      svg.heart-icon {
        width: 20px;
        height: 20px;
        color: ${colors.pink};
      }
    }
  }
`;

export { InfoContainer, PriceContainer, Data };

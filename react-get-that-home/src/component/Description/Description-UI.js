import styled from '@emotion/styled';

const DescriptionCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 10px 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  p {
    margin-bottom: 25px;
  }
`;

// container of price and property type
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-content: center;
    gap: 8px;

    div {
      display: flex;
      align-content: center;
      justify-content: center;
      margin: auto;

      img {
        height: 26px;
        width: 26px;
      }
    }

    span {
      margin: auto;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  gap: 16px;

  div {
    display: flex;
    align-content: center;
    margin: auto 0;
    gap: 6px;

    img {
      width: 20px;
      height: 20px;
    }

    span {
      margin: auto;
    }
  }
`;

export { InfoContainer, PriceContainer, DescriptionCont };

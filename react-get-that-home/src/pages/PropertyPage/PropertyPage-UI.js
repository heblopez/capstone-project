import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

const MainSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`;

const SideBar = styled.div`
  width: 15%;
`;

const Wrapper = styled.div`
  position: relative;
  margin: 0;
  width: 85%;
  height: auto;
  min-width: 600px;
  padding: 32px 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div.container-photos {
    display: flex;
    width: 100%;
    min-width: 512px;
    height: auto;
    max-height: 512px;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  div.title-and-price {
    width: 100%;
    display: flex;
    margin: 1rem 0;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;

    p.text-xl {
      font-size: 36px;
      font-weight: 400;
      line-height: 48px;
      letter-spacing: 0.25px;
      color: ${colors.darkGray};
    }

    p.city-text {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.15px;
      color: ${colors.gray};
    }

    div.container-price {
      display: flex;
      flex-direction: column;

      div.price-dollar {
        display: flex;
        align-items: center;
        gap: 12px;

        svg.dollar-icon {
          color: ${colors.grey};
          size: 40px;
        }
      }
    }

    span.text-maintanance {
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0.15px;
      color: ${colors.gray};
      align-self: flex-end;
    }
  }

  div.info-property {
    width: 100%;
    display: flex;
    padding: 1rem 0;
    justify-content: space-between;
    gap: 1rem;
    border-width: 1px 0;
    border-style: solid;
    border-color: ${colors.darkpink2};

    div.info-detail {
      display: flex;
      align-items: center;
      gap: 0.4em;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      color: ${colors.gray};

      svg.icon-info {
        color: ${colors.gray};
        size: 24px;
      }

      img.icon-info {
        width: 24px;
      }
    }
  }

  div.about-location {
    width: 100%;
    margin-top: 16px;

    h2 {
      font-weight: 500;
      font-size: 22px;
      line-height: 28px;
      letter-spacing: 0.15px;
      color: ${colors.darkpink2};
      margin: 8px 0;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  div.map {
    width: 100%;
    height: 760px;
  }
`;

export { MainSection, SideBar, Wrapper, MapContainer };

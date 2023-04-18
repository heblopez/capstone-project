import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles";

const MainSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const SideBar = styled.div`
  div.btn-contact {
    display: flex;
    flex-direction: column;
    gap: 20px;

    button {
      width: 215px;
    }
    div.add--favorites {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;

      svg {
        width: 20px;
        height: 20px;

        :hover {
          transform: scale(1.3);
        }
      }

      p.p__favorite {
        ${typography.caption}
      }
    }
  }

  div.btn-edit_property {
    margin-top: 37px;

    a.edit-btn {
      text-decoration: none;

      button {
        width: 198px;
      }
    }
  }
`;

const Wrapper = styled.div`
  margin: 32px 16px;
  width: 830px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div.container-photos {
    display: flex;
    width: 100%;
    height: auto;

    div.slideshow {
      width: 100%;
      height: 100%;
      aspect-ratio: calc(16 / 9);
      position: relative;
      overflow: hidden;
      border-radius: 16px;

      img.slides {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      button {
        padding: 4px;
        font-size: 18px;
        width: 40px;
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: ${colors.darkGray};
        border: none;
        cursos: pointer;
        text-align: center;
        color: ${colors.white};
      }

      button:hover {
        background-color: ${colors.pink};
      }

      button.prev {
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
      }

      button.next {
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
      }
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
  }
`;

const MapContainer = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  div.map {
    width: 100%;
    height: 760px;
  }
`;

export { MainSection, SideBar, Wrapper, MapContainer };

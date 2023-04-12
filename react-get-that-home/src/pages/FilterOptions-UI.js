import styled from '@emotion/styled';
import { colors } from '../styles/colors';

const SectionFind = styled.div`
  width: 100%;
  padding: 32px 120px;
  z-index: -10;

  div.container {
    padding: 0 32px;

    div.section-list {
      padding: 16px 40px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
  }
`;

const BarOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div.input-search {
    input {
      border: none;
      width: 100%;
      height: 36px;
      border: 1px solid ${colors.pink};
      border-radius: 8px;
      padding: 8px;
      background-color: transparent;
      margin: 0;

      :focus {
        outline: none;
        border: 1px solid #eb6390;
      }

      ::placeholder {
        color: ${colors.lightGray};
      }

      &.holder {
        padding-left: 36px;
      }
    }
  }

  div.btns {
    display: flex;
    align-items: center;
    gap: 8px;

    div.price {
      button {
        width: 78px;
      }
    }

    div.property-type {
      button {
        width: 162px;
      }
    }

    div.beds-baths {
      button {
        width: 147px;
      }
    }

    div.more {
      button {
        width: 109px;
      }
    }

    // modal where rendering then
    div.price-modal {
      position: relative;
      transform: translateX(-175px) translateY(17px);
    }

    div.property-modal {
      position: relative;
      transform: translateX(-188px) translateY(17px);
    }

    div.bb-modal {
      position: relative;
      transform: translateX(-200px) translateY(17px);
    }

    div.more-modal {
      position: relative;
      transform: translateX(-160px) translateY(17px);
    }
  }

  div.select-BR {
    div.buying-renting {
      button {
        text-transform: lowercase;
        text-transform: capitalize;
      }
    }

    div.buy-rent_modal {
      position: relative;
    }
  }
`;

export { BarOption, SectionFind };

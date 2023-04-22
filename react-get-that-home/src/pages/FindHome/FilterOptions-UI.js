import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

const SectionFind = styled.div`
  width: 100%;

  div.container-find__page {
    max-width: 1200px;
    margin: auto;
    padding: 32px 20px;

    p.count_properties {
      margin-top: 20px;
      padding-left: 30px;
    }

    div.section-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    }

    div.pages {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin: 0 auto;
      width: 219px;
      height: 31px;

      svg {
        width: 20px;
        height: 20px;
      }

      div.page {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 31px;
        height: 31px;
        border: 1px solid ${colors.lightGray};
        border-radius: 3px;
      }
    }
  }
`;

const BarOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;

  div.input-search {
    input {
      border: none;
      height: 36px;
      border: 1px solid ${colors.pink};
      border-radius: 8px;
      padding: 8px;
      background-color: transparent;
      margin: 0;
      max-width: 240px;

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
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 8px;

    div.price {
      button {
        max-width: 141px;
      }
    }

    div.property-type {
      button {
        min-width: 222px;
      }
    }
    
    div.beds-baths {
      button {
        min-width: 135px;
        padding: 0;
      }
    }

    div.more {
      button {
        max-width: 109px;
      }
    }

    // modal where rendering then
    div.price-modal {
      position: relative;
      transform: translateX(-175px) translateY(17px);
    }

    div.property-modal {
      position: relative;
      transform: translateX(-232px) translateY(17px);
    }

    div.bb-modal {
      position: relative;
      transform: translateX(-220px) translateY(17px);
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
        max-width: 185px;
        border-radius: 8px;
      }
    }

    div.buy-rent_modal {
      position: relative;
    }
  }
`;

export { BarOption, SectionFind };

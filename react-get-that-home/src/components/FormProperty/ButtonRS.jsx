import React from 'react';
import styled from '@emotion/styled';
import { typography } from '../../styles/typography';
import { colors } from '../../styles/colors';
import { useProp } from '../../context/PropertyContext';

const ButtonCont = styled.div`
  p {
    ${typography.overline}
  }

  div.btns {
    width: 101px;

    button {
      height: 36px;
      border: none;
      background-color: ${colors.white};
      text-transform: capitalize;
      color: ${colors.gray};

      &.active,
      :active {
        background-color: ${colors.pink};
        color: #fff;

        :nth-of-type(1) {
          border-right: 1px solid ${colors.lightGray};
        }

        :nth-of-type(2) {
          border-left: 1px solid ${colors.lightGray};
        }
      }

      :nth-of-type(1) {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        border-bottom: 1px solid ${colors.lightGray};
        border-left: 1px solid ${colors.lightGray};
        border-top: 1px solid ${colors.lightGray};
      }

      :nth-of-type(2) {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-bottom: 1px solid ${colors.lightGray};
        border-right: 1px solid ${colors.lightGray};
        border-top: 1px solid ${colors.lightGray};
      }
    }
  }
`;

const ButtonRS = () => {
  const { handleChange, rentOrSale } = useProp();

  return (
    <ButtonCont>
      <p>operation type</p>
      <div className='btns'>
        <button
          onClick={handleChange}
          className={`${rentOrSale === 'rent' && 'active'}`}
        >
          rent
        </button>

        <button
          onClick={handleChange}
          className={`${rentOrSale === 'sale' && 'active'}`}
        >
          sale
        </button>
      </div>
    </ButtonCont>
  );
};

export default ButtonRS;

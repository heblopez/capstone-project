import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

const BuyRent = styled.div`
  position: absolute;

  div.container {
    width: 161px;
    border: 1px solid ${colors.pink};
    margin-top: 2px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 0;
    background-color: ${colors.white};

    div.inputs {
      display: flex;
      flex-direction: column;
      padding: 6px;

      div.input {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 6px;
        padding: 6px;

        :hover {
          background-color: ${colors.shallowpink};
        }

        input[type='checkbox'] {
          -webkit-appearance: none;
          appearance: none;
          background-color: #fff;
          margin: 0;
          width: 20px;
          height: 20px;
          border-radius: 0px;
          border: 1px solid ${colors.pink};
          display: grid;
          place-content: center;
        }

        input[type='checkbox']::before {
          content: '';
          width: 0.65em;
          height: 0.65em;
          transform: scale(0);
          transition: 120ms transform ease-in-out;
          box-shadow: inset 1em 1em ${colors.pink};
        }

        input[type='checkbox']::before {
          transform-origin: bottom left;
          background-color: red;
          clip-path: polygon(
            14% 44%,
            0 65%,
            50% 100%,
            100% 16%,
            80% 0%,
            43% 62%
          );
        }

        input[type='checkbox']:checked::before {
          transform: scale(1);
          background-color: blue;
        }
      }
    }
  }
`;

export default BuyRent;

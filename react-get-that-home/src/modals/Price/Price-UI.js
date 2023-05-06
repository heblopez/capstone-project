import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const PrimeModal = styled.div`
  position: absolute;

  div.container {
    width: 247px;
    height: 128px;
    padding: 8px;
    margin-top: 10px;
    border-radius: 8px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    background-color: ${colors.white};

    form {
      div.form {
        display: flex;
        flex-direction: column;
        gap: 8px;

        div.input-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;

          p.label {
            ${typography.overline}
          }

          div.inputs {
            display: flex;
            align-items: center;
            gap: 8px;

            div.min-max {
              input.min,
              input.max {
                position: relative;
                min-width: 102px;
                height: 36px;
                padding-left: 35px;
              }

              p.error {
                position: absolute;
                z-index: 10;
                margin-top: 40px;
              }
            }
          }
        }
      }

      div.btn-done {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        button {
          width: 60px;
          height: 32px;
          border-radius: 8px;
          margin-top: 10px;
        }
      }
    }
  }
`;

export default PrimeModal;

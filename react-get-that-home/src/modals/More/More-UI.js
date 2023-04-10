import styled from '@emotion/styled';
import { typography } from '../../styles/typography';
import { colors } from '../../styles/colors';

const ModalMore = styled.div`
  div.container {
    position: absolute;
    width: 247px;
    height: 168px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 8px;
    margin-top: 10px;
    background-color: ${colors.white};

    form {
      div.form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 16px;

        div.minmax-container {
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
              }

              p.error {
                position: absolute;
                z-index: 10;
                margin-top: 40px;
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
          }
        }
      }
    }
  }
`;

export default ModalMore;

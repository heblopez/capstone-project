import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const ModalProperty = styled.div`
  position: absolute;

  div.container {
    min-width: 211px;
    height: 116px;
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

        p.label {
          ${typography.overline}
        }

        div.inputs-checkbox {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }
      }

      div.btn-done {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 10px;

        button {
          width: 60px;
          height: 32px;
          border-radius: 8px;
        }
      }
    }
  }
`;

export default ModalProperty;

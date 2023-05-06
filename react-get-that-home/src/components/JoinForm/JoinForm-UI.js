import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const FormJoin = styled.div`
  width: 356px;
  height: 332px;

  div.form {
    width: 100%;
    padding: 16px;
    background-color: ${colors.white};
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    p.title-create {
      ${typography.head.headline5}
      text-align: center;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    div {
      input {
        width: 100%;
      }
    }

    div.btn-create-account {
      button {
        width: 200px;
        height: 40px;
        margin: 0 auto;
      }
    }
  }
`;

export default FormJoin;

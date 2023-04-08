import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const ContainerModal = styled.div`
  background-color: rgb(51, 51, 51, 0.5);
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;

  div.content-modal {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 388px;
    min-height: 256px;
    border-radius: 8px;
    padding: 16px;
    margin: 35vh auto;
    background-color: ${colors.white};
    
    p.title-login {
      text-align: center;
      ${typography.head.headline5}
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 8px;

      div.btn-login-modal {
        button {
          width: 112px;
          height: 40px;
          margin: 0 auto;
        }
      }
    }
  }
`;

export default ContainerModal;

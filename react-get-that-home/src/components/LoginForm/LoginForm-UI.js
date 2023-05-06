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

    button.close {
      position: absolute;
      right: 1.3%;
      top: 1.3%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      border: none;
      background-color: ${colors.darkpink2};
      border-radius: 50%;

      svg {
        width: 20px;
        height: 20px;
        color: ${colors.white};
        :hover {
          transform: scale(1.1);
        }
      }
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

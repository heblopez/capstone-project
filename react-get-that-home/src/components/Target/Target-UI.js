import styled from '@emotion/styled';
import { colors } from '../../styles';

const TargerCont = styled.div`
  width: 290px;
  height: 248px;
  padding: 32px 16px;

  div.container {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    min-width: 226px;
    min-height: 184px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 16px;

    h3.title-information {
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 28px;
    }

    p {
      text-align: center;
    }

    div.btn-login {
      button {
        min-width: 112px;
      }
    }

    div.information-contact {
      p.information-title,
      p.landlord-contact {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;

        &.information-title {
          color: ${colors.darkpink2};
        }
      }
    }
  }
`;

export default TargerCont;

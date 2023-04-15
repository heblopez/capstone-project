import styled from '@emotion/styled';

const TargerCont = styled.div`
  max-width: 290px;
  max-height: 248px;
  padding: 32px;

  div.container {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 16px;

    p {
      text-align: center;
    }

    div.btn-login {
      button {
        width: 112px;
      }
    }
  }
`;

export default TargerCont;

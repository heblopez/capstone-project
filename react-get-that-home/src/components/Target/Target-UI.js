import styled from '@emotion/styled';

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

    p {
      text-align: center;
    }

    div.btn-login {
      button {
        min-width: 112px;
      }
    }
  }
`;

export default TargerCont;

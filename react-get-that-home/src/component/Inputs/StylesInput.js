import styled from '@emotion/styled';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  input,
  select {
    border: none;
    width: 100%;
    height: 36px;
    border: 1px solid #f48fb1;
    border-radius: 8px;
    padding: 8px;
    background-color: transparent;
    margin: 0;

    :focus {
      outline: none;
      border: 1px solid #eb6390;
    }

    ::placeholder {
      color: #8e8e8e;
    }

    &.holder {
      padding-left: 36px;
    }

    ::part(list) {
      color: red;
    }
  }

  p {
    color: #bf5f82;
  }
`;

const IconContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  svg {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 10px;
    top: 50%;
    transform: translateY(-160%);
    color: #8e8e8e;
  }
`;

export { InputContainer, IconContainer };

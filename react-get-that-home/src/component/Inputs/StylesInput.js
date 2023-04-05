import styled from "@emotion/styled";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  input {
    border: none;
    padding: 8px;
    height: 36px;
    width: 100%;
    border: 1px solid #f48fb1;
    border-radius: 8px;

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
  }

  p {
    color: #bf5f82;
  }
`;

const IconContainer = styled.div`
  position: relative;

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

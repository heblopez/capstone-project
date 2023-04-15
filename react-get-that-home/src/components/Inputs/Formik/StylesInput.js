import styled from '@emotion/styled';
import { typography } from '../../../styles/typography';
import { colors } from '../../../styles/colors';

// inputs types: text, number, password.
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    ${typography.overline}
    padding: 0 2px;
  }

  input,
  select,
  textarea {
    border: none;
    width: 100%;
    height: 36px;
    border: 1px solid ${colors.pink};
    border-radius: 8px;
    padding: 8px;
    background-color: transparent;
    margin: 0;
    color: ${colors.lightGray};
    background-color: ${colors.white};
    ${typography.body.body2}

    :focus {
      outline: none;
      border: 1px solid #eb6390;
    }

    ::placeholder {
      color: ${colors.lightGray};
    }

    &.holder {
      padding-left: 36px;
    }
  }

  p.error {
    color: ${colors.darkpink2};
    ${typography.caption}
  }

  textarea.textarea {
    height: 76px;
  }
`;

// container for icons(svg)
const IconContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
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

// inputs type: checkbox & radio
const ContainerCR = styled.div`
  label {
    ${typography.body.body2}
    color:${colors.gray};
    display: flex;
    align-items: center;

    &.form-control {
      display: grid;
      grid-template-columns: 1em auto;
      gap: 0.5em;

      input[type='radio'],
      input[type='checkbox'] {
        -webkit-appearance: none;
        appearance: none;
        background-color: #fff;
        margin: 0;
        font: inherit;
        color: currentColor;
        width: 1.15em;
        height: 1.15em;
        border: 1px solid ${colors.pink};
        display: grid;
        place-content: center;
      }

      input[type='radio'] {
        border-radius: 50%;
      }

      input[type='radio']::before,
      input[type='checkbox']::before {
        content: '';
        width: 0.65em;
        height: 0.65em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em ${colors.pink};
      }

      input[type='radio']::before {
        border-radius: 50%;
      }

      input[type='checkbox']::before {
        transform-origin: bottom left;
        background-color: red;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      }

      input[type='radio']:checked::before,
      input[type='checkbox']:checked::before {
        transform: scale(1);
        background-color: blue;
      }

      input[type='radio']:focus {
        outline: max(2px, 0.15em) solid #bf5f82;
        border: none;
      }
    }
  }
`;

export { InputContainer, IconContainer, ContainerCR };

import styled from '@emotion/styled';
import { typography } from '../../../styles/typography';
import { colors } from '../../../styles/colors';

const InpuytStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  label.overline {
    ${typography.overline}
    padding: 0 2px;
  }

  div.input {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 6px;

    label.checkbox-radio {
      ${typography.body.body2}
    }

    input.input-general {
      border: none;
      width: 100%;
      height: 36px;
      border: 1px solid ${colors.pink};
      border-radius: 8px;
      padding: 8px;
      background-color: transparent;
      margin: 0;

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

    input[type='checkbox'],
    input[type='radio'] {
      -webkit-appearance: none;
      appearance: none;
      background-color: #fff;
      margin: 0;
      width: 20px;
      height: 20px;
      border-radius: 0px;
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
`;

export default InpuytStyle;

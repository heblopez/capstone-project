import styled from '@emotion/styled';
import { typography } from '../../../styles/typography';
import { colors } from '../../../styles/colors';

const InpuytStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  label {
    ${typography.overline}
    padding: 0 2px;
  }

  input {
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
`;

export default InpuytStyle;

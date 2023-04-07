import styled from '@emotion/styled';
import { typography } from '../../../styles/typography';
import { colors } from '../../../styles/colors';

const SelectCnt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1px;

  label {
    ${typography.overline}
    color: ${colors.gray};
    padding-left: 8px;
  }

  select {
    ${typography.body.body1}
    color: ${colors.darkGray};
    border: none;
    width: 150px;
    padding: 8px 2px;

    :focus {
      outline: none;
      border: 1px solid ${colors.pink};
      border-radius: 8px;
    }
  }
`;
export { SelectCnt };

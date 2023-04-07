import styled from '@emotion/styled';
import { typography } from '../../../../styles/typography';
import { colors } from '../../../../styles/colors';

const ContainerSource = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  &.row h3 {
    text-align: center;
  }

  h3 {
    ${typography.caption}
    color: ${colors.gray};
  }
`;

const Source = styled.div`
  display: flex;
  flex-direction: column;
  &.row {
    flex-direction: row;
    gap: 10px;
  }
`;

export { ContainerSource, Source };

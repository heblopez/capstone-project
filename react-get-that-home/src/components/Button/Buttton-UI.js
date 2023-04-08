import styled from '@emotion/styled';
import { typography } from '../../styles/typography';
import { colors } from '../../styles/colors';

const StyleButton = styled.button`
  ${typography.button};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${colors.white};
  border: none;
  cursor: pointer;

  //icon
  svg {
    width: 20px;
    height: 20px;
  }

  // State: default, Type: ghost, Size: default
  &.btn--ghost-default {
    width: 161px;
    height: 40px;
    padding: 8px 16px;
    border-radius: 16px;
  }

  // State: default, Type: ghost, Size: size
  &.btn--ghost-sm {
    width: 145px;
    height: 32px;
    padding: 4px 8px;
    border-radius: 8px;
  }

  // State: default, Type: ghost, Size: large
  &.btn--ghost-lg {
    width: 177px;
    height: 56px;
    padding: 4px 8px;
    padding: 16px 24px;
    border-radius: 16px;
  }

  // State: hover, Type: ghost
  &.btn--ghost-default,
  &.btn--ghost-sm,
  &.btn--ghost-lg {
    :hover {
      background: ${colors.shallowpink};
    }
  }

  // State: default, Type: primary, size: default
  &.btn--primary-default {
    width: 161px;
    height: 40px;
    border-radius: 16px;
    padding: 8px 16px;
  }

  // State: default, Type: primary, size: small
  &.btn--primary-sm {
    width: 145px;
    height: 32px;
    border-radius: 8px;
    padding: 4px 8px;
  }

  // State: default, Type: primary, size: large
  &.btn--primary-lg {
    width: 177px;
    height: 56px;
    border-radius: 16px;
    padding: 16px 24px;
  }

  // Type: primary bg & color
  &.btn--primary-default,
  &.btn--primary-sm,
  &.btn--primary-lg {
    background: #f48fb1;
    color: ${colors.white};
  }

  // State: hover, Type: primary
  &.btn--primary-default,
  &.btn--primary-sm,
  &.btn--primary-lg {
    :hover {
      background: #bf5f82;
    }
  }

  // State: default, Type: secundary, size: default
  &.btn--secundary-default {
    width: 161px;
    height: 40px;
    border: 1px solid ${colors.pink};
    border-radius: 16px;
    padding: 8px 16px;
  }

  // State: default, Type: secundary, size: small
  &.btn--secundary-sm {
    width: 145px;
    height: 32px;
    border-radius: 8px;
    padding: 4px 8px;
  }

  // State: default, Type: secundary, size: large
  &.btn--secundary-lg {
    width: 177px;
    height: 56px;
    border-radius: 16px;
    padding: 16px 24px;
  }

  &.btn--secundary-default,
  &.btn--secundary-sm,
  &.btn--secundary-lg {
    border: 1px solid ${colors.pink};
    color: ${colors.gray};
  }

  // State: hover, Type: secundary
  &.btn--secundary-default,
  &.btn--secundary-sm,
  &.btn--secundary-lg {
    :hover {
      background: ${colors.shallowpink};
      color: ${colors.darkGray};
    }
  }

  // disabled button
  &.btn--ghost-default,
  &.btn--ghost-sm,
  &.btn--ghost-lg,
  &.btn--primary-default,
  &.btn--primary-sm,
  &.btn--primary-lg,
  &.btn--secundary-default,
  &.btn--secundary-sm,
  &.btn--secundary-lg {
    :disabled {
      color: inherit;
      opacity: 0.4;
      cursor: not-allowed;
      background: ${colors.shallowGray};
      border: none;
    }
  }
`;

export { StyleButton };

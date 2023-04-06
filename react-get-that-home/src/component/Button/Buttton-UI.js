import styled from '@emotion/styled';

const StyleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  background-color: var(--gray-300);
  border-radius: 8px;
  font-weight: var(--semibold);
  border: none;
  text-transform: uppercase;

  svg {
    width: 24px;
    height: 24px;
  }

  :hover {
    background-color: #bf5f82;
    cursor: pointer;
  }

  :active {
    background-color: #999;
  }

  :focus {
    outline: 1.5px solid #bf5f82;
  }

  :disabled {
    color: inherit;
    opacity: 0.4;
    cursor: not-allowed;
  }

  :disabled:active {
    background-color: #bf5f82;
  }

  //  ghost
  &.btn--ghost {
    width: 161px;
    height: 40px;
    padding: 8px 16px;
    border-radius: 16px;
  }

  //ghost small
  &.btn--ghost-sm {
    width: 145px;
    height: 32px;
    padding: 4px 8px;
  }

  // ghost large
  &.btn--ghost-lg {
    width: 177px;
    height: 56px;
    padding: 16px 24px;
    border-radius: 16px;
  }

  &.btn--ghost,
  &.btn--ghost-sm,
  &.btn--ghost-lg {
    :hover {
      background: rgba(244, 143, 177, 0.15);
    }

    :disabled {
      background: rgba(97, 97, 97, 0.15);
    }
  }

  // primary
  &.btn--primary {
    width: 161px;
    height: 40px;
    padding: 8px 16px;
    border-radius: 16px;
    color: #fff;
  }

  // primary small
  &.btn--primary-sm {
    width: 145px;
    height: 32px;
    padding: 4px 8px;
    border-radius: 8px;
    color: #fff;
  }

  // primary large
  &.btn--primary-lg {
    width: 177px;
    height: 56px;
    padding: 16px 24px;
    border-radius: 16px;
    color: #fff;
  }

  &.btn--primary,
  &.btn--primary-sm,
  &.btn--primary-lg {
    background: #f48fb1;
  }
  //hover
  &.btn--primary,
  &.btn--primary-sm,
  &.btn--primary-lg {
    :hover {
      background: #bf5f82;
    }
  }

  // disabled
  &.btn--primary,
  &.btn--primary-sm,
  &.btn--primary-lg {
    :disabled {
      background: rgba(97, 97, 97, 0.15);
      color: #8e8e8e;
    }
  }

  // secundary
  &.btn--secundary {
    width: 161px;
    height: 40px;
  }

  // Secundary small
  &.btn--secundary-sm {
    width: 145px;
    height: 32px;
    border-radius: 8px;
  }

  // secundary large
  &.btn--secundary-lg {
    width: 177px;
    height: 56px;
    border-radius: 16px;
  }

  &.btn--secundary,
  &.btn--secundary-sm,
  &.btn--secundary-lg {
    border: 1px solid #f48fb1;
    color: #616161;
  }

  &.btn--secundary,
  &.btn--secundary-sm,
  &.btn--secundary-lg {
    :hover {
      background: rgba(244, 143, 177, 0.15);
      /* DarkPink */
      border: 1px solid #bf5f82;
      color: #373737;
    }
  }
`;

export { StyleButton };

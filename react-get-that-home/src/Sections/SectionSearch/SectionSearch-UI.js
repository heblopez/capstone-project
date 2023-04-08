import styled from '@emotion/styled';
import { typography } from '../../styles/typography';
import { colors } from '../../styles/colors';

const SearchContainer = styled.div`
  margin-top: 30px;
  position: relative;
  width: 100%;

  img {
    width: 100vw;
    object-fit: cover;
  }

  div.home {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    left: 0;
    right: 0;
    top: 10%;
    transform: translateX(0%);

    h1 {
      ${typography.head.headline2}
    }

    h2 {
      ${typography.head.headline5}
      color: ${colors.gray}
    }

    @media (max-width: 1024px) {
      h1 {
        ${typography.head.headline3}
      }

      h2 {
        ${typography.head.headline6}
      }
    }

    @media (max-width: 768px) {
      top: 23%;
    }

    @media (max-width: 425px) {
      top: 15%;

      h1 {
        ${typography.head.headline4}
      }

      h2 {
        ${typography.caption}
      }
    }
  }
`;

export { SearchContainer };

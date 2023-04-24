import styled from '@emotion/styled';
import { typography } from '../../styles/typography';
import { colors } from '../../styles/colors';

const SearchContainer = styled.div`
  margin-top: 30px;
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: 650px;
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
      font-style: normal;
      font-size: clamp(1.8rem, 3.5vw, 4rem);
      font-weight: 300;
      line-height: 5.5rem;
    }

    h2 {
      font-style: normal;
      font-size: clamp(0.8rem, 1.9vw, 1.5rem);
      font-weight: 400;
      color: ${colors.gray};
    }
  }
`;

export { SearchContainer };

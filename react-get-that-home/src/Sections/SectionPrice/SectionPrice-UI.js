import styled from '@emotion/styled';
import { typography } from '../../styles/typography';
import { colors } from '../../styles/colors';

const SectionBestPrice = styled.div`
  padding: 45px 20px 64px 20px;

  div.container {
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 0 auto;

    p.find {
      ${typography.subtitle.subtitle2}
      text-align: center;
    }

    h3 {
      ${typography.head.headline4}
      color: ${colors.darkpink2}
    }

    div.grid-cards {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    @media (max-width: 412px) {
      h3 {
        ${typography.head.headline5}
      }
    }
  }
`;

export { SectionBestPrice };
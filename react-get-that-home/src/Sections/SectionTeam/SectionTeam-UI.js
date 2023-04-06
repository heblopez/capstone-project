import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const Section = styled.div`
  border-bottom: 1.5px solid ${colors.darkpink2};
  padding: 64px 0;

  div.team-section {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin: 0 auto;
    gap: 26px;
    max-width: 2000px;
  }

  h3 {
    ${typography.head.headline3}
    text-align: center;
    color: ${colors.darkpink2};
  }

  & div.team {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    /* display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
  }
`;

export { Section };

import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 486px;
  margin-top: 20px;
  border-bottom: 1.5px solid ${colors.darkpink2};
  h3 {
    ${typography.head.headline3}
    text-align: center;
    color: ${colors.darkpink2};
  }

  & div.team {
    display: flex;
    margin: 0 auto;
    gap: 32px;
  }
`;

export { Section };

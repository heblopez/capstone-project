import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

const FooterContainer = styled.footer`
  background-color: ${colors.background};

  div.container {
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap:8px;
    padding: 16px 0;
    margin: 0 auto;

    @media (min-width: 1024px) {
      gap: 130px;
      padding: 10px 10px;
      margin-bottom: 10px;
    }

    @media (min-width: 768px) {
      gap: 1px;
      padding: 10px 10px;
      margin-bottom: 10px;
    }
  }
`;

export { FooterContainer };

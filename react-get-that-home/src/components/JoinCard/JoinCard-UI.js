import styled from '@emotion/styled';
import { typography } from '../../styles/typography';
import { colors } from '../../styles/colors';

const Card = styled.div`
  margin: 0;
  padding: 0;
  width: 280px;
  height: 274px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  background-color: ${colors.white};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;

  div.img {
    img {
      margin: 0 auto;
      object-fit: cover;
    }
  }

  p.role {
    ${typography.head.headline6}
  }

  p.you-want {
    ${typography.subtitle.subtitle2}
  }
`;

export default Card;

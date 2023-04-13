import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const CreateSection = styled.div`
  width: 100%;
  height: 312px;
  display: flex;
  background-color: ${colors.shallowpink};

  div.field-create {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 780px;
    margin: 0 auto;
    gap: 32px;

    p {
      ${typography.head.headline4}
      text-align: center;
      padding: 0 30px;
    }

    a {
      text-decoration: none;

      button {
        width: 264px;
        height: 56px;
      }
    }
  }
`;

export { CreateSection };

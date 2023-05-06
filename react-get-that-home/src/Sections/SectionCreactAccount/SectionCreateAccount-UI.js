import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const CreateSection = styled.div`
  width: 100%;
  min-height: 312px;
  padding: 30px;
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
      font-style: normal;
      font-weight: 400;
      font-size: clamp(1.5rem, 2.5vw, 2.25rem);
      line-height: 3rem;
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

import styled from '@emotion/styled';
import { colors, typography } from '../../styles';

const SavedContainer = styled.div`
  margin: 20px;
  width: 100%;
  min-height: 100vh;

  div.container--favorites_seeker {
    max-width: 1200px;
    padding: 0 32px;
    margin: 0 auto;

    div.btns--fav_cont {
      display: flex;
      gap: 6px;

      button {
        ${typography.button}
        padding: 8px;
        border: none;
        background-color: transparent;

        &.favorite {
          border-bottom: 2px solid ${colors.pink};
        }

        &.contacted {
          border-bottom: 2px solid ${colors.pink};
        }
      }
    }
  }
`;

export default SavedContainer;

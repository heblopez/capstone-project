import styled from '@emotion/styled';
import { colors, typography } from '../../styles';

const SavedContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  min-height: 80vh;

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

    div.section {
      display: block;
      padding: 8px;

      div.section-cards {
        padding-top: 10px;

        h3.title-section {
          ${typography.head.headline6}
        }

        div.container-saved_properties {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
        }

        div.pages {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin: 0 auto;
          width: 219px;
          height: 31px;

          svg {
            width: 20px;
            height: 20px;
          }

          div.page {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 31px;
            height: 31px;
            border: 1px solid ${colors.lightGray};
            border-radius: 3px;
          }
        }
      }
    }
  }
`;

export default SavedContainer;

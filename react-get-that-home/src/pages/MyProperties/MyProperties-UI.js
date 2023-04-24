import styled from '@emotion/styled';
import { colors, typography } from '../../styles';

const MyPropContainer = styled.div`
  margin: 64px 0;

  div.container {
    max-width: 1200px;
    min-height: 70vh;
    padding: 0 32px;
    margin: 0 auto;

    div.btn-new_property {
      a {
        text-decoration: none;

        button {
          width: 188px;
        }
      }
    }

    div.btns {
      display: flex;
      gap: 6px;

      button {
        ${typography.button}
        padding: 8px;
        border: none;
        background-color: transparent;

        &.active {
          border-bottom: 2px solid ${colors.pink};
        }

        &.closed {
          border-bottom: 2px solid ${colors.pink};
        }
      }
    }

    div.body {
      div.section {
        min-height: 60vh;

        p.count--props {
          margin-top: 30px;
          padding-left: 40px;
        }

        div.grid,
        div.grid {
          padding: 16px 40px;
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

export default MyPropContainer;

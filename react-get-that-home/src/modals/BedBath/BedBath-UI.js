import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const BedBathModal = styled.div`
  position: absolute;

  div.container {
    padding: 8px;
    width: 270px;
    height: 184px;
    border-radius: 8px;
    margin-top: 10px;
    background-color: ${colors.white};
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div.bebs-content,
    div.baths-content {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 4px;

      p.overline {
        ${typography.overline}
      }

      div.btn-container {
        width: 100%;
        border-radius: 8px;
        color: ${colors.gray};

        button {
          ${typography.body.body2}
          background-color: ${colors.white};
          border: 1px solid ${colors.lightGray};
          cursor: pointer;
          width: 50px;
          height: 36px;

          &.active,
          :active {
            background-color: ${colors.pink};
            color: #fff;
          }

          :nth-of-type(1) {
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
          }

          :nth-of-type(5) {
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
          }
        }
      }
    }

    div.btn-done {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      button {
        width: 60px;
        height: 32px;
        border-radius: 8px;
      }
    }
  }
`;

export default BedBathModal;

import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const Container = styled.div`
  position: relative;
  width: 100%;

  div.call-to-action {
    div.first {
      padding: 64px 0;
      width: 100%;
      height: 352px;
      background-color: ${colors.shallowpink};

      p {
        text-align: center;

        &.first--question {
          ${typography.head.headline5}
        }

        &.second--question {
          ${typography.head.headline2}
        }
      }

      &.first {
      }
    }

    div.second {
      height: 352px;
      border-bottom: 1px solid ${colors.darkpink2};
    }
  }

  div.join-cards {
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%, 0);
    width: 614px;
    height: 274px;

    div.cards {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export default Container;

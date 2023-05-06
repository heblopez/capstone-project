import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const Searching = styled.div`
  width: 800px;
  height: 100px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 8px 24px;
  margin-top: 34px;
  background-color: ${colors.white};

  form {
    display: flex;
    justify-content: space-between;
    width: 100%;

    div.search,
    div.search-input {
      width: 160px;
      padding: 0 8px;
      border-right: 1px solid ${colors.backgroundlight};
      input,
      select {
        border: none;

        :focus {
          border: 1px solid ${colors.pink};
        }
      }
    }

    div.search-input {
      width: 304px;
      padding: 0 8px;
    }

    div.btn {
      width: 105px;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        text-decoration: none;
        button {
          width: 96px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    width: 700px;
    height: 100px;

    div.search,
    div.search-input {
      p {
        ${typography.caption}
      }
    }
  }

  @media (max-width: 425px) {
    width: 400px;
    height: 100px;

    div.search,
    div.search-input {
      p {
        ${typography.caption}
      }
    }
  }
`;

export { Searching };

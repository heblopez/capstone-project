import styled from '@emotion/styled';

const HeaderCtn = styled.header`
  nav.nav {
    width: 100%;
    height: 72px;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2);

    div.navbar {
      max-width: 1200px;
      height: 72px;
      padding: 16px 32px;
      margin: 0 auto;

      div.top-menu {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        div.menu {
          display: flex;
          gap: 16px;

          div.btn-find {
            button {
              width: 170px;
              height: 40px;
            }
          }

          div.btn-join {
            button {
              width: 101px;
              height: 40px;
            }
          }

          div.btn-login {
            button {
              width: 112px;
              height: 40px;
            }
          }

          div.btn-logout {
            button {
              width: 130px;
              height: 40px;
            }
          }

          div.btn-my-properties {
            button {
              width: 200px;
              height: 40px;
            }
          }

          div.btn-save-properties {
            button {
              width: 225px;
              height: 40px;
            }
          }

          div.btn-profile {
            button {
              width: 129px;
              height: 40px;
            }
          }
        }
      }
    }
  }
`;

export default HeaderCtn;

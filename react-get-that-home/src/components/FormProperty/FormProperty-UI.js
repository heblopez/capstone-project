import styled from '@emotion/styled';
import { typography } from '../../styles/typography';
import { colors } from '../../styles/colors';

const WrapperForm = styled.div`
  max-width: 600px;

  form {
    div.form-create {
      display: flex;
      flex-direction: column;
      gap: 16px;

      div.montly-rent,
      div.maintance,
      div.price {
        width: 356px;
      }

      div.property-type {
        display: flex;
        flex-direction: column;
        gap: 4px;

        label.label--property-type {
          ${typography.overline}
        }

        div.checkboxes {
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }

      div.services {
        display: flex;
        align-items: center;
        gap: 16px;

        div.select {
          width: 120px;
        }
      }

      div.check-text {
        display: flex;
        flex-direction: column;
        gap: 4px;

        small {
          ${typography.caption}
          color: ${colors.gray};
        }
      }

      div.charge-photo {
        p.title-photo {
          ${typography.head.headline6}
        }

        p.upload {
          ${typography.overline}
        }

        div.input-upload {
          margin-top: 15px;

          label.upload {
            padding: 10px 10px 10px 35px;
            background-color: ${colors.pink};
            color: #fff;
            border-radius: 5px;
            cursor: pointer;

            :hover {
              background-color: ${colors.darkpink2};
            }

            input[type='file'] {
              display: none;
            }
          }

          label.file-no {
            ${typography.body.body2}
            padding-left: 10px;
            color: ${colors.gray};
          }

          div.icon-upload {
            position: relative;
            display: flex;
            justify-content: center;
            width: 100%;

            svg {
              position: absolute;
              width: 20px;
              height: 20px;
              left: 10px;
              top: 50%;
              transform: translateY(-110%);
              color: ${colors.white};
            }
          }

          div.size-img {
            margin-top: 4px;

            small {
              ${typography.caption}
              color: ${colors.gray};
            }
          }
        }
      }

      div.btn-create__property {
        button {
          width: 274px;
        }
      }
    }
  }
`;

export default WrapperForm;

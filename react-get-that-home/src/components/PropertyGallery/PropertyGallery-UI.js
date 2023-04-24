import styled from "@emotion/styled";
import { colors } from "../../styles";

const GalleryContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;

  div.slideshow {
    width: 100%;
    height: 100%;
    aspect-ratio: calc(16 / 9);
    position: relative;
    overflow: hidden;
    border-radius: 16px;

    img.slides {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    button {
      padding: 4px;
      font-size: 18px;
      width: 40px;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: ${colors.darkGray};
      border: none;
      cursos: pointer;
      text-align: center;
      color: ${colors.white};
    }

    button:hover {
      background-color: ${colors.pink};
    }

    button.prev {
      position: absolute;
      top: 50%;
      left: 16px;
      transform: translateY(-50%);
    }

    button.next {
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%);
    }
  }
`;

export default GalleryContainer;

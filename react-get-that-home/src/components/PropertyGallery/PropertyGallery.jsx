import { useState } from "react";
import GalleryContainer from "./PropertyGallery-UI";

function PropertyGallery({photos}) {
  const [indexImg, setIndexImg] = useState(0);
  
  function prevImg() {
    if (indexImg === 0) {
      setIndexImg(photos.length - 1);
    } else {
      setIndexImg(indexImg - 1);
    }
  }

  function nextImg() {
    if (indexImg === photos.length - 1) {
      setIndexImg(0);
    } else {
      setIndexImg(indexImg + 1);
    }
  }

  return (
    <GalleryContainer>
      <div className='slideshow'>
        <img
          key={indexImg + 1}
          src={photos[indexImg]}
          alt='Property-photo'
          className='slides'
        />
        <button className='prev' onClick={prevImg}>
          &#10094;
        </button>
        <button className='next' onClick={nextImg}>
          &#10095;
        </button>
      </div>
    </GalleryContainer>
  );
}

export default PropertyGallery;

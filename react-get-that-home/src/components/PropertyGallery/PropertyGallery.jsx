import { useState } from "react";
import GalleryContainer from "./PropertyGallery-UI";
import { AnimatePresence, motion } from "framer-motion";

function PropertyGallery({photos}) {
  const [indexImg, setIndexImg] = useState(0);

  const variants = {
    initial: {
      x: 200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -200,
      opacity: 0,
    }
  }
  
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
        <AnimatePresence>
          <motion.img
            key={indexImg + 1}
            src={photos[indexImg]}
            alt={`Property-photo-${indexImg + 1}`}
            className='slides'
            variants={variants}
            animate='animate'
            initial='initial'
            exit='exit'
          />
        </AnimatePresence>
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

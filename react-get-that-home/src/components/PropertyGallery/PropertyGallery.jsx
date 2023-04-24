import { useState } from "react";
import GalleryContainer from "./PropertyGallery-UI";
import { AnimatePresence, motion } from "framer-motion";

function PropertyGallery({photos}) {
  const [indexImg, setIndexImg] = useState(0);
  const [direction, setDirection] = useState(0);

  const variants = {
    initial: (direction) => {
      return {
      x: direction > 0 ? 700 : -700,
      opacity: 0,
      scale:0.5
      }
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      },
      scale:1
    },
    exit: (direction) => {
      return {
      x: direction > 0 ? -700 : 700,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      },
      scale:0.5
      }
    }
  }
  
  function prevImg() {
    setDirection(-1);
    if (indexImg === 0) {
      setIndexImg(photos.length - 1);
    } else {
      setIndexImg(indexImg - 1);
    }
  }

  function nextImg() {
    setDirection(1);
    if (indexImg === photos.length - 1) {
      setIndexImg(0);
    } else {
      setIndexImg(indexImg + 1);
    }
  }

  return (
    <GalleryContainer>
      <div className='slideshow'>
        <AnimatePresence custom={direction}>
          <motion.img
            key={indexImg + 1}
            src={photos[indexImg]}
            alt={`Property-photo-${indexImg + 1}`}
            className='slides'
            variants={variants}
            animate='animate'
            initial='initial'
            exit='exit'
            custom={direction}
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

import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import BedBathModal from './BedBath-UI';

const BedBath = ({ getBB, onClose, initialValues }) => {
  const { bedrooms, bathrooms } = initialValues;
  const items = { Any: 0, '1+': 1, '2+': 2, '3+': 3, '4+': 4 };
  const [data, setData] = useState({
    beds: parseInt(bedrooms) > 0 ? parseInt(bedrooms) : 0,
    baths: parseInt(bathrooms) > 0 ? parseInt(bathrooms) : 0,
  });
  const [activeBed, setActiveBed] = useState(
    (bedrooms > 0 && bedrooms.toString() + '+') || 'Any'
  );
  const [activeBath, setActiveBath] = useState(
    (bathrooms > 0 && bathrooms.toString() + '+') || 'Any'
  );

  function handleBeds(e) {
    e.preventDefault();
    const value = e.target.textContent;
    setData({
      ...data,
      beds: items[value],
    });
  }

  function handleBaths(e) {
    e.preventDefault();
    const value = e.target.textContent;
    setData({
      ...data,
      baths: items[value],
    });
  }

  function handleDone() {
    getBB(data);
    setTimeout(() => {
      onClose();
    }, 500);
  }

  return (
    <BedBathModal>
      <div className='container'>
        <div className='bebs-content'>
          <p className='overline'>Beds</p>
          <div className='btn-container'>
            {Object.keys(items).map((deb, index) => (
              <button
                key={index}
                className={`${activeBed == deb && 'active'}`}
                onClick={(e) => {
                  handleBeds(e);
                  setActiveBed(deb);
                }}
              >
                {deb}
              </button>
            ))}
          </div>
        </div>
        <div className='baths-content'>
          <p className='overline'>baths</p>
          <div className='btn-container'>
            {Object.keys(items).map((bath, index) => (
              <button
                key={index}
                className={`${activeBath == bath && 'active'}`}
                onClick={(e) => {
                  handleBaths(e);
                  setActiveBath(bath);
                }}
              >
                {bath}
              </button>
            ))}
          </div>
        </div>
        <div className='btn-done' onClick={handleDone}>
          <Button>done</Button>
        </div>
      </div>
    </BedBathModal>
  );
};

export { BedBath };

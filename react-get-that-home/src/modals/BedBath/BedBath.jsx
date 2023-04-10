import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import BedBathModal from './BedBath-UI';

const BedBath = () => {
  const items = { Any: 0, '1+': 1, '2+': 2, '3+': 3, '4+': 4 };
  const [data, setData] = useState({ beds: 0, baths: 0 });
  const [activeBed, setActiveBed] = useState('Any');
  const [activeBath, setActiveBath] = useState('Any');

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
    console.log(data);
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
      <div className='result-content'>
        <div className='result'>
          {data.beds}+ BD, {data.baths}+ BA
        </div>
      </div>
    </BedBathModal>
  );
};

export default BedBath;

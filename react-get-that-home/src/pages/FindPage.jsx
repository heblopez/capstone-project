import React, { useState } from 'react';
import Button from '../components/Button/Button';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { SectionFind, BarOption } from './FilterOptions-UI';
import More from '../modals/More/More';
import Input from '../components/Inputs/Input/Input';
import { createPortal } from 'react-dom';
import BedBath from '../modals/BedBath/BedBath';
import Property from '../modals/Property/Property';

const FindPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [showBbth, setShowBbth] = useState(false);
  const [showProperties, setShowProperties] = useState(false);

  function handleShowMore() {
    setShowMore(true);
    setTimeout(() => {
      setShowMore(false);
    }, 8000);
  }

  function handleShowBbth() {
    setShowBbth(true);
    setTimeout(() => {
      setShowBbth(false);
    }, 5000);
  }

  function handleShowProperties() {
    setShowProperties(true);
    setTimeout(() => {
      setShowProperties(false);
    }, 5000);
  }

  return (
    <SectionFind>
      <div className='container'>
        <BarOption>
          <div className='input-search'>
            <Input name={'search'} placeholder='Search by address' />
          </div>
          <div className='btns'>
            <div className='price'>
              <Button>Price</Button>
            </div>
            {/* Property type */}
            <div className='property-type' onClick={handleShowProperties}>
              <Button>property type</Button>
            </div>
            <div className='property-modal'>
              {showProperties &&
                createPortal(
                  <Property />,
                  document.querySelector('.property-modal')
                )}
            </div>

            {/* beds and baths */}
            <div className='beds-baths' onClick={handleShowBbth}>
              <Button>beds & baths</Button>
            </div>
            <div className='bb-modal'>
              {showBbth &&
                createPortal(<BedBath />, document.querySelector('.bb-modal'))}
            </div>

            {/* more button */}
            <div className='more' onClick={handleShowMore}>
              <Button>
                more
                <MdKeyboardArrowDown />
              </Button>
            </div>
            <div className='more-modal'>
              {showMore &&
                createPortal(<More />, document.querySelector('.more-modal'))}
            </div>
          </div>

          {/* buying & renting */}
          <div className='buy-rent'>
            <Button type={'secundary'}>
              Buying & Renting
              <MdKeyboardArrowDown />
            </Button>
          </div>
        </BarOption>

        <div>
          <p>24 Properties found</p>
          <div> Lista of houses</div>
        </div>
      </div>
    </SectionFind>
  );
};

export default FindPage;

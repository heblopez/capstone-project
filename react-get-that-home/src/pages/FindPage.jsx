import React, { useState } from 'react';
import Button from '../components/Button/Button';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { SectionFind, BarOption } from './FilterOptions-UI';
import More from '../modals/More/More';
import Input from '../components/Inputs/Input/Input';
import { createPortal } from 'react-dom';

const FindPage = () => {
  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    console.log('Hola');
    setShowMore(true);
    setTimeout(() => {
      setShowMore(false);
    }, 8000);
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
            <div className='property-type'>
              <Button>property type</Button>
            </div>
            <div className='beds-baths'>
              <Button>beds & baths</Button>
            </div>
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

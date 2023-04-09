import React from 'react';
import Button from '../components/Button/Button';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { SectionFind, BarOption } from './FilterOptions-UI';

const FindPage = () => {
  return (
    <SectionFind>
      <div className='container'>
        <BarOption>
          <div className='input-search'>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search by address'
            />
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
            <div className='more'>
              <Button>
                more
                <MdKeyboardArrowDown />
              </Button>
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

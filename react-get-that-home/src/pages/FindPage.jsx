import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { SectionFind, BarOption } from './FilterOptions-UI';
import More from '../modals/More/More';
import Input from '../components/Inputs/Input/Input';
import { createPortal } from 'react-dom';
import BedBath from '../modals/BedBath/BedBath';
import Property from '../modals/Property/Property';
import Price from '../modals/Price/Price';
import BuyOrRent from '../modals/BuyOrRent/BuyOrRent';
import Properties from '../services/properties-services';
import Card from '../components/Card/Card';

const FindPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [showBbth, setShowBbth] = useState(false);
  const [showProperties, setShowProperties] = useState(false);
  const [showPrice, setShowPrices] = useState(false);
  const [showBuyRent, setShowbuyRent] = useState(false);
  const [buyingRenting, setBuyingRentig] = useState({
    both: true,
    buying: false,
    renting: false,
  });

  const [data, setData] = useState([]);

  function handleChange(e) {
    const name = e.target.name;
    const isChecked = e.target.checked;
    setBuyingRentig({ ...data, [name]: isChecked });
  }

  console.log(buyingRenting);

  function handleShowMore() {
    setShowMore(!showMore);
  }

  function handleShowBbth() {
    setShowBbth(!showBbth);
  }

  function handleShowProperties() {
    setShowProperties(!showProperties);
  }

  function handleShowPrices() {
    setShowPrices(!showPrice);
  }

  function handleShowbuyRent() {
    setShowbuyRent(!showBuyRent);
  }

  useEffect(() => {
    Properties.get()
      .then((prop) => {
        setData(prop);
      })
      .catch(console.log);
  }, []);

  return (
    <SectionFind>
      <div className='container'>
        <BarOption>
          <div className='input-search'>
            <Input name={'search'} placeholder='Search by address' />
          </div>
          <div className='btns'>
            <div className='price' onClick={handleShowPrices}>
              <Button>Price</Button>
            </div>
            <div className='price-modal'>
              {showPrice &&
                createPortal(<Price />, document.querySelector('.price-modal'))}
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
                createPortal(
                  <More onClose={handleShowMore} />,
                  document.querySelector('.more-modal')
                )}
            </div>
          </div>

          {/* buying & renting */}
          <div className='select-BR'>
            <div className='buying-renting' onClick={handleShowbuyRent}>
              <Button type={'secundary'}>
                {((buyingRenting.both &&
                  !buyingRenting.buying &&
                  !buyingRenting.renting) ||
                  (buyingRenting.buying && buyingRenting.renting)) &&
                  'Both'}
                {buyingRenting.buying && !buyingRenting.renting && 'Buying'}
                {buyingRenting.renting && !buyingRenting.buying && 'Renting'}
                {!buyingRenting.both &&
                  !buyingRenting.buying &&
                  !buyingRenting.renting &&
                  'Choose one'}
                <MdKeyboardArrowDown />
              </Button>
            </div>

            <div className='buy-rent_modal'>
              {showBuyRent &&
                createPortal(
                  <BuyOrRent onHandle={handleChange} data={buyingRenting} />,
                  document.querySelector('.buy-rent_modal')
                )}
              {/* <BuyOrRent onHandle={handleChange} data={data} /> */}
            </div>
          </div>
        </BarOption>
        <p>24 Properties found</p>
        <div className='section-list'>
          {data.map((property) => (
            <Card key={property.id} property={property} />
          ))}
        </div>
      </div>
    </SectionFind>
  );
};

export default FindPage;

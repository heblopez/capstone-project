import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Properties from '../../services/properties-services';
import { MainSection, Wrapper, SideBar, MapContainer } from './PropertyPage-UI';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BiBed, BiBath, BiArea, BiEdit } from 'react-icons/bi';
import PetsIcon from '../../assets/pets.svg';
import { useUser } from '../../context/UserContext';
import { useShow } from '../../context/ShowContext';
import Button from '../../components/Button/Button';
import Target from '../../components/Target/Target';
import { AiOutlineUserAdd, AiOutlineHeart } from 'react-icons/ai';

function splitAddress(address) {
  const parts = address ? address.split(',') : '';
  return {
    street: parts[0] || '',
    city: parts[1] || '',
    state: parts[2] || '',
    ...parts,
  };
}

const PropertyPage = () => {
  const { id } = useParams();
  const { user } = useUser();
  const { handleShow } = useShow();
  const [indexImg, setIndexImg] = useState(0);

  const [property, setProperty] = useState({});

  const whoIs = user ? user.role : '';

  useEffect(() => {
    const property = setTimeout(() => {
      Properties.getProp(id)
        .then((prop) => setProperty(prop))
        .catch(console.log);
    }, 0);
    return () => clearTimeout(property);
  }, []);

  const {
    address,
    price,
    monthly_rent,
    maintanance,
    bedrooms,
    bathrooms,
    area,
    pets_allowed,
    description,
    photo_urls,
    type_operation,
  } = property;

  const { street, city, state } = splitAddress(address);

  const geocoder = new window.google.maps.Geocoder();

  if (address) {
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === 'OK') {
        const map = new window.google.maps.Map(document.querySelector('.map'), {
          center: results[0].geometry.location,
          zoom: 17,
        });

        new window.google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
        });
      } else {
        console.log(
          'Geocode was not successful for the following reason: ' + status
        );
      }
    });
  }

  function nextImg() {
    if (indexImg === photo_urls.length - 1) {
      setIndexImg(0);
    } else {
      setIndexImg(indexImg + 1);
    }
  }

  function prevImg() {
    if (indexImg === 0) {
      setIndexImg(photo_urls.length - 1);
    } else {
      setIndexImg(indexImg - 1);
    }
  }

  return (
    <MainSection>
      <Wrapper>
        <div className='container-photos'>
          <div className='slideshow'>
          {photo_urls && <img key={indexImg+1} src={photo_urls[indexImg]} alt='Property-photo' className='slides' />}
          <button className='prev' onClick={prevImg}>&#10094;</button>
          <button className='next' onClick={nextImg}>&#10095;</button>
          </div>
        </div>
        <div className='title-and-price'>
          <div>
            <p className='text-xl'>{street}</p>
            <p className='city-text'>
              {city} {state ? `, ${state}` : null}
            </p>
          </div>
          <div className='container-price'>
            <div className='price-dollar'>
              <RiMoneyDollarCircleLine size='40px' className='dollar-icon' />
              <p className='text-xl'>
                {' '}
                {type_operation === 'rent' ? monthly_rent : price}
              </p>
            </div>
            <span className='text-maintanance'>
              {type_operation === 'rent' ? `+ ${maintanance}` : ''}
            </span>
          </div>
        </div>
        <div className='info-property'>
          <div className='info-detail'>
            <BiBed className='icon-info' />
            {bedrooms} bedrooms
          </div>
          <div className='info-detail'>
            <BiBath className='icon-info' />
            {bathrooms} bathrooms
          </div>
          <div className='info-detail'>
            <BiArea className='icon-info' />
            {area} m2
          </div>
          <div className='info-detail'>
            <img src={PetsIcon} alt='pets-icon' className='icon-info' />
            {pets_allowed ? 'Pets allowed' : 'No pets allowed'}
          </div>
        </div>
        <div className='about-location'>
          <h2>About this property</h2>
          <p>{description}</p>
        </div>
        <div className='about-location'>
          <h2>Location</h2>
          <p>{address}</p>
        </div>
        <MapContainer>
          <div className='map'></div>
        </MapContainer>
      </Wrapper>
      <SideBar>
        {!user && (
          <Target>
            <p>Log in or Join to contact the advertiser</p>
            <div className='btn-login' onClick={handleShow}>
              <Button>
                <AiOutlineUserAdd />
                login
              </Button>
            </div>
          </Target>
        )}

        {whoIs === 'home_seeker' && (
          <Target>
            <div className='btn-contact'>
              <Button>contact advertiser</Button>
              <div className='add--favorites'>
                <AiOutlineHeart />
                <p className='p__favorite'> Add to favorites</p>
              </div>
            </div>
          </Target>
        )}

        {whoIs === 'landlord' && (
          <div className='btn-edit_property'>
            <Link to={`/edit/property/${id}`} className='edit-btn'>
              <Button>
                <BiEdit />
                edit property
              </Button>
            </Link>
          </div>
        )}
      </SideBar>
    </MainSection>
  );
};

export default PropertyPage;

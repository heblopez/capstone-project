import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Properties from '../../services/properties-services';
import { MainSection, Wrapper, SideBar, MapContainer} from './PropertyPage-UI';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import PetsIcon from '../../assets/pets.svg';

const PropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState({});

  useEffect(() => {
    const property = setTimeout(() => {
      Properties.getProp(id)
        .then((prop) => setProperty(prop))
        .catch(console.log);      
    });
    return () => clearTimeout(property);
  }, []);

  const { address, price, monthly_rent, maintanance, bedrooms, bathrooms, area, pets_allowed, description, photo_urls } = property;

  const street = address ? address.split(',')[0].trim() : '';
  const city = address ? address.split(',')[1].trim() : '';
  const state = address ? address.split(',')[2].trim().split(' ')[0] : '';

  const queryMaps = (street + ', ' + city + ', ' + state) || address;

  const geocoder = new window.google.maps.Geocoder();

  if (address) {
    geocoder.geocode({ address: queryMaps }, (results, status) => {
      if (status === 'OK') {
        const map = new window.google.maps.Map(document.querySelector('.map'), {
          center: results[0].geometry.location,
          zoom: 12
        });
  
        new window.google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  return (
    <MainSection>
      <Wrapper>
        <div className='container-photos'>
          <img
          src={photo_urls ? photo_urls[0] : ''}
          alt='Property photo'
          />
        </div>
        <div className='title-and-price'>
          <div>
          <p className='text-xl'>{street}</p>
          <p className='city-text'>{city}, {state}</p>
          </div>
          <div className='container-price'>
            <div className='price-dollar'>
              <RiMoneyDollarCircleLine size="40px" className='dollar-icon' />
              <p className='text-xl'> {monthly_rent}</p>
            </div>
            <span className='text-maintanance'>+ {maintanance}</span>
          </div>
        </div>
        <div className='info-property'>
          <div className='info-detail'>
            <BiBed className='icon-info'/>
            {bedrooms} bedrooms
          </div>
          <div className='info-detail'>
            <BiBath className='icon-info'/>
            {bathrooms} bathrooms
          </div>
          <div className='info-detail'>
            <BiArea className='icon-info'/>
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
          <div className="map">
          </div>
        </MapContainer>
    </Wrapper>
    <SideBar>Boton para login</SideBar>
    </MainSection>
  );
};

export default PropertyPage;

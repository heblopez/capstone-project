import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Properties from '../../services/properties-services';
import { MainSection, Wrapper, SideBar } from './PropertyPage-UI';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BiBed, BiBath, BiArea, BiEdit } from 'react-icons/bi';
import PetsIcon from '../../assets/pets.svg';
import { useUser } from '../../context/UserContext';
import { useShow } from '../../context/ShowContext';
import Button from '../../components/Button/Button';
import Target from '../../components/Target/Target';
import {
  AiOutlineUserAdd,
  AiOutlineHeart,
  AiTwotoneHeart,
} from 'react-icons/ai';
import { ID } from '../../config';
import {
  removeFavorite,
  addFavorite,
  contactAdvertiser,
  getAllPropsContacted,
  getFavorites,
  removeContact,
} from '../../services/favorites-services';
import { colors } from '../../styles';
import { PropertyMap } from '../../components/PropertyMap/PropertyMap';
import PropertyGallery from '../../components/PropertyGallery/PropertyGallery';

function splitAddress(address) {
  if (!address) {
    return {
      street: '',
      city: '',
      state: '',
    };
  }

  const [street = '', city = '', state = '', ...rest] = address
    ? address.split(',')
    : [];
  return {
    street,
    city,
    state,
    ...rest,
  };
}

const PropertyPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const property_id = id;
  const userId = sessionStorage.getItem(ID);
  const { user } = useUser();
  const { handleShow } = useShow();
  const [property, setProperty] = useState({});
  const { landlord_user } = property;
  const [contactedUser, setContactedUser] = useState([]); // data when clicked button contact
  const [favorites, setFavorites] = useState([]);

  const [contactedProp] = contactedUser
    ? contactedUser?.filter((prop) => prop.property_id === property.id)
    : [];

  const [filterPropFav] = favorites
    ? favorites.filter((fav) => fav.property_id === property.id)
    : [];

  const whoIs = useMemo(() => (user ? user.role : ''), [user]);

  // get property
  useEffect(() => {
    const property = setTimeout(() => {
      Properties.getProp(property_id)
        .then((prop) => setProperty(prop))
        .catch(console.log);
    }, 0);
    return () => clearTimeout(property);
  }, []);

  useEffect(() => {
    if (user) {
      getAllPropsContacted(userId)
        .then((all) => setContactedUser(all))
        .catch(console.log);
    }
  }, []);

  useEffect(() => {
    if (user) {
      getFavorites(userId)
        .then((favs) => setFavorites(favs))
        .catch(console.log);
    }
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

  const handleAddToFavorite = useCallback(() => {
    addFavorite(userId, property_id);
    navigate('/saved_properties');
  }, [userId, property_id, navigate]);

  function removeTofavorites() {
    removeFavorite(userId, property_id);
    navigate('/saved_properties');
  }

  function handleContacted() {
    if (user) {
      contactAdvertiser(userId, property_id);
    }
    navigate('/saved_properties');
  }

  function handleRemoveContact() {
    removeContact(userId, property_id);
    navigate('/saved_properties');
  }

  return (
    <MainSection>
      <Wrapper>
        {photo_urls && <PropertyGallery photos={photo_urls} />}
        <div className='title-and-price'>
          <div>
            <p className='text-xl'>{street}</p>
            <p className='city-text'>
              {city}
              {state ? `, ${state}` : null}
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
        <PropertyMap address={address} />
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

        {whoIs === 'home_seeker' && !contactedProp && (
          <Target>
            <div className='btn-contact'>
              <div onClick={handleContacted}>
                <Button>contact advertiser</Button>
              </div>
              <div className='add--favorites'>
                {filterPropFav ? (
                  <AiTwotoneHeart
                    style={{
                      color: `${colors.pink}`,
                      width: '25px',
                      height: '25px',
                    }}
                    onClick={removeTofavorites}
                  />
                ) : (
                  <>
                    <AiOutlineHeart onClick={handleAddToFavorite} />
                    <p className='p__favorite'> Add to favorites</p>
                  </>
                )}
              </div>
            </div>
          </Target>
        )}

        {whoIs === 'landlord' && (
          <div className='btn-edit_property'>
            <Link to={`/edit/property/${property_id}`} className='edit-btn'>
              <Button>
                <BiEdit />
                edit property
              </Button>
            </Link>
          </div>
        )}

        {contactedProp
          ? contactedProp.contacted && (
              <>
                <Target>
                  <h3 className='title-information'>Contact information</h3>
                  <div className='information-contact'>
                    <p className='information-title'>Email</p>
                    <p className='landlord-contact'>{landlord_user.email}</p>
                  </div>
                  <div className='information-contact'>
                    <p className='information-title'>Phone</p>
                    <p className='landlord-contact'>{landlord_user.phone}</p>
                  </div>
                  <div className='remove-contact' onClick={handleRemoveContact}>
                    <Button>Remove contact</Button>
                  </div>
                </Target>
              </>
            )
          : ''}
      </SideBar>
    </MainSection>
  );
};

export default PropertyPage;

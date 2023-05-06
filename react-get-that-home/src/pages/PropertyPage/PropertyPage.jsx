import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Properties from '../../services/properties-services';
import { MainSection, Wrapper, SideBar } from './PropertyPage-UI';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BiBed, BiBath, BiArea, BiEdit } from 'react-icons/bi';
import PetsIcon from '../../assets/pets.svg';
import { useShow } from '../../context/ShowContext';
import Button from '../../components/Button/Button';
import Target from '../../components/Target/Target';
import {
  AiOutlineUserAdd,
  AiOutlineHeart,
  AiTwotoneHeart,
} from 'react-icons/ai';
import { ID, PROPERTY_STORAGE } from '../../config';
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
import User from '../../services/user-services';
import Loading from '../../components/Loading/Loading';

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

function isPropOfLandLord(properties, id) {
  const isMyProp = properties?.some(({ id: propId }) => +propId === +id);
  return isMyProp;
}

const PropertyPage = () => {
  const userId = sessionStorage.getItem(ID);
  const [user, setUser] = useState(null);
  const { id: property_id } = useParams();
  const { properties: landLordProperties } = user ? user : [];
  const { handleShow } = useShow();
  const [property, setProperty] = useState({});
  const { landlord_user: landLord } = property;
  const [contactedUser, setContactedUser] = useState([]); // data when clicked button contact
  const [favorites, setFavorites] = useState([]);

  const isLandLordProp = isPropOfLandLord(landLordProperties, property_id);

  const isContacted = contactedUser?.find(
    (prop) => prop?.property_id === property.id
  )
    ? true
    : false;

  const isFavorite = favorites?.find((fav) => fav?.property_id === property.id)
    ? true
    : false;

  const whoIs = useMemo(() => (user ? user.role : ''), [user]);

  //get user
  useEffect(() => {
    User.getUser(userId)
      .then((u) => setUser(u))
      .catch(console.log);
  }, [userId]);

  // get property
  useEffect(() => {
    Properties.getProp(property_id)
      .then((prop) => {
        setProperty(prop);
        localStorage.setItem(
          PROPERTY_STORAGE,
          JSON.stringify({
            id: prop.id,
            address: prop.address,
            apartment: prop.type_property === 'apartment',
            house: prop.type_property === 'house',
            area: prop.area,
            bathrooms: prop.bathrooms,
            bedrooms: prop.bedrooms,
            description: prop.description,
            maintanance: prop.maintanance,
            monthly_rent: prop.monthly_rent,
            price: prop?.price || '',
            pets_allowed: prop.pets_allowed,
          })
        );
      })
      .catch(console.log);
    return () => clearTimeout(property);
  }, [property_id]);

  // all properties contacted
  useEffect(() => {
    if (user) {
      getAllPropsContacted(userId)
        .then((all) => setContactedUser(all))
        .catch(console.log);
    }
  }, [user]);

  // all favorites properties
  useEffect(() => {
    if (user) {
      getFavorites(userId)
        .then((favs) => setFavorites(favs))
        .catch(console.log);
    }
  }, [user]);

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

  // add to favorites
  const handleAddToFavorite = useCallback(() => {
    addFavorite(userId, property_id)
      .then((favorite) => setFavorites([...favorites, favorite]))
      .catch(console.error);
  }, []);

  // remove from favorites
  function removefavorite() {
    const favorite = favorites.find(
      (favorite) => +favorite.property_id === +property_id
    );

    removeFavorite(userId, +favorite.property_id).then(() => {
      const newFavorites = favorites.filter(
        (favorite) => +favorite.property_id !== +property_id
      );
      setFavorites(newFavorites);
    });
  }

  // add to contacted
  function handleContacted() {
    if (user) {
      contactAdvertiser(userId, property_id)
        .then((contact) => setContactedUser([...contactedUser, contact]))
        .catch(console.error);
    }
  }

  // remove from contacted
  function handleRemoveContact() {
    const contact = contactedUser.find(
      (contacted) => +contacted.property_id === +property_id
    );

    removeContact(userId, +contact.property_id).then(() => {
      const newContacties = contactedUser.filter(
        (contacted) => +contacted.property_id !== +property_id
      );
      setContactedUser(newContacties);
    });
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
        {!user ? (
          user === null ? (
            <Loading />
          ) : (
            <Target>
              <p>Log in or Join to contact the advertiser</p>
              <div className='btn-login' onClick={handleShow}>
                <Button>
                  <AiOutlineUserAdd />
                  login
                </Button>
              </div>
            </Target>
          )
        ) : (
          whoIs === 'landlord' &&
          isLandLordProp && (
            <div className='btn-edit_property'>
              <Link to={`/edit/property/${property_id}`} className='edit-btn'>
                <Button>
                  <BiEdit />
                  edit property
                </Button>
              </Link>
            </div>
          )
        )}

        {whoIs === 'home_seeker' && (
          <>
            <Target>
              <div className='btn-contact'>
                {isContacted ? (
                  <>
                    <h3 className='title-information'>Contact information</h3>
                    <div className='information-contact'>
                      <p className='information-title'>Email</p>
                      <p className='landlord-contact'>{landLord?.email}</p>
                    </div>
                    <div className='information-contact'>
                      <p className='information-title'>Phone</p>
                      <p className='landlord-contact'>{landLord?.phone}</p>
                    </div>

                    <div
                      className='remove-contact'
                      onClick={handleRemoveContact}
                    >
                      <Button>Remove contact</Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div onClick={handleContacted}>
                      <Button>contact advertiser</Button>
                    </div>
                  </>
                )}

                {
                  <div className='add--favorites'>
                    {isFavorite ? (
                      <>
                        <AiTwotoneHeart
                          style={{
                            color: `${colors.pink}`,
                            width: '25px',
                            height: '25px',
                          }}
                          onClick={removefavorite}
                        />
                      </>
                    ) : (
                      <>
                        <AiOutlineHeart onClick={handleAddToFavorite} />
                        <p className='p__favorite'> Add to favorites</p>
                      </>
                    )}
                  </div>
                }
              </div>
            </Target>
          </>
        )}
      </SideBar>
    </MainSection>
  );
};

export default PropertyPage;

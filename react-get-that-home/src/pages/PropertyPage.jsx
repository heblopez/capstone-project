import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Properties from '../services/properties-services';
import Target from '../components/Target/Target';
import Button from '../components/Button/Button';
import { AiOutlineUserAdd, AiOutlineHeart } from 'react-icons/ai';
import { useUser } from '../context/UserContext';
import { useShow } from '../context/ShowContext';

const PropertyPage = () => {
  const { user } = useUser();
  const { handleShow } = useShow();

  const whoIs = user ? user.role : '';

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

  return (
    <div style={{ display: 'flex', gap: '15px' }}>
      <div>
        <img
          src={property.photo_urls ? property.photo_urls[0] : ''}
          alt='Photo'
        />

        <p>{property.address}</p>
        <div>
          <p>$ {property.price}</p>
          <span>+{property.maintanance}</span>
        </div>
        <br />
        <div>
          <span>Beds: {property.bebrooms}</span>
          <span>Baths: {property.bathrooms}</span>
          <span>Area: {property.area}m2</span>
          <span>Pets: {property.pets_allowed}</span>
        </div>
        <div>
          <p>{property.description}</p>
        </div>

        <div>
          <p>Location:</p>
        </div>
      </div>

      {/* Esta parte es para los botones */}
      {/* llamada al login */}
      <div>
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

        {/* cuando el login es home seeker */}
        {whoIs === 'home_seeker' && (
          <Target>
            <div className='btn-contact'>
              <Button>contact advertiser</Button>
              <div>
                <AiOutlineHeart />
                <p> Add to favorites</p>
              </div>
            </div>
          </Target>
        )}

        {/* cuando el login es landlord */}
        {whoIs === 'landlord' && (
          <div className='btn-edit_property'>
            <Link to={`/edit/property/${id}`}>
              <Button>edit property</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyPage;

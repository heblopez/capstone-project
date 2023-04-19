import React, { useEffect, useState } from 'react';
import SavedContainer from './SavedProperties-UI';
import { ID } from '../../config';
import { getFavorites } from '../../services/favorites-services';
import { useProp } from '../../context/PropertyContext';
import Card from '../../components/Card/Card';

const SavedProperties = () => {
  const { properties } = useProp();
  const [section, setSection] = useState('favorite');
  const [favorites, setFavorites] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setSection(e.target.textContent);
  }

  useEffect(() => {
    const userId = sessionStorage.getItem(ID);
    getFavorites(userId)
      .then((favs) => setFavorites(favs))
      .catch(console.log);
  }, []);

  const favs = properties.filter((obj) => {
    return favorites.some((fav) => fav.property_id === obj.id);
  });

  return (
    <SavedContainer>
      <div className='container--favorites_seeker'>
        <div className='btns--fav_cont'>
          <button
            onClick={handleClick}
            className={section === 'favorite' ? 'favorite' : ''}
          >
            favorite
          </button>
          <button
            onClick={handleClick}
            className={section === 'contacted' ? 'contacted' : ''}
          >
            contacted
          </button>
        </div>

        <div>
          {section === 'favorite' ? (
            <div>
              <h3>Favorites</h3>
              <div className='container-saved_properties'>
                <div>
                  {favs?.map((prop) => (
                    <Card property={prop} section={section} />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h3>Contacted</h3>
            </div>
          )}
        </div>
      </div>
    </SavedContainer>
  );
};

export default SavedProperties;

import React, { useEffect, useMemo, useState } from 'react';
import SavedContainer from './SavedProperties-UI';
import { ID } from '../../config';
import {
  getFavorites,
  getcontactAdvertiser,
} from '../../services/favorites-services';
import { useProp } from '../../context/PropertyContext';
import Card from '../../components/Card/Card';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SavedProperties = () => {
  const userId = sessionStorage.getItem(ID);
  const { properties } = useProp();
  const [section, setSection] = useState('favorite');
  const [favorites, setFavorites] = useState([]);
  const [contacted, setContacted] = useState([]);
  const [currentPage, setCurrentPage] = useState({
    favorite: 1,
    contacted: 1,
  });

  function handleClick(e) {
    e.preventDefault();
    setSection(e.target.textContent);
  }

  useEffect(() => {
    getFavorites(userId)
      .then((favs) => setFavorites(favs))
      .catch(console.log);
  }, []);

  useEffect(() => {
    getcontactAdvertiser(userId)
      .then((propContact) => {
        setContacted(propContact);
      })
      .catch(console.log);
  }, [section]);

  const fav = favorites.map((f) => f.property_id);

  const uniqIdProp = [...new Set(fav)];

  const favs = properties.filter((obj) => {
    return favorites.some((fav) => fav.property_id === obj.id);
  });

  const PropContected = properties.filter((obj) => {
    return contacted.some((cont) => cont.property_id === obj.id);
  });

  const pageSize = 9;
  const TotalFavSection = Math.ceil(favs ? favs.length / pageSize : null);
  const TotalcontactedSection = Math.ceil(
    PropContected ? PropContected.length / pageSize : null
  );

  function getPage(arr, page) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return !arr ? [] : arr.slice(startIndex, endIndex);
  }

  function goToPagefavorite(page) {
    setCurrentPage({
      ...currentPage,
      favorite: page,
    });
  }

  function goToPageContacted(page) {
    setCurrentPage({
      ...currentPage,
      contacted: page,
    });
  }

  const favProps = getPage(favs, currentPage.favorite);
  const contProps = getPage(PropContected, currentPage.contacted);

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

        <div className='section'>
          {section === 'favorite' ? (
            <div className='section-cards'>
              <h3 className='title-section'>{favs.length} Properties found</h3>
              <div className='container-saved_properties'>
                {favProps?.map((prop) => (
                  <Card
                    key={prop.id}
                    property={prop}
                    section={section}
                    favorite={uniqIdProp}
                  />
                ))}
              </div>
              <div className='pages'>
                <IoIosArrowBack
                  onClick={() =>
                    currentPage.favorite <= 1
                      ? ''
                      : goToPagefavorite(currentPage.favorite - 1)
                  }
                />
                {Array.from({ length: TotalFavSection }, (_, index) => (
                  <div
                    key={index}
                    className='page'
                    style={{
                      backgroundColor:
                        currentPage.favorite === index + 1
                          ? 'rgba(244, 143, 177, 0.15)'
                          : 'white',
                      color:
                        currentPage.favorite == index + 1 ? '#616161' : 'black',
                    }}
                  >
                    {index + 1}
                  </div>
                ))}
                <IoIosArrowForward
                  onClick={() => {
                    currentPage.favorite >= TotalFavSection
                      ? ''
                      : goToPagefavorite(currentPage.favorite + 1);
                  }}
                />
              </div>
            </div>
          ) : (
            <div className='section-cards'>
              <h3 className='title-section'>
                {PropContected.length} Properties found
              </h3>
              <div className='container-saved_properties'>
                {contProps?.map((prop) => (
                  <Card
                    key={prop.id}
                    property={prop}
                    section={section}
                    favorite={uniqIdProp}
                  />
                ))}
              </div>
              <div className='pages'>
                <IoIosArrowBack
                  onClick={() =>
                    currentPage.contacted <= 1
                      ? ''
                      : goToPageContacted(currentPage.contacted - 1)
                  }
                />
                {Array.from({ length: TotalcontactedSection }, (_, index) => (
                  <div
                    key={index}
                    className='page'
                    style={{
                      backgroundColor:
                        currentPage.contacted === index + 1
                          ? 'rgba(244, 143, 177, 0.15)'
                          : 'white',
                      color:
                        currentPage.contacted == index + 1
                          ? '#616161'
                          : 'black',
                    }}
                  >
                    {index + 1}
                  </div>
                ))}
                <IoIosArrowForward
                  onClick={() => {
                    currentPage.contacted >= TotalcontactedSection
                      ? ''
                      : goToPageContacted(currentPage.contacted + 1);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </SavedContainer>
  );
};

export default SavedProperties;

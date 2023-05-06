import React, { useEffect, useMemo, useState } from 'react';
import SavedContainer from './SavedProperties-UI';
import { ID } from '../../config';
import {
  getFavorites,
  getAllPropsContacted,
} from '../../services/favorites-services';
import { useProp } from '../../context/PropertyContext';
import Card from '../../components/Card/Card';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import NotFound from '../../components/NoFound/NotFound';

const SavedProperties = () => {
  const userId = sessionStorage.getItem(ID);
  const { properties: allProperties } = useProp();
  const [section, setSection] = useState('favorite');
  const [favorites, setFavorites] = useState([]);
  const [contactedProps, setContactedProps] = useState([]);
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
  }, [userId]);

  useEffect(() => {
    getAllPropsContacted(userId)
      .then((propContact) => {
        setContactedProps(propContact);
      })
      .catch(console.log);
  }, [section]);

  const propsId = favorites.map((f) => f.property_id);

  const uniqIdProp = [...new Set(propsId)];

  const favs = allProperties.filter((obj) => {
    return favorites.some((fav) => fav.property_id === obj.id);
  });

  const PropContected = allProperties.filter((obj) => {
    return contactedProps.some((cont) => cont.property_id === obj.id);
  });

  const PAGE_SIZE = 9;
  const TotalFavSection = Math.ceil(favs?.length / PAGE_SIZE);
  const TotalcontactedSection = Math.ceil(
    PropContected ? PropContected.length / PAGE_SIZE : null
  );

  function getPage(arr, page) {
    const startIndex = (page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
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
            !favProps.length ? (
              <NotFound />
            ) : (
              <div className='section-cards'>
                <h3 className='title-section'>
                  {favs.length} Properties found
                </h3>
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
                        ? null
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
                          currentPage.favorite == index + 1
                            ? '#616161'
                            : 'black',
                      }}
                    >
                      {index + 1}
                    </div>
                  ))}
                  <IoIosArrowForward
                    onClick={() => {
                      currentPage.favorite >= TotalFavSection
                        ? null
                        : goToPagefavorite(currentPage.favorite + 1);
                    }}
                  />
                </div>
              </div>
            )
          ) : !PropContected.length ? (
            <NotFound />
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
                      ? null
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
                      ? null
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

import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Card from '../../components/Card/Card';
import User from '../../services/user-services';
import { ID } from '../../config';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import MyPropContainer from './MyProperties-UI';
import NotFound from '../../components/NoFound/NotFound';
import ErrorFallback from '../../errorPage/ErrorPage';
import { Link } from 'react-router-dom';

function filterByActive(data) {
  const onlyActives = data?.filter((prop) => (prop.status ? prop : null));
  return onlyActives;
}

function filterByClosed(data) {
  const onlyClosed = data?.filter((prop) =>
    prop.status === false ? prop : null
  );
  return onlyClosed;
}

const MyProperties = () => {
  const [user, setUser] = useState([]);
  const [section, setSection] = useState('active');
  const [currentPage, setCurrentPage] = useState({
    active: 1,
    closed: 1,
  });

  useEffect(() => {
    const id = sessionStorage.getItem(ID);
    User.getUser(id)
      .then((u) => setUser(u))
      .catch(console.log);
  }, []);

  const propeties = user ? user.properties : [];

  function handleClick(e) {
    e.preventDefault();
    setSection(e.target.textContent);
  }

  const propertiesStatusActive = filterByActive(propeties);
  const propertiesStatusClosed = filterByClosed(propeties);

  const pageSize = 9;
  const TotalInActiveSection = Math.ceil(
    propertiesStatusActive ? propertiesStatusActive.length / pageSize : null
  );

  const TotalInClosedSection = Math.ceil(
    propertiesStatusClosed ? propertiesStatusClosed.length / pageSize : null
  );

  function getPage(arr, page) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return !arr ? [] : arr.slice(startIndex, endIndex);
  }

  function goToPageActive(page) {
    setCurrentPage({
      ...currentPage,
      active: page,
    });
  }

  function goToPageClosed(page) {
    setCurrentPage({
      ...currentPage,
      closed: page,
    });
  }

  const activesProperties = getPage(propertiesStatusActive, currentPage.active);
  const closedProperties = getPage(propertiesStatusClosed, currentPage.closed);

  return (
    <>
      {user === undefined ? (
        <ErrorFallback />
      ) : (
        <MyPropContainer>
          <div className='container'>
            <div className='btn-new_property'>
              <Link to={'/new_property'}>
                <Button type={'primary'}>
                  <AiOutlinePlusCircle />
                  new property
                </Button>
              </Link>
            </div>
            <div className='btns'>
              <button
                onClick={handleClick}
                className={section === 'active' ? 'active' : ''}
              >
                active
              </button>
              <button
                onClick={handleClick}
                className={section === 'closed' ? 'closed' : ''}
              >
                closed
              </button>
            </div>

            <div className='body'>
              {section === 'active' ? (
                !activesProperties.length ? (
                  <NotFound />
                ) : (
                  <div className='section'>
                    <div className='grid'>
                      {activesProperties?.map((prop) => (
                        <Card key={prop.id} property={prop} section={section} />
                      ))}
                    </div>
                    <div className='pages'>
                      <IoIosArrowBack
                        onClick={() =>
                          currentPage.active <= 1
                            ? ''
                            : goToPageActive(currentPage.active - 1)
                        }
                      />
                      {Array.from(
                        { length: TotalInActiveSection },
                        (_, index) => (
                          <div
                            key={index}
                            className='page'
                            style={{
                              backgroundColor:
                                currentPage.active === index + 1
                                  ? 'rgba(244, 143, 177, 0.15)'
                                  : 'white',
                              color:
                                currentPage.active == index + 1
                                  ? '#616161'
                                  : 'black',
                            }}
                          >
                            {index + 1}
                          </div>
                        )
                      )}
                      <IoIosArrowForward
                        onClick={() => {
                          currentPage.active >= TotalInActiveSection
                            ? ''
                            : goToPageActive(currentPage.active + 1);
                        }}
                      />
                    </div>
                  </div>
                )
              ) : !closedProperties.length ? (
                <NotFound />
              ) : (
                <div className='section'>
                  <div className='grid'>
                    {closedProperties?.map((prop) => (
                      <Card key={prop.id} property={prop} section={section} />
                    ))}
                  </div>
                  <div className='pages'>
                    <IoIosArrowBack
                      onClick={() =>
                        currentPage.closed <= 1
                          ? ''
                          : goToPageClosed(currentPage.closed - 1)
                      }
                    />
                    {Array.from(
                      { length: TotalInClosedSection },
                      (_, index) => (
                        <div
                          key={index}
                          className='page'
                          style={{
                            backgroundColor:
                              currentPage.closed === index + 1
                                ? 'rgba(244, 143, 177, 0.15)'
                                : 'white',
                            color:
                              currentPage.closed == index + 1
                                ? '#616161'
                                : 'black',
                          }}
                        >
                          {index + 1}
                        </div>
                      )
                    )}
                    <IoIosArrowForward
                      onClick={() => {
                        currentPage.closed >= TotalInClosedSection
                          ? ''
                          : goToPageClosed(currentPage.closed + 1);
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </MyPropContainer>
      )}
    </>
  );
};

export default MyProperties;

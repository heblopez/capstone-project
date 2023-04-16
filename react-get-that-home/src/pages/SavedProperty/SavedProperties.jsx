import React, { useState } from 'react';
import SavedContainer from './SavedProperties-UI';

const SavedProperties = () => {
  const [section, setSection] = useState('favorite');

  function handleClick(e) {
    e.preventDefault();
    setSection(e.target.textContent);
  }

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

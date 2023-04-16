import React, { useState } from 'react';
import styled from '@emotion/styled';
import { colors, typography } from '../../styles';

const SavedContainer = styled.div`
  margin: 20px;

  div.container {
    max-width: 1200px;
    padding: 0 32px;
    margin: 0 auto;

    div {
      display: flex;
      gap: 6px;

      button {
        ${typography.button}
        padding: 8px;
        border: none;
        background-color: transparent;

        &.favorite {
          border-bottom: 2px solid ${colors.pink};
        }

        &.contacted {
          border-bottom: 2px solid ${colors.pink};
        }
      }
    }
  }
`;

const SavedProperties = () => {
  const [section, setSection] = useState('favorite');

  function handleClick(e) {
    e.preventDefault();
    setSection(e.target.textContent);
  }

  return (
    <SavedContainer>
      <div className='container'>
        <div>
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

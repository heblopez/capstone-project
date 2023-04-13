import React, { useState } from 'react';
import { colors, typography } from '../styles';
import styled from '@emotion/styled';
import Button from '../components/Button/Button';
import { Link } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const MyPropContainer = styled.div`
  margin: 20px;

  div.container {
    max-width: 1200px;
    padding: 0 32px;
    margin: 0 auto;

    div.btn-new_property {
      a {
        text-decoration: none;

        button {
          width: 188px;
        }
      }
    }

    div.btns {
      display: flex;
      gap: 6px;

      button {
        ${typography.button}
        padding: 8px;
        border: none;
        background-color: transparent;

        &.active {
          border-bottom: 2px solid ${colors.pink};
        }

        &.closed {
          border-bottom: 2px solid ${colors.pink};
        }
      }
    }
  }
`;

const MyProperties = () => {
  const [section, setSection] = useState('active');

  function handleClick(e) {
    e.preventDefault();
    setSection(e.target.textContent);
  }

  return (
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

        <div>
          {section === 'active' ? (
            <div>
              <h3>active</h3>
            </div>
          ) : (
            <div>
              <h3>closed</h3>
            </div>
          )}
        </div>
      </div>
    </MyPropContainer>
  );
};

export default MyProperties;

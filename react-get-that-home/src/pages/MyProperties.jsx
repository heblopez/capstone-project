import React, { useState } from 'react';
import { colors, typography } from '../styles';
import styled from '@emotion/styled';
import Button from '../components/Button/Button';
import { Link } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import STORE from '../store/store';
import Card from '../components/Card/Card';

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

    div.body {
      div.section {
        div.grid {
          padding: 16px 40px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
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

        <div className='body'>
          {section === 'active' ? (
            <div className='section'>
              <h3>active</h3>
              <div className='grid'>
                {STORE.landlord.active.map((prop) => (
                  <Card key={prop.id} property={prop} />
                ))}
              </div>
            </div>
          ) : (
            <div className='grid'>
              <h3>closed</h3>
              {STORE.landlord.closed.map((prop) => (
                <Card key={prop.id} property={prop} />
              ))}
            </div>
          )}
        </div>
      </div>
    </MyPropContainer>
  );
};

export default MyProperties;

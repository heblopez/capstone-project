import React from 'react';
import logo from '../../assets/icon-gth.svg';
import BuildBy from './components/BuildBy/BuildBy';
import CopyRight from './components/Copy/CopyRight';
import SourceCode from './components/SourceCode/SourceCode';
import { FooterContainer } from './Footer-UI';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();
  const isLandingPage = pathname !== '/';
  const date = new Date();
  const year = date.getFullYear();
  return (
    <FooterContainer>
      <div className='container'>
        <CopyRight
          LandingPage={isLandingPage}
          logo={logo}
          copy={`© ${year} - Find That Home`}
          codeable={'Codeable - Cohort 9 Final Project'}
        />

        {/* Medio */}
        {isLandingPage ? (
          <BuildBy />
        ) : (
          <SourceCode flexrow={isLandingPage ? '' : 'row'} />
        )}

        {/* Final */}
        {isLandingPage ? (
          <SourceCode />
        ) : (
          <CopyRight codeable={'Codeable - Cohort 9 Final Project'} />
        )}
      </div>
    </FooterContainer>
  );
};

export default Footer;

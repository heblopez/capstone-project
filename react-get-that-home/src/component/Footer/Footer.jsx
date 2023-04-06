import React from 'react';
import logo from '../../assets/icon-gth.svg';
import BuildBy from './components/BuildBy/BuildBy';
import CopyRight from './components/Copy/CopyRight';
import SourceCode from './components/SourceCode/SourceCode';
import { FooterContainer } from './Footer-UI';

const Footer = () => {
  const isLogin = 'user' && true;

  return (
    <FooterContainer>
      {/* Inicio */}

      <CopyRight
        isLogin={isLogin}
        logo={logo}
        copy={'© 202X - Find That Home'}
        codeable={'Codeable - Cohort X Final Project'}
      />

      {/* Medio */}
      {isLogin ? <BuildBy /> : <SourceCode flexrow={isLogin ? '' : 'row'} />}

      {/* Final */}
      {isLogin ? (
        <SourceCode />
      ) : (
        <CopyRight
          isLogin={isLogin}
          codeable={'Codeable - Cohort X Final Project'}
        />
      )}
    </FooterContainer>
  );
};

export default Footer;

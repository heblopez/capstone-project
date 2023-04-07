import React from 'react';
import Content from '../Content/Content';
import { DiRuby } from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr';
import { Source, ContainerSource } from './SourceCode-UI';

const SourceCode = ({ flexrow }) => {
  return (
    <ContainerSource className={flexrow}>
      <h3>Source code:</h3>
      <Source className={flexrow}>
        <Content description={'Ruby on Rails REST API'}>
          <DiRuby />
        </Content>
        <Content description={'React Responsive SPA'}>
          <GrReactjs />
        </Content>
      </Source>
    </ContainerSource>
  );
};

export default SourceCode;

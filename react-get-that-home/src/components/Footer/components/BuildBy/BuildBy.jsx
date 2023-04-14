import React from 'react';
import Content from '../Content/Content';
import { BsGithub } from 'react-icons/bs';
import { Container, Grid } from './Build-UI';

const BuildBy = () => {
  return (
    <Container>
      <h4>Build with ❤️ by:</h4>
      <Grid>
        <a href='https://github.com/CristoperYarleque' target='_blank'>
          <Content description={'Cristoper Yarleque'}>
            <BsGithub />
          </Content>
        </a>
        <a href='https://github.com/heblopez' target='_blank'>
          <Content description={'Heberth Lopez'}>
            <BsGithub />
          </Content>
        </a>
        <a href='https://github.com/Maycol-Knight' target='_blank'>
          <Content description={'Maycol Quispe'}>
            <BsGithub />
          </Content>
        </a>
        <a href='https://github.com/Wilder-wfo' target='_blank'>
          <Content description={'Wilder Flores'}>
            <BsGithub />
          </Content>
        </a>
        <a href='https://github.com/vicjespca' target='_blank'>
          <Content description={'Victor Espinoza'}>
            <BsGithub />
          </Content>
        </a>
        <a href='https://github.com/nestorlls' target='_blank'>
          <Content description={'Paul llanque'}>
            <BsGithub />
          </Content>
        </a>
      </Grid>
    </Container>
  );
};

export default BuildBy;

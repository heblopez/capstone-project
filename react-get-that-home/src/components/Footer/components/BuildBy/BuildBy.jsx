import React from 'react';
import Content from '../Content/Content';
import { BsGithub } from 'react-icons/bs';
import { Container, Grid } from './Build-UI';
import team from '../../../../team/team';

const BuildBy = () => {
  return (
    <Container>
      <h4>Build with ❤️ by:</h4>
      <Grid>
        {team.map((member) => (
          <a key={member.id} href={member.url_git} target='_blank'>
            <Content description={member.name}>
              <BsGithub />
            </Content>
          </a>
        ))}
      </Grid>
    </Container>
  );
};

export default BuildBy;

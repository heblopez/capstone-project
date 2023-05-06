import React from 'react';
import Github from '../../components/Github/Github';
import { Section } from './SectionTeam-UI';
import team from '../../team/team';

const SectionTeam = () => {
  return (
    <Section>
      <div className='team-section'>
        <h3>Meet the team</h3>
        <div className='team'>
          {team?.map((member) => (
            <Github key={member.id} person={member} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SectionTeam;

import React from 'react';
import Github from '../../component/Github/Github';
import { Section } from './SectionTeam-UI';
import avatar from '../../assets/user.svg';

const SectionTeam = () => {
  const team = [
    { name: 'Heberth Lopez', avatar },
    { name: 'Cristoper Yarleque', avatar },
    { name: 'Maycol Quispe', avatar },
    { name: 'Wilder Flores', avatar },
    { name: 'Victor Espinoza', avatar },
    { name: 'Paul llanque', avatar },
  ];

  return (
    <Section>
      <h3>Meet the team</h3>
      <div className='team'>
        {team.map((u) => (
          <Github key={u.name} person={u} />
        ))}
      </div>
    </Section>
  );
};

export default SectionTeam;

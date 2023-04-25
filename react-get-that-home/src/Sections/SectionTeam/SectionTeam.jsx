import React, { useEffect, useState } from 'react';
import Github from '../../components/Github/Github';
import { Section } from './SectionTeam-UI';
import avatar from '../../assets/user.svg';
import { getGithubUser } from '../../services/git-service';

const SectionTeam = () => {
  const members = {
    heberth: 'heblopez',
    cristoper: 'CristoperYarleque',
    maycol: 'Maycol-Knight',
    wilder: 'Wilder-wfo',
    victor: 'vicjespca',
    paul: 'nestorlls',
  };

  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const git = async () => {
      try {
        const promises = Object.values(members).map(async (username) => {
          const response = await getGithubUser(username);
          return response;
        });

        const data = await Promise.all(promises);
        setTeams(data);
      } catch (error) {
        console.error(error);
      }
    };
    git();
  }, []);

  return (
    <Section>
      <div className='team-section'>
        <h3>Meet the team</h3>
        <div className='team'>
          {teams.map((member) => (
            <Github key={member.login} person={member} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SectionTeam;

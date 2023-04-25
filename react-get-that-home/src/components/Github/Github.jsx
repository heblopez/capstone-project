import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { UserCard } from './GitHub-UI';

const Github = ({ person }) => {
  const { name, avatar, url_git, url_linkedin } = person;

  return (
    <UserCard>
      <img src={avatar} alt={name} />
      <p>{name}</p>
      <div>
        <a href={url_git}>
          <BsGithub />
        </a>
        <a href={url_linkedin}>
          <BsLinkedin />
        </a>
      </div>
    </UserCard>
  );
};

export default Github;

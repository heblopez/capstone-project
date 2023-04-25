import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { UserCard } from './GitHub-UI';

const Github = ({ person }) => {
  const { name, avatar_url, html_url } = person;

  return (
    <UserCard>
      <img src={avatar_url} alt={name} />
      <p>{name}</p>
      <div>
        <a href={html_url}>
          <BsGithub />
        </a>
        <a href='/'>
          <BsLinkedin />
        </a>
      </div>
    </UserCard>
  );
};

export default Github;

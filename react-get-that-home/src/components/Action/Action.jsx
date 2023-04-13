import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { ActionComponent } from './Action-UI';
import { useUser } from '../../context/UserContext';

const Action = () => {
  const { user } = useUser();
  const landlord = user ? user.role : '';
  const isActive = landlord === 'landlord' ? 'active' : 'none';

  return (
    <ActionComponent className={isActive}>
      <Link className={isActive}>
        <FiEdit />
        <p>Edit</p>
      </Link>
      <Link className={isActive}>
        <IoMdCloseCircleOutline />
        <p>Close</p>
      </Link>
    </ActionComponent>
  );
};

export default Action;

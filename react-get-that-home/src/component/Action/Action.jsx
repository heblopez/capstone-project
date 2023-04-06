import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { ActionComponent } from './Action-UI';

const Action = ({ isActive }) => {
  return (
    <ActionComponent className={isActive}>
      <Link>
        <FiEdit />
        <p>Edit</p>
      </Link>

      <Link>
        <IoMdCloseCircleOutline />
        <p>Close</p>
      </Link>
    </ActionComponent>
  );
};

export default Action;

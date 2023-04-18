import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { ActionComponent } from './Action-UI';
import { useUser } from '../../context/UserContext';
import { updateProperty } from '../../services/properties-services';

const Action = ({ id }) => {
  const location = useLocation();
  const { role } = useUser();
  const isActive =
    role === 'landlord' && location.pathname === '/my_properties'
      ? 'active'
      : 'none';

  function handlesRemove() {
    const formData = new FormData();
    formData.append('status', false);
    updateProperty(formData, id);
  }

  return (
    <ActionComponent className={isActive}>
      <Link className={isActive} to={`/edit/property/${id}`}>
        <FiEdit />
        <p>Edit</p>
      </Link>
      <Link className={isActive} onClick={handlesRemove}>
        <IoMdCloseCircleOutline />
        <p>Close</p>
      </Link>
    </ActionComponent>
  );
};

export default Action;

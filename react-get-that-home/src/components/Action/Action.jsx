import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { BsArrowBarUp } from 'react-icons/bs';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { ActionComponent } from './Action-UI';
import { useUser } from '../../context/UserContext';
import Properties, { updateProperty } from '../../services/properties-services';

const Action = ({ id, section }) => {
  const location = useLocation();
  const { role } = useUser();
  const isActive =
    role === 'landlord' && location.pathname === '/my_properties'
      ? 'active'
      : 'none';

  console.log(section);

  function handlesRemove() {
    const formData = new FormData();
    formData.append('status', false);
    updateProperty(formData, id);
  }

  function handlesRecover() {
    const formData = new FormData();
    formData.append('status', true);
    updateProperty(formData, id);
  }

  function handleDelete() {
    Properties.deleteProp(id);
  }

  return (
    <ActionComponent className={isActive}>
      {section === 'closed' ? (
        <>
          <Link className={isActive} onClick={handlesRecover}>
            <BsArrowBarUp />
            <p>restore</p>
          </Link>
          <Link className={isActive} onClick={handleDelete}>
            <IoMdCloseCircleOutline />
            <p>Close</p>
          </Link>
        </>
      ) : (
        <>
          <Link className={isActive} to={`/edit/property/${id}`}>
            <FiEdit />
            <p>Edit</p>
          </Link>
          <Link className={isActive} onClick={handlesRemove}>
            <IoMdCloseCircleOutline />
            <p>Close</p>
          </Link>
        </>
      )}
    </ActionComponent>
  );
};

export default Action;

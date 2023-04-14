import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { ActionComponent } from './Action-UI';
import { useUser } from '../../context/UserContext';
import STORE from '../../store/store';

function toClosedSection(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
  const objRemoved = arr.filter((prop) => prop.id === id);
  STORE.landlord.closed.push(...objRemoved);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}

const Action = ({ id }) => {
  const { user } = useUser();
  const landlord = user ? user.role : '';
  const isActive = landlord === 'landlord' ? 'active' : 'none';

  function toremove() {
    STORE.landlord.active = toClosedSection(STORE.landlord.active, id);
    console.log(STORE.landlord.active);
    console.log(STORE.landlord.closed);
  }

  return (
    <ActionComponent className={isActive}>
      <Link className={isActive} to={`/edit/property/${id}`}>
        <FiEdit />
        <p>Edit</p>
      </Link>
      <Link className={isActive} onClick={toremove}>
        <IoMdCloseCircleOutline />
        <p>Close</p>
      </Link>
    </ActionComponent>
  );
};

export default Action;

import React from 'react';
import Button from '../Button/Button';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { RiUserReceived2Line, RiHome8Line } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { BiLogOutCircle, BiUser } from 'react-icons/bi';
import { BsFillHeartFill } from 'react-icons/bs';
import logo from '../../assets/icon-gth.svg';
import HeaderCtn from './Header-UI';

const find = (
  <>
    <div className='btn-find'>
      <Button type={'ghost'}>
        <FiSearch />
        find a home
      </Button>
    </div>
  </>
);

const UnAthenticate = (
  <>
    <div className='btn-join'>
      <Button type={'secundary'}>
        <AiOutlineUserAdd />
        join
      </Button>
    </div>
    <div className='btn-login'>
      <Button type={'primary'}>
        <RiUserReceived2Line />
        login
      </Button>
    </div>
  </>
);

const logout = (
  <>
    <div className='btn-logout'>
      <Button type={'secundary'}>
        <BiLogOutCircle />
        logout
      </Button>
    </div>
  </>
);

const myProperties = (
  <>
    <div className='btn-my-properties'>
      <Button type={'primary'}>
        <RiHome8Line />
        My promerties
      </Button>
    </div>
  </>
);

const mySaveProp = (
  <>
    <div className='btn-save-properties'>
      <Button type={'primary'}>
        <BsFillHeartFill />
        saved promerties
      </Button>
    </div>
  </>
);

const profile = (
  <>
    <div className='btn-profile'>
      <Button type={'primary'}>
        <BiUser />
        profile
      </Button>
    </div>
  </>
);

const Header = ({ user, LandLord }) => {
  const isLogin = user;
  const isLandLord = LandLord;

  return (
    <HeaderCtn>
      <nav className='nav'>
        <div className='navbar'>
          <div className='top-menu'>
            <div className='img-logo'>
              <img src={logo} alt='logo' />
            </div>
            <div className='menu'>
              {find}
              {!isLogin && UnAthenticate}
              {isLogin && logout}
              {isLogin && isLandLord && myProperties}
              {isLogin && !isLandLord && mySaveProp}
              {isLogin && profile}
            </div>
          </div>
        </div>
      </nav>
    </HeaderCtn>
  );
};

export default Header;

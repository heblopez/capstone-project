import React from 'react';
import Button from '../Button/Button';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { RiUserReceived2Line, RiHome8Line } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { BiLogOutCircle, BiUser } from 'react-icons/bi';
import { BsFillHeartFill } from 'react-icons/bs';
import logo from '../../assets/icon-gth.svg';
import HeaderCtn from './Header-UI';
import { Link } from 'react-router-dom';

function Find() {
  return (
    <>
      <div className='btn-find'>
        <Link to={'/find_a_home'}>
          <Button type={'ghost'}>
            <FiSearch />
            find a home
          </Button>
        </Link>
      </div>
    </>
  );
}

function UnAthenticate({ getPage }) {
  return (
    <>
      <div className='btn-join'>
        <Link to={'/join'}>
          <Button type={'secundary'}>
            <AiOutlineUserAdd />
            join
          </Button>
        </Link>
      </div>
      <div className='btn-login' onClick={getPage}>
        <Button type={'primary'}>
          <RiUserReceived2Line />
          login
        </Button>
      </div>
    </>
  );
}

function Logout() {
  return (
    <>
      <div className='btn-logout'>
        <Button type={'secundary'}>
          <BiLogOutCircle />
          logout
        </Button>
      </div>
    </>
  );
}

function MyProperties() {
  return (
    <>
      <div className='btn-my-properties'>
        <Button type={'primary'}>
          <RiHome8Line />
          My promerties
        </Button>
      </div>
    </>
  );
}

function MySaveProp() {
  <>
    <div className='btn-save-properties'>
      <Button type={'primary'}>
        <BsFillHeartFill />
        saved promerties
      </Button>
    </div>
  </>;
}

function Profile() {
  return (
    <>
      <div className='btn-profile' id='profile'>
        <Button type={'primary'} click>
          <BiUser />
          profile
        </Button>
      </div>
    </>
  );
}

const Header = ({ user, LandLord, getPage }) => {
  const isLogin = user;
  const isLandLord = LandLord;

  return (
    <HeaderCtn>
      <nav className='nav'>
        <div className='navbar'>
          <div className='top-menu'>
            <div className='img-logo'>
              <Link to={'/'}>
                <img src={logo} alt='logo' />
              </Link>
            </div>
            <div className='menu'>
              {<Find />}
              {!isLogin && <UnAthenticate getPage={getPage} />}
              {isLogin && <Logout />}
              {isLogin && isLandLord && <MyProperties />}
              {isLogin && !isLandLord && <MySaveProp />}
              {isLogin && <Profile />}
            </div>
          </div>
        </div>
      </nav>
    </HeaderCtn>
  );
};

export default Header;

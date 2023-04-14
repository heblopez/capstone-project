import React from 'react';
import Button from '../Button/Button';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { RiUserReceived2Line, RiHome8Line } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { BiLogOutCircle, BiUser } from 'react-icons/bi';
import { BsFillHeartFill } from 'react-icons/bs';
import logo from '../../assets/icon-gth.svg';
import HeaderCtn from './Header-UI';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useShow } from '../../context/ShowContext';

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

function UnAthenticate() {
  const { handleShow } = useShow();
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
      <div className='btn-login' onClick={handleShow}>
        <Button type={'primary'}>
          <RiUserReceived2Line />
          login
        </Button>
      </div>
    </>
  );
}

function Logout() {
  const navigate = useNavigate();
  const { logout } = useUser();

  function handleClick() {
    logout();
    navigate('/');
  }

  return (
    <>
      <div className='btn-logout' onClick={handleClick}>
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
        <Link to={'/my_properties'}>
          <Button type={'primary'}>
            <RiHome8Line />
            My promerties
          </Button>
        </Link>
      </div>
    </>
  );
}

function MySaveProp() {
  return (
    <>
      <div className='btn-save-properties'>
        <Link to={'/saved_properties'}>
          <Button type={'primary'}>
            <BsFillHeartFill />
            saved promerties
          </Button>
        </Link>
      </div>
    </>
  );
}

function Profile() {
  return (
    <>
      <div className='btn-profile' id='profile'>
        <Link to={'/profile'}>
          <Button type={'primary'} click>
            <BiUser />
            profile
          </Button>
        </Link>
      </div>
    </>
  );
}

const Header = ({ user, whoIs, getPage }) => {
  const isLogin = user;
  const landLord = whoIs;
  const seeker = whoIs;

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
              {isLogin && landLord === 'landlord' && <MyProperties />}
              {isLogin && seeker === 'home_seeker' && <MySaveProp />}
              {isLogin && <Profile />}
            </div>
          </div>
        </div>
      </nav>
    </HeaderCtn>
  );
};

export default Header;

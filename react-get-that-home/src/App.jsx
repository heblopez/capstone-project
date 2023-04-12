import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UnAuthenticate from './auth/UnAuthenticate';
import Authenticate from './auth/Authenticate';
import { useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import { createPortal } from 'react-dom';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  function handleShowLogin() {
    setShowLogin(true);
  }

  function handleCloseLogin() {
    setShowLogin(false);
  }

  const user = false; // create Context
  const landLord = false; // create context de vendedor o comprador / rentador

  return (
    <div className='App'>
      <BrowserRouter>
        <Header user={user} LandLord={landLord} getPage={handleShowLogin} />
        {!user ? <UnAuthenticate /> : <Authenticate />}
        {showLogin &&
          createPortal(<LoginForm />, document.getElementById('portal-login'))}
        <Footer user={landLord} />
      </BrowserRouter>
    </div>
  );
}

export default App;

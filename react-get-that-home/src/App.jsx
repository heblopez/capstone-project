import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UnAuthenticate from './auth/UnAuthenticate';
import Authenticate from './auth/Authenticate';
import { useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import { createPortal } from 'react-dom';
import { useUser } from './context/UserContext';

function App() {
  const { user } = useUser();
  const [showLogin, setShowLogin] = useState(false);

  function handleShowLogin() {
    setShowLogin(!showLogin);
  }

  const whoIs = user ? user.role : '';

  console.log(user)

  return (
    <div>
      <BrowserRouter>
        <Header user={user} whoIs={whoIs} getPage={handleShowLogin} />
        {user ? <Authenticate /> : <UnAuthenticate />}
        {showLogin &&
          !user &&
          createPortal(<LoginForm />, document.getElementById('portal-login'))}
        <Footer user={whoIs} />
      </BrowserRouter>
    </div>
  );
}

export default App;

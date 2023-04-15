import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UnAuthenticate from './auth/UnAuthenticate';
import Authenticate from './auth/Authenticate';
import LoginForm from './components/LoginForm/LoginForm';
import { useUser } from './context/UserContext';
import { useShow } from './context/ShowContext';

function App() {
  const { user } = useUser();
  const { show } = useShow();

  const whoIs = user ? user.role : '';

  return (
    <div>
      <BrowserRouter>
        <Header user={user} whoIs={whoIs} />
        {user ? <Authenticate /> : <UnAuthenticate />}
        {show && <LoginForm />}
        <Footer user={whoIs} />
      </BrowserRouter>
    </div>
  );
}

export default App;

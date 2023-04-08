import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UnAuthenticate from './auth/UnAuthenticate';
import Authenticate from './auth/Authenticate';

function App() {
  const user = true; // create Context
  const landLord = false; // create context de vendedor o comprador / rentador

  return (
    <div className='App'>
      <BrowserRouter>
        <Header user={user} LandLord={false} />
        {user ? <Authenticate /> : <UnAuthenticate />}
        <Footer user={landLord} />
      </BrowserRouter>
    </div>
  );
}

export default App;

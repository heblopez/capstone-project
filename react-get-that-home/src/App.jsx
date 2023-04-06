import { BrowserRouter } from 'react-router-dom';
import Github from './component/Github/Github';
import avatar from './assets/user.svg';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

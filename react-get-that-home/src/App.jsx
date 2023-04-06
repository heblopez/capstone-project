import { BrowserRouter } from 'react-router-dom';
import Github from './component/Github/Github';
import avatar from './assets/user.svg';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Github name='Ruby Ramirez' avatar={avatar} />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter } from 'react-router-dom';
import SectionTeam from './Sections/SectionTeam/SectionTeam';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <SectionTeam />
      </BrowserRouter>
    </div>
  );
}

export default App;

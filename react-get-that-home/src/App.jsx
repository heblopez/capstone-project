import { BrowserRouter } from 'react-router-dom';
import SectionTeam from './Sections/SectionTeam/SectionTeam';
import SectionCreateAccount from './Sections/SectionCreactAccount/SectionCreateAccount';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <SectionCreateAccount />
        <SectionTeam />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

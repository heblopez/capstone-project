import { BrowserRouter } from 'react-router-dom';
import SectionTeam from './Sections/SectionTeam/SectionTeam';
import SectionCreateAccount from './Sections/SectionCreactAccount/SectionCreateAccount';
import Footer from './components/Footer/Footer';
import SectionPrice from './Sections/SectionPrice/SectionPrice';
import SectionSearch from './Sections/SectionSearch/SectionSearch';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <SectionSearch />
        <SectionPrice />
        <SectionCreateAccount />
        <SectionTeam />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

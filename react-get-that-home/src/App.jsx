import { BrowserRouter } from 'react-router-dom';
import SectionTeam from './Sections/SectionTeam/SectionTeam';
import SectionCreateAccount from './Sections/SectionCreactAccount/SectionCreateAccount';
import Footer from './components/Footer/Footer';
import SectionPrice from './Sections/SectionPrice/SectionPrice';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <SectionPrice />
        <SectionCreateAccount />
        <SectionTeam />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

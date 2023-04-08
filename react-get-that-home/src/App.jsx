import { BrowserRouter } from 'react-router-dom';
import SectionTeam from './Sections/SectionTeam/SectionTeam';
import SectionCreateAccount from './Sections/SectionCreactAccount/SectionCreateAccount';
import Footer from './components/Footer/Footer';
import SectionPrice from './Sections/SectionPrice/SectionPrice';
import SectionSearch from './Sections/SectionSearch/SectionSearch';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        {/* <SectionSearch /> */}
        <SectionPrice />
        <SectionCreateAccount />
        <SectionTeam />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

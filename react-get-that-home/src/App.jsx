import { useState } from 'react';
import SignupForm from './component/Inputs/SignupForm';
import Description from './component/Description/Description';
import Action from './component/Action/Action';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <BrowserRouter>
        <Description
          price={'3,000'}
          type={'Aparment'}
          address={'86872 Jacob Gateway, Durganport, WV 48044'}
          bedCount={4}
          bathroomCount={2}
          petss={true}
          classSpanAparment={'apartment'}
          classSpanPrice={'price'}
        />
        <Action isActive='active' />
      </BrowserRouter>
    </div>
  );
}

export default App;

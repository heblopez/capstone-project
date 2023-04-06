import { useState } from 'react';
import SignupForm from './component/Inputs/SignupForm';
import Description from './component/Description/Description';
import Action from './component/Action/Action';
import { BrowserRouter } from 'react-router-dom';
import Property from './component/Property/Property';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <BrowserRouter>
        <Property />
        <Action isActive='active' />
      </BrowserRouter>
    </div>
  );
}

export default App;

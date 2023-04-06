import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';;
import Card from './component/Card/Card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <BrowserRouter>
        <Card />
      </BrowserRouter>
    </div>
  );
}

export default App;

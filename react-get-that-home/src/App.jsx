import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Button from './component/Button/Button';
import { BiUser } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Button clase={'btn--secundary'}>
          <BiUser />
          Button
          <IoIosArrowDown />
        </Button>
      </BrowserRouter>
    </div>
  );
}

export default App;

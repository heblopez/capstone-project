import { createContext, useContext, useState } from 'react';

const ShowContext = createContext();

function ShowProvider({ children }) {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <ShowContext.Provider value={{ show, handleShow }}>
      {children}
    </ShowContext.Provider>
  );
}

function useShow() {
  return useContext(ShowContext);
}

export { useShow, ShowProvider };

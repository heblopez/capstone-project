import { createContext, useContext, useEffect, useState } from 'react';
import Properties from '../services/properties-services';

const PropertyContext = createContext();

function PropertyProvider({ children }) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    Properties.get()
      .then((prop) => setProperties(prop))
      .catch(console.log);
  }, []);

  // console.log(properties);

  return (
    <PropertyContext.Provider value={properties}>
      {children}
    </PropertyContext.Provider>
  );
}

function useProp() {
  return useContext(PropertyContext);
}

export { useProp, PropertyProvider };

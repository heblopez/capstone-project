import { createContext, useContext, useEffect, useState } from 'react';
import Properties from '../services/properties-services';
const PropertyContext = createContext();

function PropertyProvider({ children }) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const properties = setTimeout(() => {
      Properties.get()
        .then((prop) => setProperties(prop))
        .catch(console.log);
    }, 500);
    return () => clearTimeout(properties);
  }, []);

  return (
    <PropertyContext.Provider value={{ properties }}>
      {children}
    </PropertyContext.Provider>
  );
}

function useProp() {
  return useContext(PropertyContext);
}

export { useProp, PropertyProvider };

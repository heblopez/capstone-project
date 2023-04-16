import { createContext, useContext, useEffect, useState } from 'react';
import Properties from '../services/properties-services';
const PropertyContext = createContext();

function PropertyProvider({ children }) {
  const [properties, setProperties] = useState([]);
  const [rentOrSale, setRentOrSale] = useState('rent');

  useEffect(() => {
    const properties = setTimeout(() => {
      Properties.get()
        .then((prop) => setProperties(prop))
        .catch(console.log);
    }, 500);
    return () => clearTimeout(properties);
  }, []);

  function handleChange(e) {
    const value = e.target.textContent;
    setRentOrSale(value);
  }

  return (
    <PropertyContext.Provider
      value={{ properties, rentOrSale, handleChange }}
    >
      {children}
    </PropertyContext.Provider>
  );
}

function useProp() {
  return useContext(PropertyContext);
}

export { useProp, PropertyProvider };

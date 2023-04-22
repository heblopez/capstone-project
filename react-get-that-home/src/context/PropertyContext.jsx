import { createContext, useContext, useEffect, useState } from 'react';
import Properties from '../services/properties-services';
const PropertyContext = createContext();

function PropertyProvider({ children }) {
  const [properties, setProperties] = useState([]);
  const [rentOrSale, setRentOrSale] = useState('rent');
  const [searchBy, setSearchBy] = useState({});

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

  // console.log(search);

  return (
    <PropertyContext.Provider
      value={{ properties, rentOrSale, handleChange, setSearchBy, searchBy }}
    >
      {children}
    </PropertyContext.Provider>
  );
}

function useProp() {
  return useContext(PropertyContext);
}

export { useProp, PropertyProvider };

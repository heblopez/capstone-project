import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
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

  const handleChange = useCallback(
    (e) => {
      const value = e.target.textContent;
      setRentOrSale(value);
    },
    [setRentOrSale]
  );

  const contextValue = useMemo(() => {
    return { properties, rentOrSale, handleChange, setSearchBy, searchBy };
  }, [properties, rentOrSale, handleChange, setSearchBy, searchBy]);

  return (
    <PropertyContext.Provider value={contextValue}>
      {children}
    </PropertyContext.Provider>
  );
}

function useProp() {
  return useContext(PropertyContext);
}

export { useProp, PropertyProvider };

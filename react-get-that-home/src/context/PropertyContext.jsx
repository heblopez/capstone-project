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
  const [searching, setSearching] = useState({
    looking: '',
    want: '',
    where: '',
  });

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
    return { properties, rentOrSale, handleChange, setSearching, searching };
  }, [properties, rentOrSale, handleChange, setSearching, searching]);

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
